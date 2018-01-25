var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDiv');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('won', wonState);

game.state.start('boot');
