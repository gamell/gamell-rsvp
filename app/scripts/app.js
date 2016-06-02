var gamell = (function($, window){

	// var MOBILE_FALLBACK_MESSAGE = 'You are viewing a limited version of the site, please use a desktop browser to enjoy a much better experience.';
	// var UNSUPPORTED_BOWSER_FALLBACK_MESSAGE = 'You are using an <strong>unsupported</strong> browser. Please <a href="http://browsehappy.com/">use a supported browser</a> - Chrome, Firefox or Safari - to improve your experience.';
	var NAVBAR_MEMBERS_SELECTOR = "nav.top-bar h2 a";

	var initGithubButton = function(){
		// locally cached to avoid dns lookup and redirections from http://ghbtns.com/github-btn.html?user=gamell&repo=gamell.io&type=fork
		$(".github-button").html('<iframe src="github-btn.html?user=gamell&repo=gamell.io-rsvp&type=fork" allowtransparency="true" frameborder="0" scrolling="0" width="62" height="20"></iframe>');
	};

	// var displayFallbackMessage = function(){
	// 	var $messageContainer = $(".fallback-message p");
	// 	if(!isImpressSupported() && $("body").hasClass('mobile')){
	// 		$messageContainer.html(MOBILE_FALLBACK_MESSAGE);
	// 	} else if(!isImpressSupported()){
	// 		$messageContainer.html(UNSUPPORTED_BOWSER_FALLBACK_MESSAGE);
	// 	}
	// };

	var setPageStyles = function setPageStyles(currentPage){
		$(NAVBAR_MEMBERS_SELECTOR).removeClass("active")
		$(NAVBAR_MEMBERS_SELECTOR).filter("."+currentPage).addClass("active");
	};

	var initRouter = function initRouter(){
		var router = new Router()
    	.addRoute('#/:pagename', function(req, next){
        	setPageStyles(req.params.pagename);
    	}).run();
	};

	var init = function(){

		initRouter();

		impress().init();

	};

	init();

})(jQuery, window);