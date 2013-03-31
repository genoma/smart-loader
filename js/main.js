/*jslint browser: true, indent: 2, vars: true, plusplus: true*/
/*global options, console, jQuery, $*/

$(function () {
  "use strict";
  $(document).smartLoader({
    // main control option can be **document** or **images**
    // the first check the whole document and than calls the callback,
    // the second does the same but place into every image that is waiting to be
    // fully loaded an animated gif
    theControl: 'document',
    // **howManySeconds** is the maximum time you want to wait for
    // images to be fully loaded expressed in milliseconds.
    // After this amount of time the function throws the **errorCallback**
    howManySeconds: 5000,
    // **lengthOfLoop** this is the time delay between every single check loop,
    // expressed in milliseconds, should be no less than 200.
    lengthOfLoop: 200,
    // the callback in case any image is successfully loaded
    callback: function () {
      $('#smart-dimmer').fadeOut(1000);
      console.log('this is the callback');
    },
    // the callback in case there was one or more images
    // that failed to load in the prefixed amount of time
    errorCallback: function () {
      $('#smart-dimmer').fadeOut(1000);
      console.log('missing images');
    }
  });
});
