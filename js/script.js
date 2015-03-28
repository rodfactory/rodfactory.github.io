$(document).ready( function() {


$container = $('.post-list');
$container.isotope({
  itemSelector: '.each-post',
  layout: 'fitRows' 
});


$('.category').click(function(event){
  var element = $(this);
  var cat = element.data('cat');
  if(cat != 'all')
    $container.isotope({ filter:'.' + cat});
  else
    $container.isotope({ filter:'' });
  element.addClass("active");
  document.activecat.removeClass('active');
  document.activecat = element;
   
});
$container.imagesLoaded( function() {
    $container.isotope('layout');

} );


document.activecat = $('.category').first();
document.activecat.addClass('active');

});
