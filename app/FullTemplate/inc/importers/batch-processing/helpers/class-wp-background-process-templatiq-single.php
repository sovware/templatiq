<?php
/**
 * Single Page Background Process
 *
 * @package Templatiq Sites
 * @since 2.0.0
 */

if ( class_exists( 'WP_Background_Process' ) ) :

	/**
	 * Image Background Process
	 *
	 * @since 2.0.0
	 */
	class WP_Background_Process_Templatiq_Single extends WP_Background_Process {

		/**
		 * Image Process
		 *
		 * @var string
		 */
		protected $action = 'templatiq_sites_single_page';

		/**
		 * Task
		 *
		 * Override this method to perform any actions required on each
		 * queue item. Return the modified item for further processing
		 * in the next pass through. Or, return false to remove the
		 * item from the queue.
		 *
		 * @since 2.0.0
		 *
		 * @param object $object Queue item object.
		 * @return mixed
		 */
		protected function task( $object ) {

			$page_id = $object['page_id'];

			$process = $object['instance'];

			if ( method_exists( $process, 'import_single_post' ) ) {
				$process->import_single_post( $page_id );
			}

			return false;
		}

		/**
		 * Complete
		 *
		 * Override if applicable, but ensure that the below actions are
		 * performed, or, call parent::complete().
		 *
		 * @since 2.0.0
		 */
		protected function complete() {

			templatiq_sites_error_log( 'Complete' );

			parent::complete();

			do_action( 'templatiq_sites_single_page_batch_process_complete' );

		}

	}

endif;
