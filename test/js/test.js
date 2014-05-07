$(function () {
  $('#start-test').click( function () {
    $('.column').each(function (index, el) {
      var $el = $(el);
      var width = $el.width();
      var height = $el.height();
      $el.find('span').addClass('tested').text(width + 'x' + height);
    });
  });
});
