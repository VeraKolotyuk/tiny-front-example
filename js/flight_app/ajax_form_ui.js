'use strict';

define(
  [
    'flight/lib/component'
  ],
  function(defineComponent) {

    return function ajaxFormUIMixin() {

      this.defaultAttrs({
          "ajaxFormSelector": "form",
          "formInnerSelector": '.form-inner'
      });

      this.renderForm = function(evt, context) {
        var source = $("#form-template").html();
        var template = Handlebars.compile(source);
        this.select('formInnerSelector').html(template( context ));
      };

      this.after('initialize', function() {

          this.on(document, 'renderForm', this.renderForm)
      });

    };
  }
);
