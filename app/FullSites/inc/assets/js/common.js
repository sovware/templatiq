(function($){

    $scope = {};

    TemplatiqImageCommon = {

        images: {},
        image: {},
        action: '',
        offset: 0,
        loadingStatus: true,
        config: {
            q              : '',
            lang           : 'en',
            image_type     : 'all',
            orientation    : 'all',
            category       : '',
            min_width      : 0,
            min_height     : 0,
            colors         : '',
            editors_choice : false,
            safesearch     : true,
            order          : 'popular',
            page           : $( 'body' ).data( 'page' ),
            per_page       : 30,
            callback       : '',
            pretty         : true
        },
        canSave: false,
        infiniteLoad: false,
        uploader: {},
        file: {},
        frame: {},
        isPreview: false,
        apiStatus: true,
        id : '',
        isValidating: false,
        scopeSet: false,

        init: function() {
            this._bind();
        },

        /**
         * Binds events for the Templatiq Sites.
         *
         * @since 1.0.0
         * @access private
         * @method _bind
         */
        _bind: function() {

            // Triggers.
            $( document ).on( "ast-image__refresh", TemplatiqImageCommon._initImages );
            $( document ).on( "ast-image__set-scope", TemplatiqImageCommon._setScope );
            $( document ).on( "click", ".ast-image__list-img-overlay", TemplatiqImageCommon._preview );
            $( document ).on( "click", ".ast-image__go-back-text", TemplatiqImageCommon._goBack );
            $( document ).on( "click", ".ast-image__save", TemplatiqImageCommon._save );
            $( document ).on( "click", ".ast-image__filter-safesearch input", TemplatiqImageCommon._filter );
            $( document ).on( "change", ".ast-image__filter select", TemplatiqImageCommon._filter );
            $( document ).on( "click", ".ast-image__edit-api", TemplatiqImageCommon._editAPI );
            $( document ).on( "click", ".ast-image__browse-images", TemplatiqImageCommon._browse );
            $( document ).on( "click", ".ast-image__download-icon", TemplatiqImageCommon._saveFromScreen );
        },

        _saveFromScreen: function() {

            let saveIcon = $(this);
            let source = saveIcon.closest('.ast-image__list-img-overlay');

            saveIcon.addClass( 'installing' );

            TemplatiqImageCommon.image = {
                'largeImageURL': source.data( 'img-url' ),
                'tags' : source.find( 'span:first-child' ).html(),
                'id' : source.data( 'img-id' ),
            };

            TemplatiqImageCommon._saveAjax( function ( data ) {
                if ( undefined == data.data ) {
                    return;
                }
                templatiqImages.saved_images = data.data['updated-saved-images'];
                wp.media.view.TemplatiqAttachmentsBrowser.object.photoUploadComplete( data.data );
                saveIcon.text( 'Done' );
                saveIcon.removeClass( 'installing' );
                TemplatiqImageCommon._empty();
            } );
        },

        _browse: function() {
            $scope.find( '.ast-image__search' ).trigger( 'keyup' );
        },

        _editAPI: function( event ) {
            event.stopPropagation();
            wp.media.view.TemplatiqAttachmentsBrowser.images = [];
            $scope.find( '.ast-image__loader-wrap' ).show();
            $scope.find( '.ast-image__skeleton' ).html( '' );
            $scope.find( '.ast-image__skeleton' ).attr( 'style', '' );
            $scope.find( '.ast-image__search' ).trigger( 'keyup' );
            $scope.find( '.ast-image__loader-wrap' ).hide();
        },

        _filter: function() {
            let safesearch = $scope.find( '.ast-image__filter-safesearch input:checked' ).length ? true : false;
            let category = $scope.find( '.ast-image__filter-category select' ).val();
            let orientation = $scope.find( '.ast-image__filter-orientation select' ).val();
            let order = $scope.find( '.ast-image__filter-order select' ).val();

            TemplatiqImageCommon.config.safesearch = safesearch;
            TemplatiqImageCommon.config.orientation = orientation;
            TemplatiqImageCommon.config.category = category;
            TemplatiqImageCommon.config.order = order;

            $scope.find( '.ast-image__search' ).trigger( 'keyup' );
            $scope.find( '.ast-image__loader-wrap' ).show();
        },

        _save: function() {

            if ( ! TemplatiqImageCommon.canSave ) {
                return;
            }

            let thisBtn = $( this )

            if ( thisBtn.data( 'import-status' ) ) {
                return;
            }
            thisBtn.removeClass( 'updating-message' );

			thisBtn.text( templatiqImages.downloading );
            thisBtn.addClass( 'installing' );

            TemplatiqImageCommon.canSave = false;

            TemplatiqImageCommon._saveAjax( function ( data ) {
                if ( undefined == data.data ) {
                    return;
                }
                templatiqImages.saved_images = data.data['updated-saved-images'];
                wp.media.view.TemplatiqAttachmentsBrowser.object.photoUploadComplete( data.data );
                thisBtn.text( 'Done' );
                thisBtn.removeClass( 'installing' );
                TemplatiqImageCommon._empty();
            } );

        },

        _saveAjax: function( callback ) {

            // Work with JSON page here
            $.ajax({
                url: templatiqImages.ajaxurl,
                type: 'POST',
                dataType: 'json',
                data: {
                    'action' : 'templatiq-sites-create-image',
                    'url' : TemplatiqImageCommon.image.largeImageURL,
                    'name' : TemplatiqImageCommon.image.tags,
                    'id' : TemplatiqImageCommon.image.id,
                    '_ajax_nonce' : templatiqImages._ajax_nonce,
                },
            })
            .fail(function( jqXHR ){
                console.log( jqXHR );
            })
            .done( callback );
        },

        _empty: function() {

            TemplatiqImageCommon.image = {};
            TemplatiqImageCommon.canSave = false;
            TemplatiqImageCommon.uploader = {};
            TemplatiqImageCommon.file = {};
            TemplatiqImageCommon.isPreview = false;
        },

        _goBack: function() {

            TemplatiqImageCommon._empty();

            $( document ).trigger( 'ast-image__refresh' );

            $scope.find( '.ast-image__skeleton' ).show();
            $scope.removeClass( 'preview-mode' );
            $scope.find( '.ast-attachments-search-wrap' ).children().show();
            $scope.find( '.ast-image__go-back' ).remove();
            $scope.find( '.ast-image__save-wrap' ).remove();
            $scope.find( '.ast-image__preview-skeleton' ).hide();
            $scope.find( '.ast-image__preview-skeleton' ).html( '' );

            let wrapHeight = ( TemplatiqImageCommon.offset - 210 );
            $scope.find( '.ast-image__skeleton-inner-wrap' ).css( 'height', wrapHeight );
        },

        _preview: function(event) {

            if( event && event.target.classList.contains( 'ast-image__download-icon' ) ) {
                return;
            }

            TemplatiqImageCommon.isPreview = true;

            let height = ( TemplatiqImageCommon.offset - 190 );
            $scope.find( '.ast-image__skeleton-inner-wrap' ).css( 'height', height );

            setTimeout( function() {
                $scope.find( '.ast-image__loader-wrap' ).hide();
            }, 200 );

            TemplatiqImageCommon.image = {
                'largeImageURL': $( this ).data( 'img-url' ),
                'tags' : $( this ).find( 'span:first-child' ).html(),
                'id' : $( this ).data( 'img-id' ),
            };

            let preview = wp.template( 'ast-image-single' );
            let single_html = preview( TemplatiqImageCommon.image );

            let save_btn = wp.template( 'ast-image-save' );
            let single_btn = save_btn( TemplatiqImageCommon.image );

            let wrapHeight = $scope.find( '.ast-image__skeleton-inner-wrap' ).outerHeight();
            wrapHeight = ( wrapHeight - 60 );

            $scope.find( '.ast-image__skeleton' ).hide();
            $scope.addClass( 'preview-mode' );
            $scope.find( '.ast-attachments-search-wrap' ).children().hide();
            $scope.find( '.ast-image__search-wrap' ).before( $( '#tmpl-ast-image-go-back' ).text() );
            $scope.find( '.ast-image__search-wrap' ).after( single_btn );
            $scope.find( '.ast-image__preview-skeleton' ).html( single_html );
            $scope.find( '.ast-image__preview-skeleton' ).show();
            $scope.find( '.single-site-preview' ).css( 'max-height', wrapHeight );

            TemplatiqImageCommon.canSave = true;
        },

        _setScope: function() {

            TemplatiqImageCommon.frame = wp.media.view.TemplatiqAttachmentsBrowser.object.$el.closest( '.media-frame' );
            $scope = TemplatiqImageCommon.frame.find( '.ast-attachments-browser' );

            if ( undefined == $scope ) {
                return;
            }

            $( 'body' ).data( 'page', 1 );
            let skeleton = $( '#tmpl-ast-image-skeleton' ).text();
            $scope.append( skeleton );

            let pixabay_filter = wp.template( 'ast-image-filters' );
            if ( ! $scope.find( '.ast-image__filter-wrap' ).length ) {
            	$scope.find( '.ast-attachments-search-wrap' ).append( pixabay_filter() );
            }

            TemplatiqImageCommon.offset = TemplatiqImageCommon.frame.outerHeight();
            let wrapHeight = ( TemplatiqImageCommon.offset - 210 );
            $scope.find( '.ast-image__skeleton-inner-wrap' ).css( 'height', wrapHeight );
            $scope.find( '.ast-image__search' ).trigger( 'keyup' );
            $scope.find( '.ast-image__loader-wrap' ).show();
            $scope.find( '.ast-image__skeleton-inner-wrap' ).scroll( TemplatiqImageCommon._loadMore );

            TemplatiqImageCommon.scopeSet = true;
        },

        _initImages: function() {

            let loop = wp.template( 'ast-image-list' );
            let list_html = loop( wp.media.view.TemplatiqAttachmentsBrowser.images );
            let container = document.querySelector( '.ast-image__skeleton' );
            $scope.find( '.ast-image__loader-wrap' ).show();

            if ( TemplatiqImageCommon.infiniteLoad ) {
                TemplatiqImageCommon.images.push( wp.media.view.TemplatiqAttachmentsBrowser.images );
                $scope.find( '.ast-image__skeleton' ).append( list_html );
            } else {
                TemplatiqImageCommon.images = wp.media.view.TemplatiqAttachmentsBrowser.images;
                $scope.find( '.ast-image__skeleton' ).html( list_html );
            }
            TemplatiqImageCommon.loadingStatus = true;
            if ( $scope.find( '.ast-image__list-wrap' ).length ) {
                imagesLoaded( container, function() {
                    $scope.find( '.ast-image__list-wrap' ).each( function( index ) {
                        $( this ).removeClass( 'loading' );
                        $( this ).addClass( 'loaded' );
                    } );
                    $scope.find( '.ast-image__loader-wrap' ).hide();
                });
            } else {
                $scope.find( '.ast-image__loader-wrap' ).hide();
            }
        },

        _loadMore: function() {

            if( TemplatiqImageCommon.isPreview ) {
                return;
            }

            let page = $( 'body' ).data( 'page' );
            page = ( undefined == page ) ? 2 : ( page + 1 );

            if ( undefined != $scope.find( '.ast-image__list-wrap:last' ).offset() ) {

                if( ( $( window ).scrollTop() + TemplatiqImageCommon.offset ) >= ( $scope.find( '.ast-image__list-wrap:last' ).offset().top ) ) {

                    if ( TemplatiqImageCommon.loadingStatus ) {

                        $scope.find( '.ast-image__loader-wrap' ).show();

                        TemplatiqImageCommon.loadingStatus = false;
                        TemplatiqImageCommon.infiniteLoad = true;
                        TemplatiqImageCommon.config.page = page;

                        $( 'body' ).data( 'page', page );

                        $scope.find( '.ast-image__search' ).trigger( 'infinite' );
                    }
                }
            }
        },
    };

    /**
     * Initialize TemplatiqImageCommon
     */
    $( function(){

        TemplatiqImageCommon.init();

    });

})(jQuery);

