/*jslint browser: true, indent: 2, vars: true, plusplus: true*/
/*global options, console, jQuery*/

/*
 * Copyright © 2013 Alessandro Vioni - @jenoma
 * Graphic © 2013 Marco Temperilli
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to
 * do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND  NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITHTHE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

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


    });

  };

}(jQuery));
