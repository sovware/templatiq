<?php
/**
 * Template library templates
 */

defined( 'ABSPATH' ) || exit;

?>
<script type="text/template" id="tmpl-tmTemplateLibrary__header-logo">
    <span class="tmTemplateLibrary__logo-wrap">
		<i class="fa fa-download"></i>
	</span>
    <span class="tmTemplateLibrary__logo-title">{{{ title }}}</span>
</script>

<script type="text/template" id="tmpl-tmTemplateLibrary__header-back">
	<i class="eicon-" aria-hidden="true"></i>
	<span><?php echo __( 'Back to Library', 'template-market' ); ?></span>
</script>

<script type="text/template" id="tmpl-tmTemplateLibrary__header-menu">
	<# _.each( tabs, function( args, tab ) { var activeClass = args.active ? 'elementor-active' : ''; #>
		<div class="elementor-component-tab elementor-template-library-menu-item {{activeClass}}" data-tab="{{{ tab }}}">{{{ args.title }}}</div>
	<# } ); #>
</script>

<script type="text/template" id="tmpl-tmTemplateLibrary__header-menu-responsive">
	<div class="elementor-component-tab tmTemplateLibrary__responsive-menu-item elementor-active" data-tab="desktop">
		<i class="eicon-device-desktop" aria-hidden="true" title="<?php esc_attr_e( 'Desktop view', 'template-market' ); ?>"></i>
		<span class="elementor-screen-only"><?php esc_html_e( 'Desktop view', 'template-market' ); ?></span>
	</div>
	<div class="elementor-component-tab tmTemplateLibrary__responsive-menu-item" data-tab="tab">
		<i class="eicon-device-tablet" aria-hidden="true" title="<?php esc_attr_e( 'Tab view', 'template-market' ); ?>"></i>
		<span class="elementor-screen-only"><?php esc_html_e( 'Tab view', 'template-market' ); ?></span>
	</div>
	<div class="elementor-component-tab tmTemplateLibrary__responsive-menu-item" data-tab="mobile">
		<i class="eicon-device-mobile" aria-hidden="true" title="<?php esc_attr_e( 'Mobile view', 'template-market' ); ?>"></i>
		<span class="elementor-screen-only"><?php esc_html_e( 'Mobile view', 'template-market' ); ?></span>
	</div>
</script>

<script type="text/template" id="tmpl-tmTemplateLibrary__header-actions">
	<div id="tmTemplateLibrary__header-sync" class="elementor-templates-modal__header__item">
		<i class="eicon-sync" aria-hidden="true" title="<?php esc_attr_e( 'Sync Library', 'template-market' ); ?>"></i>
		<span class="elementor-screen-only"><?php esc_html_e( 'Sync Library', 'template-market' ); ?></span>
	</div>
</script>

<script type="text/template" id="tmpl-tmTemplateLibrary__preview">
    <iframe></iframe>
</script>

<script type="text/template" id="tmpl-tmTemplateLibrary__header-insert">
	<div id="elementor-template-library-header-preview-insert-wrapper" class="elementor-templates-modal__header__item">
		{{{ tm.library.getModal().getTemplateActionButton( obj ) }}}
	</div>
</script>

<script type="text/template" id="tmpl-tmTemplateLibrary__insert-button">
	<a class="elementor-template-library-template-action elementor-button tmTemplateLibrary__insert-button">
		<i class="eicon-file-download" aria-hidden="true"></i>
		<span class="elementor-button-title"><?php esc_html_e( 'Insert', 'template-market' ); ?></span>
	</a>
</script>

<script type="text/template" id="tmpl-tmTemplateLibrary__pro-button">
	<a class="elementor-template-library-template-action elementor-button tmTemplateLibrary__pro-button" href="https://happyaddons.com/pricing/" target="_blank">
		<i class="eicon-external-link-square" aria-hidden="true"></i>
		<span class="elementor-button-title"><?php esc_html_e( 'Get Pro', 'template-market' ); ?></span>
	</a>
</script>

