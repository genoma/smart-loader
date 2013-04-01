/* Example N°1 - Document based loader */
/* For this you have to use dimmer.css and the html from example-document-based.html.txt */

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

/* Example N°2 - Image based loader */

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
