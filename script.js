type="text/javascript">jQuery(document).ready(function($){
  var nav = $('.b-options-floated');
      item = $('.c-role'),
      itemCompleted = item.has('article.completed'),
      itemWatching = item.has('article.watching'),
      all = 'Все',
      known = 'Известные',
      btn = nav.prepend('<a data-click="all" class="all-known">Все</a>'),
      btn = $('.all-known');
  
  function animefilter(){
    item
      .slideUp()
      .filter(itemCompleted).slideDown();
    item.filter(itemWatching).slideDown();  
  }
  animefilter();
  
  
  btn.on('click', function(){
    if ( $(this).attr('data-click') == 'all' ){
      $(this).attr('data-click', 'known');
      item.slideDown();
      $(this).html(known);   
    }else{
      $(this).attr('data-click', 'all');
      $(this).html(all); 
      animefilter();
    }
   
  });
  
});
