class Player {
  constructor(game) {
  this.jumping;
  this.height = 100;
  this.width = 100;
  this.x = 200;
  this.y = height - this.height;
  this.gravity = 0.2;
  this.velocity = 0;
  this.image;
  this.game = null;
  this.canJump = true;
  }

  setGame(game) {
    this.game = game;
  }

  drawPlayer() {
    //move
    square(this.x, this.y, 40)
    if (keyIsDown(39)) {
      this.x += 5
    } else if (keyIsDown(37)){
      this.x -= 5;
    } 
    if (this.y == height - this.height){
        this.canJump = true;
        }
    this.velocity += this.gravity;
    this.y += this.velocity;
    if (this.y >= height - this.height) {
      this.y = height - this.height;
    }
  }

  jump (){
      this.canJump = false;
      this.velocity = -7;
  }
  
}
