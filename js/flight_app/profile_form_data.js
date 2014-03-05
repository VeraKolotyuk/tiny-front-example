'use strict';

define(
  [
    'flight/lib/component',
    'ajax_form_data'
  ],
  function(defineComponent, ajaxFormDataMixin) {

    return defineComponent(profileFormData, ajaxFormDataMixin);
    function profileFormData() {


      this.defaultAttrs({
        "defaultContext": {
          errors: {
            'email': '',
            'password': '',
            'personal': '',
            'profession': ''
          },
          values: {
            'email': '',
            'password': '',
            'personal': '',
            'profession': ''
          }
        }
      })

      this.validate = function(formValues) {
        var errors = {};
        if (formValues['email'] === '') {
          errors['email'] = "Can't be blank";
        }
        if (formValues['password'] === '') {
          errors['password'] = "Can't be blank";
        }

        /* TODO:: add more fileds... */

        return errors;
      };


      this.ajaxSubmit = function(evt, values) {
          console.log('submit');
          evt.preventDefault();
          var $target = $(evt.target);

          var errors = this.validate(values);
          if (!$.isEmptyObject(errors)) {
            this.trigger('renderForm', {'errors': errors, 'values': values});
          } else {
              this.submitForm($target);
          }
      };

      this.after('initialize', function() {
          this.trigger('renderForm', this.attr.defaultContext);
          this.on("uiSubmit", this.ajaxSubmit);
      });
    }
  }
);
