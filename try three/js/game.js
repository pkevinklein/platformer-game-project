class Game {
  constructor() {
    this.speed = 2;
    this.obstacles = [];
    // define the empty array for the coins here
  }
  preloadGame() {
    this.spikes;
  }
  setupGame() {
     this.obstacle = new Obstacle();
     this.background = new Background ();
     this.background.images = this.backgroundImgs
     this.player = new Player();
     this.player.setGame(this);
     this.player.image = this.playerImg;
    }
    drawGame() {
    clear();
    this.obstacle.drawTriangles()
    // this.obstacle.drawStar()
    this.background.drawBackground();
    this.player.drawPlayer();
    if(frameCount % 60 ===  0) {
      this.obstacles.push(new Obstacle(this.coinImg))
    }

    this.obstacles.forEach((coin) => {
      coin.drawObstacle();
    })
  this.obstacles.forEach( (obstacle) => {
    if (obstacle.platformCollision(this.player)) {
      if(this.player.canJump) {
        this.player.y = obstacle.y - 45;
      } 
      this.player.canJump = true;
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
  }
}
