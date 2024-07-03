<?php
/**
 * @author  wpWax
 * @since   1.0.0
 * @version 1.0.0
 */

namespace Templatiq\Integrations\Directorist;

use Templatiq\Abstracts\IntegrationBase;
use Templatiq\Integrations\Directorist\Routes;

class Directorist extends IntegrationBase {
	public function boot(): void {
		Compatibility::init();

		if ( ! class_exists( '\Directorist_Base' ) ) {
			return;
		}

		// $disable_default_directory_type = get_transient( 'templatiq_disable_import_default_directory' );
		// if ( $disable_default_directory_type ) {
		// 	delete_transient( 'templatiq_disable_import_default_directory' );
		// 	add_filter( 'atbdp_create_required_pages', function () {
		// 		return false;
		// 	} );
		// }

		AddBuilderSettings::init();
		AddCustomPages::init();
		Localize::init();
		Routes::init();
		Ajax::init();
	}
}