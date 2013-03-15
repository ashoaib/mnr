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
		$(window).on('mousemove', ce.onMouseMove);
	},
	
	unwatch: function() {
		$(window).off('mousemove');
	},
	
	onMouseMove: function(e) {
		var widthRatio = (e.pageX - ce.halfWidth) / ce.halfWidth;
		var heightRatio = (e.pageY - ce.halfHeight) / ce.halfHeight;
		ce.target.css('-webkit-transform', 'rotateX(' + heightRatio * ce.rotThreshold * -1 + 'deg) rotateY(' + widthRatio * ce.rotThreshold + 'deg)');
	}
};

$(function() {
	//ce.init($('#card .front'));
});
