'use strict';

define(

  [
    'profile_form'
  ],

  function(profileForm) {

    function initialize() {
      profileForm.attachTo("[name='profileForm']");
    }

    return initialize;
  }
);