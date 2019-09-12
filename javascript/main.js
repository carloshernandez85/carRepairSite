;(function($) {

    'use strict'

    var menuClick = function() {
    	$('#nav ul li').on('click', function(){
    		$(this).addClass('current').siblings().removeClass('current');
    	});
    };

    // Dom Ready
    $(function() {
        menuClick();

    });

})(jQuery);
