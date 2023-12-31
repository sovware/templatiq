<?php
/**
 * White Label Form
 *
 * @package Templatiq Sites
 */

?>
<?php
// Bail from displaying settings screen if Templatiq Pro is older version.
if ( ! is_callable( 'Templatiq_Ext_White_Label_Markup::branding_key_to_constant' ) ) {
	return;
}
?>
<li>
	<div class="branding-form postbox">
		<button type="button" class="handlediv button-link" aria-expanded="true">
			<span class="screen-reader-text"><?php echo esc_html( $plugin_name ); ?></span>
			<span class="toggle-indicator" aria-hidden="true"></span>
		</button>

		<h2 class="hndle ui-sortable-handle">
			<span><?php echo esc_html( $plugin_name ); ?></span>
		</h2>

		<div class="inside">
			<div class="form-wrap">
				<div class="form-field">
					<label><?php esc_html_e( 'Plugin Name:', 'templatiq-sites' ); ?>
						<input type="text" name="ast_white_label[templatiq-sites][name]" class="placeholder placeholder-active" <?php disabled( defined( Templatiq_Ext_White_Label_Markup::branding_key_to_constant( 'templatiq-sites', 'name' ) ), true, true ); ?> value="<?php echo esc_attr( Templatiq_Ext_White_Label_Markup::get_whitelabel_string( 'templatiq-sites', 'name' ) ); ?>">
					</label>
				</div>
				<div class="form-field">
					<label><?php esc_html_e( 'Plugin Description:', 'templatiq-sites' ); ?>
						<textarea name="ast_white_label[templatiq-sites][description]" class="placeholder placeholder-active" <?php disabled( defined( Templatiq_Ext_White_Label_Markup::branding_key_to_constant( 'templatiq-sites', 'description' ) ), true, true ); ?> rows="2"><?php echo esc_html( Templatiq_Ext_White_Label_Markup::get_whitelabel_string( 'templatiq-sites', 'description' ) ); ?></textarea>
					</label>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
</li>
