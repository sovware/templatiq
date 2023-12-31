<?php
/**
 * Templatiq Sites Compatibility for 3rd party plugins.
 *
 * @package Templatiq Sites
 * @since 1.0.11
 */

if ( ! class_exists( 'Templatiq_Sites_Compatibility' ) ) :

	/**
	 * Templatiq Sites Compatibility
	 *
	 * @since 1.0.11
	 */
	class Templatiq_Sites_Compatibility {

		/**
		 * Instance
		 *
		 * @access private
		 * @var object Class object.
		 * @since 1.0.11
		 */
		private static $instance;

		/**
		 * Initiator
		 *
		 * @since 1.0.11
		 * @return object initialized object of class.
		 */
		public static function instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 *
		 * @since 1.0.11
		 */
		public function __construct() {

			// Plugin - Templatiq Pro.
			// require_once TEMPLATIQ_SITES_DIR . 'inc/classes/compatibility/astra-pro/class-templatiq-sites-compatibility-astra-pro.php';

			// Plugin - WooCommerce.
			require_once TEMPLATIQ_SITES_DIR . 'inc/classes/compatibility/woocommerce/class-templatiq-sites-compatibility-woocommerce.php';

			// // Plugin - WooCommerce.
			// require_once TEMPLATIQ_SITES_DIR . 'inc/classes/compatibility/surecart/class-templatiq-sites-compatibility-surecart.php';

			// // Plugin - LearnDash LMS.
			// require_once TEMPLATIQ_SITES_DIR . 'inc/classes/compatibility/sfwd-lms/class-templatiq-sites-compatibility-sfwd-lms.php';

			// Plugin - Elementor.
			require_once TEMPLATIQ_SITES_DIR . 'inc/classes/compatibility/elementor/class-templatiq-sites-compatibility-elementor.php';

			// Plugin - Beaver Builder.
			// require_once TEMPLATIQ_SITES_DIR . 'inc/classes/compatibility/beaver-builder/class-templatiq-sites-compatibility-bb.php';

			// // Plugin - LearnDash.
			// require_once TEMPLATIQ_SITES_DIR . 'inc/classes/compatibility/learndash/class-templatiq-sites-compatibility-learndash.php';

			// // Plugin - UAG.
			// require_once TEMPLATIQ_SITES_DIR . 'inc/classes/compatibility/uag/class-templatiq-sites-compatibility-uag.php';

			// // Plugin - UABB.
			// require_once TEMPLATIQ_SITES_DIR . 'inc/classes/compatibility/uabb/class-templatiq-sites-compatibility-uabb.php';

			// // Plugin - Checkout Plugins - Stripe.
			// require_once TEMPLATIQ_SITES_DIR . 'inc/classes/compatibility/checkout-plugins-stripe-woo/class-templatiq-sites-checkout-plugins-stripe-woo.php';

			// // Plugin - Cartflows.
			// require_once TEMPLATIQ_SITES_DIR . 'inc/classes/compatibility/cartflows/class-templatiq-sites-compatibility-cartflows.php';
		}

	}

	/**
	 * Kicking this off by calling 'instance()' method
	 */
	Templatiq_Sites_Compatibility::instance();

endif;


