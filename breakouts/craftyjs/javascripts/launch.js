(function() {
	window.breakout = window.breakout || {};
	breakout.TILE_SIZE = 16;

	window.onload = function() {
		Crafty.init(320, 416);
		Crafty.canvas.init();
		Crafty.scene("loading");
	};
})();
