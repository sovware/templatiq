(function($){

	TemplatiqSitesImportStatus = {
        timer: null,
		ajax_in_process: false,
		current_step: null,
		interval: $( '.templatiq-sites-import-screen' ).length ? 1000 : 10000,

		/**
		 * Init
		 */
		init: function()
		{
            this.start();
        },

		/**
		 * Start
		 */
        start: function() {
            TemplatiqSitesImportStatus.timer = setInterval( TemplatiqSitesImportStatus.check_status, TemplatiqSitesImportStatus.interval );
        },

		/**
		 * Check Status
		 */
        check_status: function() {
			if( false === TemplatiqSitesImportStatus.ajax_in_process ) {
				TemplatiqSitesImportStatus.ajax_in_process = true;
				TemplatiqSitesImportStatus._ajax_request();
            }
		},

		/**
		 * Ajax Request
		 */
		_ajax_request: function() {
			$.ajax({
				url: TemplatiqSitesImportStatusVars.ajaxurl,
				type: 'POST',
				data: {
					'action' : 'templatiq_sites_check_import_status',
					'_ajax_nonce' : TemplatiqSitesImportStatusVars._ajax_nonce,
				},
			})
			.done(function (result) {
				
				TemplatiqSitesImportStatus.ajax_in_process = false;

				// Admin Bar UI markup.
				if( "complete" === result.data.response.step || "fail" === result.data.response.step ) {
					TemplatiqSitesImportStatus.stop();

					var response_message = '<span class="dashicons dashicons-no-alt"></span> Site Import Failed';
					if( "complete" === result.data.response.step ) {
						response_message = '<span class="dashicons dashicons-yes"></span>' + response_message;
					}

					$('#templatiq-sites-import-status-admin-bar').html( response_message );
					
				} else {
					$('#templatiq-sites-import-status-admin-bar').html( '<span class="loading"></span>' + result.data.response.message );
				}

				// Admin page UI markup.
				var currentStep = $( '.import-step[data-step="' + result.data.response.step + '"]' );
				if( currentStep.length ) {
					if( "complete" === result.data.response.step || "fail" === result.data.response.step ) {
						$( '.import-step' ).removeClass( 'processing' ).addClass( 'success' );;
					} else if( TemplatiqSitesImportStatus.current_step !== result.data.response.step ) {
						TemplatiqSitesImportStatus.current_step = result.data.response.step;

						currentStep.prevAll().removeClass('processing').addClass('success');
						currentStep.addClass('processing');
					}
				}
			})
			.fail(function (err) {
				TemplatiqSitesImportStatus.ajax_in_process = false;

				// Stop.
				TemplatiqSitesImportStatus.stop();
			});
		},

		/**
		 * Step
		 */
        stop: function() {
            clearInterval(TemplatiqSitesImportStatus.timer);
        }

	};

	/**
	 * Initialize TemplatiqSitesImportStatus
	 */
	$(function(){
		TemplatiqSitesImportStatus.init();
	});

})(jQuery);
