 (function($) {
     $(document).ready(function() {
         $('.card').hover(function() {
             $(this).toggleClass('flip');
         });

         $('.card').removeClass('flip');

     });
 }(jQuery));

