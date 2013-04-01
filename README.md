# SmartLoader Plugin for jQuery 1.9.X / 2.0.X

<<<<<<< HEAD
This plugin provides a way to show the whole content of the page   only when all images are loaded, or alternatively shows a loader image until the image is fully loaded.

At this moment SmartLoader is still in a beta release quality and still needs some work and tests to be fully functional, but feel free to try it and to report here any problems you've encountered.

## Instructions

This plugin is still in an alpha stage, but you can clone the beta branch to get it working on your website.

The "main.js" file contains a brief explanation of all the possible configurations and it should be pretty easy to use for anyone with a basic experience in Javascript and jQuery.

## TODO
1. Instructions
2. Marco's loaders
3. HTML Demo
4. Check IE compatibility

## LICENSE

### Copyright © 2013 Alessandro Vioni - @jenoma
### Graphic © 2013 Marco Temperilli
=======
This plugin provides a way to show the whole content of the page only when all images are loaded, or alternatively shows a loader image placeholder until the image is fully loaded.

## Instructions

1. Needed Files : js/smart-loader.min.js
2. smart-loader-loaders folder

```javascript

$(function () {
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
```

### Document mode

Place this line of code in your main js file.

```javascript

$(function () {
  $(document).smartLoader({
    theControl: 'document',
    howManySeconds: 5000,
    lengthOfLoop: 200,
    callback: function () {
      $('#your-dimmer').fadeOut(1000);
      console.log('this is the callback');
    },
    errorCallback: function () {
      $('#your-dimmer').fadeOut(1000);
      console.log('missing images');
    }
  });
});
```

This is the HTML for a basic dimmer that hides the webpage content until all the images are succesfully loaded.

```html

<!--  this is the loader copy and place it after the <body> tag  -->
<div id="your-dimmer">
  <!-- loader image -->
  <!-- Chose one of the images provided in the "smart-loader-loaders" folder  -->
  <img src="smart-loader-loaders/SmartLoader30.gif">
</div>
<!--  this is the loader END  -->
```

The css for the dimmer.

```css

#your-dimmer {
  display : block;
  position : fixed;
  height : 100%;
  width : 100%;
  top : 0;
  left : 0;
  z-index : 200000;
  text-align: center;
  padding-top: 30%;
  background: #fff;
  box-shadow: inset 0 0 15px #767676;
}
```

### Images mode

In this mode the plugin doesn't need further configuration, provided you've placed all the files and folders in the right place.

```javascript

$(function () {
  $(document).smartLoader({
    theControl: 'images',
    howManySeconds: 5000,
    lengthOfLoop: 200,
    callback: function () {
      console.log('this is the callback');
    },
    errorCallback: function () {
      console.log('missing images');
    }
  });
});
```

## smart-loader-loaders folder

Marco Temperilli has designed a couple of nice loader, with different dimensions and in future we are going to give you even more choices, and
options. This folder has to be placed in your website root.


## Assistance?

Just drop a line to @jenoma on Twitter (or @genoma on ADN) and i will be more than happy to help you with any problem you've encountered with this
plugin.

## MIT LICENSE

### Copyright © 2013 Alessandro Vioni coding - @jenoma
###           © 2013 Marco Temperilli images - @MARCOMAIK
>>>>>>> genoma/beta1

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

<<<<<<< HEAD
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
=======
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
>>>>>>> genoma/beta1
