class Game {
  constructor() {
    this.speed = 2;
    this.obstacles = [];
    // define the empty array for the coins here
  }
  preloadGame() {
    // load in images/gifs here
    this.backgroundImgs = [{
      src: loadImage("../assets/background/plx-1.png"),
      x : 0,
      speed : 1
    },
    {
      src: loadImage("../assets/background/plx-2.png"),
      x : 0,
      speed : 2
    },
    {
      src: loadImage("../assets/background/plx-3.png"),
      x : 0,
      speed : 3
    },
    {
      src: loadImage("../assets/background/plx-4.png"),
      x : 0,
      speed : 4
    },
    {
      src: loadImage("../assets/background/plx-5.png"),
      x : 0,
      speed : 5
    }];
    this.playerImg = loadImage("../assets/player/bb8.gif");
    this.coinImg = loadImage("../assets/coins/tile000.png")
  }
  setupGame() {
     this.obstacle = new Obstacle();
     // this.obstacle.image = this.coinImg;
     this.background = new Background ();
     this.background.images = this.backgroundImgs
     //  initialize background + player here
     // NB: we DON'T initialize the coins here because we create them dynamically in the draw
     this.player = new Player();
     this.player.setGame(this);
     this.player.image = this.playerImg;
     
     
    }
    drawGame() {
      clear();
      this.obstacle.drawTriangles();
    this.background.drawBackground();
    this.player.drawPlayer();
    if(frameCount % 60 ===  0) {
      this.obstacles.push(new Obstacle(this.coinImg))
    }

    this.obstacles.forEach((coin) => {
      coin.drawObstacle();
    })
  this.obstacles.forEach( (obstacle) => {
  if (obstacle.collision(this.player)) {
    // console.log("after collision ",this.player.canJump);
    // console.log("after change ",this.player.canJump);
    // console.log("colission happended");
    if(this.player.canJump) {
      this.player.y = obstacle.y - 45;
    } 
    this.player.canJump = true;
    // this.player.overPlatform = true;
   }
})
if (this.player.y < 50) {
  console.log("you lose");
}
if (this.player.x < 0) {
  this.player.x = this.player.x + width;
}
if (this.player.x > width) {
  this.player.x = width - this.player.x;
}
    //  call the draw functions for the player + the background
    // define the obstacle drawing logic + add a new obstacle to  the array in the constructor with the image passed into it
 
  }
}
