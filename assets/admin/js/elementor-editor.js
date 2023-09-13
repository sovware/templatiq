"use strict";

jQuery(document).ready(function($) {
    var $templateElementorAddSection = $("#tmpl-elementor-add-section");

    if ($templateElementorAddSection.length > 0) {
        var templateHtml = $templateElementorAddSection.html();

        templateHtml = templateHtml.replace(
            '<div class="elementor-add-section-drag-title',
            '<div data-mode="dark" class="elementor-add-section-area-button elementor-add-template-market-button" title="' + 'TemplateMarket' + '"><i class="eicon-plus"></i></div><div class="elementor-add-section-drag-title'
        );

        $templateElementorAddSection.html(templateHtml);

        elementor.on("preview:loaded", function() {
            $(elementor.$previewContents[0].body).on("click", ".elementor-add-template-market-button", function(e) {
               console.log(e)
            });
        });
    }
});