<script type="text/template" id="tmpl-tmTemplateLibrary__loading">
	<div class="elementor-loader-wrapper">
		<div class="elementor-loader">
			<div class="elementor-loader-boxes">
				<div class="elementor-loader-box"></div>
				<div class="elementor-loader-box"></div>
				<div class="elementor-loader-box"></div>
				<div class="elementor-loader-box"></div>
			</div>
		</div>
		<div class="elementor-loading-title"><?php esc_html_e( 'Loading', 'template-market' ); ?></div>
	</div>
</script>

<script type="text/template" id="tmpl-tmTemplateLibrary__templates">
	<div id="tmTemplateLibrary__toolbar">
		<div id="tmTemplateLibrary__toolbar-filter" class="tmTemplateLibrary__toolbar-filter">
			<# if (tm.library.getTypeTags()) { var selectedTag = tm.library.getFilter( 'tags' ); #>
				<# if ( selectedTag ) { #>
				<span class="tmTemplateLibrary__filter-btn">{{{ tm.library.getTags()[selectedTag] }}} <i class="eicon-caret-right"></i></span>
				<# } else { #>
				<span class="tmTemplateLibrary__filter-btn"><?php esc_html_e( 'Filter', 'template-market' ); ?> <i class="eicon-caret-right"></i></span>
				<# } #>
				<ul id="tmTemplateLibrary__filter-tags" class="tmTemplateLibrary__filter-tags">
					<li data-tag="">All</li>
					<# _.each(tm.library.getTypeTags(), function(slug) {
						var selected = selectedTag === slug ? 'active' : '';
						#>
						<li data-tag="{{ slug }}" class="{{ selected }}">{{{ tm.library.getTags()[slug] }}}</li>
					<# } ); #>
				</ul>
			<# } #>
		</div>
		<div id="tmTemplateLibrary__toolbar-counter"></div>
		<div id="tmTemplateLibrary__toolbar-search">
			<label for="tmTemplateLibrary__search" class="elementor-screen-only"><?php esc_html_e( 'Search Templates:', 'template-market' ); ?></label>
			<input id="tmTemplateLibrary__search" placeholder="<?php esc_attr_e( 'Search', 'template-market' ); ?>">
			<i class="eicon-search"></i>
		</div>
	</div>

	<div class="tmTemplateLibrary__templates-window">
		<div id="tmTemplateLibrary__templates-list"></div>
	</div>
</script>

<script type="text/template" id="tmpl-tmTemplateLibrary__template">
	<div class="tmTemplateLibrary__template-body" id="tmTemplate-{{ template_id }}">
		<div class="tmTemplateLibrary__template-preview">
			<i class="eicon-zoom-in-bold" aria-hidden="true"></i>
		</div>
		<img class="tmTemplateLibrary__template-thumbnail" src="{{ thumbnail }}">
		<# if ( obj.isPro ) { #>
		<span class="tmTemplateLibrary__template-badge"><?php esc_html_e( 'Pro', 'template-market' ); ?></span>
		<# } #>
	</div>
	<div class="tmTemplateLibrary__template-footer">
		{{{ tm.library.getModal().getTemplateActionButton( obj ) }}}
		<a href="#" class="elementor-button tmTemplateLibrary__preview-button">
			<i class="eicon-device-desktop" aria-hidden="true"></i>
			<?php esc_html_e( 'Preview', 'template-market' ); ?>
		</a>
	</div>
</script>

<script type="text/template" id="tmpl-tmTemplateLibrary__empty">
	<div class="elementor-template-library-blank-icon">
		<img src="<?php echo ELEMENTOR_ASSETS_URL . 'images/no-search-results.svg'; ?>" class="elementor-template-library-no-results" />
	</div>
	<div class="elementor-template-library-blank-title"></div>
	<div class="elementor-template-library-blank-message"></div>
	<div class="elementor-template-library-blank-footer">
		<?php esc_html_e( 'Want to learn more about the Happy Library?', 'template-market' ); ?>
		<a class="elementor-template-library-blank-footer-link" href="https://happyaddons.com/docs/happy-addons-for-elementor/happy-features/happy-templates/" target="_blank"><?php echo __( 'Click here', 'template-market' ); ?></a>
	</div>
</script>
