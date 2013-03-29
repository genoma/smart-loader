/*jslint browser: true, indent: 2, vars: true, plusplus: true*/
/*global options, console, jQuery*/

// ©2013 Alessandro Vioni All Rights Reserved.
// require jQuery 1.9++

(function ($) {
  "use strict";
  $.fn.smartLoader = function (options, callback) {
    // default options and
    // callbacks
    var defaults = {
      howManySeconds: 1000,
      lengthOfLoop: 200,
      callback: function () {},
      errorCallback: function () {},
      theControl: 'document'
    };

    // extend default options
    options = $.extend({}, defaults, options);

    return this.each(function () {

      // the variables
      var $this = $('img');
      var start = (new Date()).getTime();
      var imgOk = 0;
      var image;
      var control;
      var checkThis = jQuery(this);

      var theImageArray = document.getElementsByTagName('img');
      var theImageNumber = theImageArray.length;

      console.log(theImageNumber);

      function checkTheImage(image) {
        var $theImageFade = image;
        var imgSource = [image.attr('src')];
        $theImageFade.attr('src', 'smart-loader-loaders/white.png');

        $theImageFade.css({
          'background': 'url(smart-loader-loaders/SmartLoader60.gif)',
          'background-repeat': 'no-repeat',
          'background-position': 'center center'
        });

        image = new Image();
        image.onload = function () {
          imgOk++;
          $theImageFade.attr('src', imgSource[0]);
        };
        image.src = imgSource[0];
      }

      function checkTheLoad(image) {
        var $theImageFade = image;
        var imgSource = [image.attr('src')];
        image = new Image();
        image.onload = function () {
          imgOk++;
        };
        image.src = imgSource[0];
      }



      function theDocFunction(controlFunct) {
        console.log('loop');
        console.log(theImageNumber);
        var diff = (new Date()).getTime() - start;
        if ((imgOk !== theImageNumber) && (diff >= options.howManySeconds)) {
          clearInterval(controlFunct);
          options.errorCallback.call(checkThis);
        } else if (imgOk === theImageNumber) {
          clearInterval(controlFunct);
          options.callback.call(checkThis);
        }
      }



      if (options.theControl === 'document') {
        $this.each(function () {
          checkTheLoad($(this));
        });
        control = setInterval(function () {
          theDocFunction(control);
        }, options.lengthOfLoop);
      } else if (options.theControl === 'images') {
        $this.each(function () {
          checkTheImage($(this));
        });
        control = setInterval(function () {
          theDocFunction(control);
        }, options.lengthOfLoop);
      }


      /* TODO: Refactoring */
//      var controlFunct = setInterval(function () {
//        var diff = (new Date()).getTime() - start;
//        if ((imgOk !== theImageNumber) && (diff < options.howManySeconds)) {
//          imgMissing = 0;
//        } else if ((imgOk !== theImageNumber) && (diff >= options.howManySeconds)) {
//          clearInterval(controlFunct);
//          options.errorCallback.call(this);
//        } else {
//          clearInterval(controlFunct);
//          options.callback.call(this);
//        }
//
//      }, options.lengthOfLoop);


    });

  };

}(jQuery));
