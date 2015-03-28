$(document).ready( function() {


$container = $('.post-list');
$container.isotope({
  itemSelector: '.each-post',
  layout: 'fitRows' 
});


$('.category').click(function(event){
  var element = $(this);
  var cat = element.data('cat');
  $container.isotope({ filter:'.' + cat});
  element.addClass("active");
  document.activecat.removeClass('active');
  document.activecat = element;
   
});
$container.imagesLoaded( function() {
    $container.isotope('layout');

} );


document.activecat = $('.category').first();
document.activecat.addClass('active');
var cat = document.activecat.data('cat');
$container.isotope({ filter:'.' + cat});



});
