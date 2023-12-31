(function($){

	TemplatiqSitesInstallTheme = {

		/**
		 * Init
		 */
		init: function() {
			this._auto_close_notice();
			this._bind();
		},

		/**
		 * Binds events for the Templatiq Sites.
		 *
		 * @since 1.3.2
		 *
		 * @access private
		 * @method _bind
		 */
		_bind: function()
		{
			$( document ).on( 'click', '.templatiq-sites-theme-not-installed', TemplatiqSitesInstallTheme._install_and_activate );
			$( document ).on( 'click', '.templatiq-sites-theme-installed-but-inactive', TemplatiqSitesInstallTheme._activateTheme );
			$( document ).on( 'wp-theme-install-success' , TemplatiqSitesInstallTheme._activateTheme);
		},

		/**
		 * Close Getting Started Notice
		 *
		 * @param  {object} event
		 * @return void
		 */
		_auto_close_notice: function() {

			if( $( '.templatiq-sites-getting-started-btn' ).length ) {
				$.ajax({
					url: TemplatiqSitesInstallThemeVars.ajaxurl,
					type: 'POST',
					data: {
						'action' : 'templatiq-sites-getting-started-notice',
						'_ajax_nonce' : TemplatiqSitesInstallThemeVars._ajax_nonce,
					},
				})
				.done(function (result) {
				});
			}

		},

		/**
		 * Activate Theme
		 *
		 * @since 1.3.2
		 */
		_activateTheme: function( event, response ) {
			event.preventDefault();

			$('#astra-theme-activation-nag a').addClass('processing');

			if( response ) {
				$('#astra-theme-activation-nag a').text( TemplatiqSitesInstallThemeVars.installed );
			} else {
				$('#astra-theme-activation-nag a').text( TemplatiqSitesInstallThemeVars.activating );
			}

			// WordPress adds "Activate" button after waiting for 1000ms. So we will run our activation after that.
			setTimeout( function() {

				$.ajax({
					url: TemplatiqSitesInstallThemeVars.ajaxurl,
					type: 'POST',
					data: {
						'action' : 'templatiq-sites-activate-theme',
						'_ajax_nonce' : TemplatiqSitesInstallThemeVars._ajax_nonce,
					},
				})
				.done(function (result) {
					if( result.success ) {
						$('.templatiq-sites-theme-action-link').parent().html( TemplatiqSitesInstallThemeVars.activated + ' 🎉' );
					}

				});

			}, 3000 );

		},

		/**
		 * Install and activate
		 *
		 * @since 1.3.2
		 *
		 * @param  {object} event Current event.
		 * @return void
		 */
		_install_and_activate: function(event ) {
			event.preventDefault();
			var theme_slug = $(this).data('theme-slug') || '';
			var btn = $( event.target );

			if ( btn.hasClass( 'processing' ) ) {
				return;
			}

			btn.text( TemplatiqSitesInstallThemeVars.installing ).addClass('processing');

			if ( wp.updates.shouldRequestFilesystemCredentials && ! wp.updates.ajaxLocked ) {
				wp.updates.requestFilesystemCredentials( event );
			}

			wp.updates.installTheme( {
				slug: theme_slug
			});
		}

	};

	/**
	 * Initialize
	 */
	$(function(){
		TemplatiqSitesInstallTheme.init();
	});

})(jQuery);