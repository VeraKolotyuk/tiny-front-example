"use strict";

$(function() {

    var formFieldWrapSelector = '.form-group',
        errorWrapSelector = '.help-block',
        hasErrorsClass = 'has-error',
        moreInfoSelector = '.more-info';

    var clearFormValidation = function($form) {
      var emailField = $form.find('#exampleInputEmail1'),
          passwordFiled = $form.find('#exampleInputPassword1');

      emailField.parents(formFieldWrapSelector).removeClass(hasErrorsClass);
      passwordFiled.parents(formFieldWrapSelector).removeClass(hasErrorsClass);
      emailField.parents(formFieldWrapSelector).find(errorWrapSelector).html("");
      passwordFiled.parents(formFieldWrapSelector).find(errorWrapSelector).html("");
    };

    var validate = function($form) {
      var emailField = $form.find('#exampleInputEmail1'),
          email = emailField.val(),
          passwordFiled = $form.find('#exampleInputPassword1'),
          password = passwordFiled.val(),
          isValid = true;

      clearFormValidation($form);
      if (email === '') {
        emailField.parents(formFieldWrapSelector).find(errorWrapSelector).html("Can't be blank");
        emailField.parents(formFieldWrapSelector).addClass(hasErrorsClass);
        isValid = false;
      }
      if (password === '') {
        passwordFiled.parents(formFieldWrapSelector).find(errorWrapSelector).html("Can't be blank");
        passwordFiled.parents(formFieldWrapSelector).addClass(hasErrorsClass);
        isValid = false;
      }

      /* TODO:: add more fileds... */

      return isValid;
    };

    $(document).on('submit', '[name="profileForm"]', function(evt) {
      evt.preventDefault();
      var $target = $(evt.target);

      var isValid = validate($target);
      if (isValid) {
        window.location.reload();
          //   $.ajax($target.attr('action'), {
          //     type: $target.attr('method'),
          //     dataType: 'json',
          //     data: $target.serialize(),
          //     context: this,
          //     success: function(response) {
          //         this.trigger($target.attr('data-ajax'), response);
          //     }
          // });
      }
    });

    $(document).on('click', '.js-want-more', function(evt) {
        var $target = $(evt.target);
        var isHidden = !$target.is(':checked');
        if (isHidden) {
          $(moreInfoSelector).hide();
        } else {
          $(moreInfoSelector).show();
        }
    });
});