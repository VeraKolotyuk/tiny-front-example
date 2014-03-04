requirejs.config({
  paths: {
    'flight': '../../bower_components/flight'
  }
});


require(
  [
    'flight/tools/debug/debug'
  ],

  function(debug) {
    debug.enable(true);
    require(['init'], function(initialize) {
      initialize();
    });
  }
);

