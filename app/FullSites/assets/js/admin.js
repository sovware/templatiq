(function ($) {

	/**
     * Admin
     *
     * @since x.x.x
     */
    StarterTemplatesAdmin = {

		/**
         * Initializes Events.
         *
         * @since x.x.x
         * @method init
         */
        init: function () {
            this._bind();
        },

        /**
         * Binds events for the BSF Quick Links
         *
         * @since x.x.x
         * @access private
         * @method _bind
         */
        _bind: function () {
            $(window).on('scroll', StarterTemplatesAdmin._addCustomCTAInfobar);
            $(document).on('templatiq-sites-change-page-builder', StarterTemplatesAdmin._changeCTALink);
		},

		_changeCTALink: function(event) {
			if( TemplatiqSitesAdmin.default_cta_link ) {
				$('.templatiq-sites-cta-link').attr( 'href', TemplatiqSitesAdmin.default_cta_link );
			}

			if( TemplatiqSitesAdmin.quick_corner_cta_link ) {
				$('.bsf-quick-link-item-upgrade').attr( 'href', TemplatiqSitesAdmin.quick_corner_cta_link );
			}

        },

		/**
         * Show Custom CTA on scroll.
         */
        _addCustomCTAInfobar: function () {
            var scroll = $(window).scrollTop();

            if (scroll > 70) {
                $(".templatiq-sites-custom-cta-wrap").addClass("show");
            } else {
                $(".templatiq-sites-custom-cta-wrap").removeClass("show");
            }
        },

    };

    $(function () {
        StarterTemplatesAdmin.init();
    });
})(jQuery);
