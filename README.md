# SmartLoader Plugin for jQuery 1.9.X / 2.0.X

This plugin provides a way to show the whole content of the page   only when all images are loaded, or alternatively shows a loader image until the image is fully loaded.

At this moment SmartLoader is still in a beta release quality and still needs some work and tests to be fully functional, but feel free to try it and to report here any problems you've encountered.

## Instructions

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
      $('#img-wrapper').fadeOut(1000);
      console.log('this is the callback');
    },
    // the callback in case there was one or more images
    // that failed to load in the prefixed amount of time
    errorCallback: function () {
      $('#img-wrapper').fadeOut(1000);
      console.log('missing images');
    }
  });
});

# LICENSE

### Copyright © 2013 Alessandro Vioni - @jenoma
### Graphic © 2013 Marco Temperilli

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.