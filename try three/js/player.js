class Player {
  constructor(game) {
  this.jumping;
  this.height = 100;
  this.width = 40;
  this.x = 200;
  this.y = height - this.height;
  this.gravity = 0.2;
  this.velocity = 0;
  this.game = null;
  this.canJump = true;
  this.playing = false;
  this.score = 0;
  this.angle = 0.2

  this.side = 100;
  }

  setGame(game) {
    this.game = game;
  }
  // show() {

  //   this.height = this.side + (this.y - this.headY);
  //   push();
  //   translate(
  //     this.x + (random(1) < 0.9) + (1 / 2) * this.width,
  //     this.y + (random(1) < 0.9) + (1 / 2) * this.side
  //   );
  //   rotate((PI / 20) * (frameCount));
  //   rectMode(CENTER);
  //   rect(this.x, this.y, this.width, this.width)
  //   pop();

  // }

  drawPlayer() {
    // this.angle+=0.02
    // //move
    // push()
    // translate(width / 2, height / 2);
    // rotate(this.angle);
    // rect(-26, -26, 52, 52);

    
    // pop()
    // push();
    // translate(this.x + 20,this.y + 20)

    // translate(
    //   this.x * this.width,
    //   this.y * this.width
    // );
    // rotate((PI / 20) * frameCount);
    // rectMode(CENTER);

    // rect(this.x, this.y, this.width, this.width)
    // pop();

    // push();
    // this.angle += 10;
    // // translate(this.x,this.y)
    // rotate(this.angle)
    
     square(this.x, this.y, this.width)
    // pop();
    
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
    this.playing = true;
      this.canJump = false;
      this.velocity = -7;
  }
  
}
