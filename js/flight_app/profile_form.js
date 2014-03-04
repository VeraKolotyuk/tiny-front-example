'use strict';

define(
  [
    'flight/lib/component',
    'ajax_form'
  ],
  function(defineComponent, ajaxFormMixin) {

    return defineComponent(profileForm, ajaxFormMixin);
    function profileForm() {

      this.defaultAttrs({
          "wantMoreSwitchSelector": '.js-want-more',
          "moreInfoSelector": '.more-info',
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
      });


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

      this.getFormValues = function($form) {
        var values = {};
        values['email'] = $form.find('#exampleInputEmail1').val();
        values['password'] = $form.find('#exampleInputPassword1').val();

        /* TODO:: add more fileds... */

        return values;
      };


      this.formSubmitSuccess = function() {
        window.location.reload();
      };

      this.wantMoreClick = function(evt) {
          var $target = $(evt.target);
          var isHidden = !$target.is(':checked');
          if (isHidden) {
            this.select('moreInfoSelector').hide();
          } else {
            this.select('moreInfoSelector').show();
          }
      };

      this.ajaxSubmit = function(evt) {
          console.log('submit');
          evt.preventDefault();
          var $target = $(evt.target);

          var values = this.getFormValues($target);
          var errors = this.validate(values);
          if (!$.isEmptyObject(errors)) {
            this.renderForm({'errors': errors, 'values': values});
          } else {
              this.submitForm($target);
          }
      };

      this.after('initialize', function() {
          this.on('click', {wantMoreSwitchSelector: this.wantMoreClick});
          this.on('formSubmitSuccess', {ajaxFormSelector: this.formSubmitSuccess});
          this.on('submit', {ajaxFormSelector: this.ajaxSubmit});
      });
    }
  }
);
