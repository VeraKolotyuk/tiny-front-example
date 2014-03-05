'use strict';

define(

  [
    'profile_form_ui',
    'profile_form_data'
  ],

  function(profileFormUI, profileFormData) {

    function initialize() {
      profileFormUI.attachTo("[name='profileForm']");
      profileFormData.attachTo("[name='profileForm']");
    }

    return initialize;
  }
);