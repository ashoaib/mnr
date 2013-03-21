/*
 * CONSTANTS
 */
var MOBILE_WIDTH = 640;

var card = {
	init: function() {
		card.listeners = {};
		card.card = $('#card');
		card.front = $('#card .front');
		card.back = $('#card .back');
		card.links = $('nav li');
		
		if ($(window).width() > MOBILE_WIDTH) {
			card.center();
			card.addListener(window, 'resize', card.center);
		}
		
		card.addListener('header span', 'click', card.showFront);
		card.addListener('#reverse span', 'click', card.showReverse);
		card.addListener('nav li', 'click', card.setNav);
		
		card.cycle.init();
	},
	
	showFront: function() {
		card.card.removeClass('flip');
	},
	
	showReverse: function() {
		card.card.addClass('flip');
	},
	
	center: function() {
		var padding = ($(window).height() - card.card.height()) / 2;
	
		if (padding > 0) {
			$('#container').css('padding-top', padding + 'px');
		}
	},
	
	setNav: function(e) {
		var _this = $(this);
		var slide = _this.data('slide');
		
		card.links.removeClass('active');
		_this.addClass('active');
		card.cycle.goToSlide(slide);
	},
	
	addListener: function(object, eventType, func) {
		$(object).on(eventType, func);
		
		if (typeof card.listeners[object] == 'undefined') {
			card.listeners[object] = [eventType, func];
		}
	},
	
	removeListener: function(object, eventType) {
		$(object).off(eventType);
	},
	
	addAllListeners: function() {
		for (o in card.listeners) {
			$(o).on(card.listeners[o][0], card.listeners[o][1]);
		}
	},
	
	removeAllListeners: function() {
		for (o in card.listeners) {
			$(o).off(card.listeners[o][0]);
		}
	}
};

card.cycle = {
	init: function() {
		card.cycle.slides = $('#slides');
		card.cycle.slides.cycle({
			fx: "fade",
			timeout: 0,
			speed: 500
		});
	},
	
	goToSlide: function(slide) {
		card.cycle.slides.cycle(slide);
	}
};

$(function() {
	card.init();
});
