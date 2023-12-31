(function($){

    var TemplatiqImages = {

        init: function() {

            if ( undefined != wp && wp.media ) {

                var $ = jQuery,
                    oldMediaFramePost = wp.media.view.MediaFrame.Post,
                    oldMediaFrameSelect = wp.media.view.MediaFrame.Select;

                wp.media.view.TemplatiqAttachmentsBrowser = require( './frame.js' );

                const pixabayFrame = {

                    // Tab / Router
                    browseRouter( routerView ) {
                        oldMediaFrameSelect.prototype.browseRouter.apply( this, arguments );
                        routerView.set( {
                            astraimages: {
                                text: templatiqImages.title,
                                priority: 70,
                            },
                        } );
                    },
                
                    // Handlers
                    bindHandlers() {
                        if ( templatiqImages.is_elementor_editor ) {
                            oldMediaFramePost.prototype.bindHandlers.apply( this, arguments );
                        } else {
                            oldMediaFrameSelect.prototype.bindHandlers.apply( this, arguments );
                        }
                        this.on( 'content:create:astraimages', this.astraimages, this );
                    },
                
                    /**
                     * Render callback for the content region in the `browse` mode.
                     *
                     * @param {wp.media.controller.Region} contentRegion
                     */
                    astraimages( contentRegion ) {
                        const state = this.state();
                        // Browse our library of attachments.
                        let thisView = new wp.media.view.TemplatiqAttachmentsBrowser({
                            controller: this,
                            model:      state,
                            AttachmentView: state.get( 'AttachmentView' )
                        });
                        contentRegion.view = thisView
                        wp.media.view.TemplatiqAttachmentsBrowser.object = thisView
                        setTimeout( function() {
                            $( document ).trigger( 'ast-image__set-scope' );
                        }, 100 );
                    }
                    
                }

                if ( templatiqImages.is_elementor_editor ) {
                    wp.media.view.MediaFrame.Post = oldMediaFramePost.extend( pixabayFrame );
                } else {
                    wp.media.view.MediaFrame.Select = oldMediaFrameSelect.extend( pixabayFrame );
                }
            }
        },

    };

    /**
     * Initialize TemplatiqImages
     */
    $( function(){

        TemplatiqImages.init();

        if ( templatiqImages.is_bb_active && templatiqImages.is_bb_editor ) {
            if ( undefined !== FLBuilder ) {
                if ( null !== FLBuilder._singlePhotoSelector ) {
                    FLBuilder._singlePhotoSelector.on( 'open', function( event ) {
                        TemplatiqImages.init();
                    } );
                }
            }
        }

    });

})(jQuery);

