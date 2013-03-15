var ce = {
	rotThreshold: 5,
	
	init: function(target) {
		var _window = $(window);
		ce._window = _window;
		ce.halfHeight = _window.height() / 2;
		ce.halfWidth = _window.width() / 2;
		ce.target = target;
		ce.watch();
	},
	
	watch: function() {
		ce.removeTransition();
		$(window).on('mousemove', ce.onMouseMove);
	},
	
	unwatch: function() {
		ce.addTransition();
		$(window).off('mousemove');
	},
	
	onMouseMove: function(e) {
		var widthRatio = (e.pageX - ce.halfWidth) / ce.halfWidth;
		var heightRatio = (e.pageY - ce.halfHeight) / ce.halfHeight;
		ce.target.css('-webkit-transform', 'rotateX(' + heightRatio * ce.rotThreshold * -1 + 'deg) rotateY(' + widthRatio * ce.rotThreshold + 'deg)');
	},
	
	removeTransition: function() {
		$('.card').removeClass('transition');
	},
	
	addTransition: function() {
		$('.card').addClass('transition');
	}
};

$(function() {
	//ce.init($('#card .front'));
	$('#reverse').click(function() {
		//ce.unwatch();
		$('#card').addClass('flip');
	});
	$('.back').click(function() {
		//ce.watch();
		$('#card').removeClass('flip');
	});
});
