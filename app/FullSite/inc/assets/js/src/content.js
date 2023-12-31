wp.media.view.TemplatiqSearch = require( './search.js' );

var TemplatiqContent = wp.media.View.extend({

    tagName: 'div',
    className: 'ast-attachments-search-wrap',
    initialize: function() {
        this.value = this.options.value;
    },

    render: function() {

        var search = new wp.media.view.TemplatiqSearch({
            controller: this.controller,
            model: this.model,
        });
        this.views.add( search );
        return this;
    }
});

module.exports = TemplatiqContent;