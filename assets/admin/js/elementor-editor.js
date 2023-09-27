"use strict";
jQuery(document).ready(function ($) {
  var $templateElementorAddSection = $("#tmpl-elementor-add-section");

  if ($templateElementorAddSection.length > 0) {
    var templateHtml = $templateElementorAddSection.html();

    templateHtml = templateHtml.replace(
      '<div class="elementor-add-section-drag-title',
      '<div data-mode="dark" class="elementor-add-section-area-button elementor-add-template-market-button" title="' + 'TemplateMarket' + '"><i class="eicon-plus"></i></div><div class="elementor-add-section-drag-title'
    );

    $templateElementorAddSection.html(templateHtml);

    elementor.on("preview:loaded", function () {

      $(elementor.$previewContents[0].body).on("click", ".elementor-add-template-market-button", function (e) {

        let data = {
          unique_id: 696,
          data: {
            edit_mode: !0,
            display: !0,
            item_id:696
          }
        };

        requestTemplateContent( 
          {
          success: function(data) {
            console.log(data);

            $e.run("document/elements/import", {
              modal: elementorModules.common.views.modal,
              data: data,
              options: {}
            })
  
            alert( 'I am loaded from this.insertTemplate');
          },
          error: function error(data) {
            console.log(data);
          },
          complete: function complete() {
            console.log(data);
          }
        });
      });

      function requestTemplateContent( ajaxOptions) {
        var options = {
          unique_id: 696,
          data: {
            edit_mode: !0,
            display: !0,
            item_id:696
          }
        };
        if (ajaxOptions) {
          jQuery.extend(true, options, ajaxOptions);
        }
        return elementorCommon.ajax.addRequest('get_tm_template_data', options);
      };
      
    });
  }
});