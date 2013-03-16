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
		
		card.addListener('#reverse', 'click', card.showReverse);
		card.addListener('nav li', 'click', card.setNav);
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
		card.links.removeClass('active');
		$(this).addClass('active');
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

$(function() {
	card.init();
});
