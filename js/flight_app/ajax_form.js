'use strict';

define(
  [
    'flight/lib/component'
  ],
  function(defineComponent) {

    return function ajaxFormMixin() {

      this.defaultAttrs({
          "ajaxFormSelector": "form",
          "formInnerSelector": '.form-inner'
      });

      this.submitForm = function($form) {
        this.trigger($form.attr('data-ajax'));
        //   $.ajax($target.attr('action'), {
        //     type: $target.attr('method'),
        //     dataType: 'json',
        //     data: $target.serialize(),
        //     context: this,
        //     success: function(response) {
        //         this.trigger($target.attr('data-ajax'), response);
        //     }
        // });
      };



      this.renderForm = function(context) {
        var source = $("#form-template").html();
        var template = Handlebars.compile(source);
        this.select('formInnerSelector').html(template( context ));
      };

      this.after('initialize', function() {
          this.renderForm(this.attr.defaultContext);
      });

    };
  }
);
