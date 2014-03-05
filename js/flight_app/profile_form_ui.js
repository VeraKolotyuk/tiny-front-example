'use strict';

define(
  [
    'flight/lib/component',
    'ajax_form_ui'
  ],
  function(defineComponent, ajaxFormUIMixin) {

    return defineComponent(profileFormUI, ajaxFormUIMixin);
    function profileFormUI() {

      this.defaultAttrs({
        "wantMoreSwitchSelector": '.js-want-more',
        "moreInfoSelector": '.more-info'
      });


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
          this.trigger('uiSubmit', values);
      };

      this.after('initialize', function() {

          this.on('click', {wantMoreSwitchSelector: this.wantMoreClick});
          this.on('formSubmitSuccess', {ajaxFormSelector: this.formSubmitSuccess});
          this.on('submit', {ajaxFormSelector: this.ajaxSubmit});
      });
    }
  }
);
