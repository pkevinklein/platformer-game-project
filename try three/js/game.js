class Game {
  constructor() {
    this.speed = 2;
    this.obstacles = [];
    this.circles = [];
    // define the empty array for the coins here
  }
  preloadGame() {
    
  }
  setupGame() {
     this.obstacle = new Obstacle();
     this.background = new Background ();
     this.upgrade = new PowerUp ();
    //  this.background.images = this.backgroundImgs
     this.player = new Player();
     this.player.setGame(this);
     
     this.player.image = this.playerImg;
     
    }
    drawGame() {
    clear();
    // this.player.show();
    this.obstacle.drawTriangles()
    this.upgrade.drawUpgrade();
    // this.background.drawBackground();
    this.player.drawPlayer();
    if(frameCount % 60 ===  0) {
      this.obstacles.push(new Obstacle(this.coinImg))
    }
    this.obstacles.forEach( (obstacle) => {
      if (obstacle.platformCollision(this.player)) {
        if(this.player.canJump) {
          this.player.y = obstacle.y - 45;
        } 
        this.player.canJump = true;
      }
    })
        this.obstacles.forEach((platform) => {
          platform.drawObstacle();
        })
    this.circles = this.circles.filter( (circle) => {
      if (circle.upgradeCollision(this.player)) {
        return false
      } else {return true}
    })
    this.circles.forEach((circle) => {
      circle.drawUpgrade();
    })
    if(frameCount % 120 === 0) {
      this.circles.push(new PowerUp(this.upgrade))
    }
    if (this.player.y < 50) {
      console.log("you lose up");
    }
    if (this.player.y == height - this.player.height && this.player.playing){
      console.log("you lose down");
    }
    if (this.player.x < 0) {
      this.player.x = this.player.x + width;
    }
    if (this.player.x > width) {
      this.player.x = width - this.player.x;
    }
    //backgroundchange
    // if (this.player.score > 0) {

    // }
  }
}

// drum.mp3
