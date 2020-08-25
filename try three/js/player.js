class Player {
  constructor(game) {
    // set the height, the initial location + the jump controls for the player
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
        //this.x -= 7;
    } 
      
    
      if (this.y == height - this.height){
        this.canJump = true
        }
  
  

    // draw the player + jump logic with velocity
    this.velocity += this.gravity;
    this.y += this.velocity;
    if (this.y >= height - this.height) {
      this.y = height - this.height;
    }
    //image(this.image, this.x, this.y, this.height, this.width);
  }

  // add a jump function
  jump (){

      this.canJump = false;
      this.velocity = -7;

    // if (this.overGround || this.overPlatform){
    //   this.velocity = -7;
    //   this.overGround = !this.overGround;
    //   this.overPlatform = !this.overPlatform;
    // }
    // if (this.y == height - this.height){
    //   this.overGround = true;
    //   this.overPlatform = false;
    //   // this.jump = true
    //   }
      // if () {  
      // }
      
  }
  
}
