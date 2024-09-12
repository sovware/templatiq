<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\FullTemplate;

use Templatiq\Abstracts\AjaxBase;

class Ajax extends AjaxBase {

	public function __construct() {
		$this->action( 'wp_ajax_templatiq_sites_set_site_data', [Controller::class, 'set_site_data'] );
		$this->action( 'wp_ajax_report_error', [Controller::class, 'report_error'] );

		$this->action( 'wp_ajax_templatiq_sites_import_content_persona_wise', [Controller::class, 'import_content_persona_wise'] );

		$this->action( 'wp_ajax_templatiq-required-plugins', [Controller::class, 'required_plugin'] );
		$this->action( 'wp_ajax_templatiq-required-plugin-activate', [Controller::class, 'required_plugin_activate'] );

		$this->action( 'wp_ajax_templatiq-sites-backup-settings', [Controller::class, 'backup_settings'] );

		$this->action( 'wp_ajax_templatiq-sites-set-reset-data', [Controller::class, 'get_reset_data'] );
		$this->action( 'wp_ajax_templatiq-sites-reset-terms-and-forms', [Controller::class, 'reset_terms_and_forms'] );
		$this->action( 'wp_ajax_templatiq-sites-reset-posts', [Controller::class, 'reset_posts'] );
		$this->action( 'wp_ajax_templatiq-sites-get-deleted-post-ids', [Controller::class, 'get_deleted_post_ids'] );

		// $this->action( 'wp_ajax_templatiq-sites-activate-theme', [Controller::class, 'install_activate_theme'] );
		$this->action( 'wp_ajax_templatiq-sites-api-request', [Controller::class, 'api_request'] );
		$this->action( 'wp_ajax_templatiq-sites-filesystem-permission', [Controller::class, 'filesystem_permission'] );

		$this->action( 'wp_ajax_install_self_hosted_plugin', [Controller::class, 'install_self_hosted_plugin'] );
	}
}