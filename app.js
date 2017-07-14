 (function($) {
     $(document).ready(function() {

         /* 
            Need to explicitly declare both handlerIn and handlerOut functions. 
            I found that firefox does not fire the hover function if the mouse 
            is over the card while the page loads.
            see https://github.com/EricLeeSanders/apps-index/issues/1 for more info. 
        */

         $('.card').hover(function() {
             $(this).addClass('flip');
         }, function() {
             $(this).removeClass('flip');
         });

     });
 }(jQuery));

