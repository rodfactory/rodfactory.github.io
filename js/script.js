$(document).ready( function() {


$container = $('.post-list');
$container.isotope({
  itemSelector: '.each-post'
});


$('.category').click(function(event){
  var cat = $(this).data('cat');
  console.log(cat);
  $container.isotope({ filter:'.' + cat});
   
});
$container.imagesLoaded( function() {
    $container.isotope('layout');

} );

});
