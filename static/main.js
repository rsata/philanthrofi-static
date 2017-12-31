$(function() {

  var $form = $('form#join-website-form')
  var url = 'https://script.google.com/macros/u/0/s/AKfycbyCXLu__s7aggSvvqghSlKF7T06cO2lfG5i5RDyALiwWa8iAuId/exec'

  $('#submit-join-website-form').on('click', function(e) {
    e.preventDefault();
    // console.log($form.serializeObject());
    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serializeObject()
    })
    // .success(
    //   //
    // );
  })

})
