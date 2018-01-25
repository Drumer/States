function wait(ms) {
   		var start = new Date().getTime();
   		var end = start;
   		while(end < start + ms) {
     		end = new Date().getTime();
  		}
}

var loadState = {

	preload: function() {
		
		var loadingLabel = game.add.text(80,80,'loading...',
		{font:'30px Courier', fill: '#ffffff'});

		game.load.image('player', 'assets/player.png');
		game.load.image('win', 'assets/win.png');
		// var i=0;
		
	},

	create: function() {
		
		wait(1000);
		game.state.start('menu');
	},
	
};