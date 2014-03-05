'use strict';

define(
  [
    'flight/lib/component'
  ],
  function(defineComponent) {

    return function ajaxFormDataMixin() {

      this.submitForm = function($form) {
        // submit form to server
        window.location.reload();
      };

    };
  }
);
