class Obstacle {
  constructor(img) {
    // define the images,size and x/y values in the constructor
    this.height = 50;
    this.width = 50;
    this.x = (Math.random() * width) / 1.5;
    //this.x = this.width;
    this.y = height - this.height;
    this.image = img;
    this.platform;
  }

  //   define the collision function
  collision(playerInfo) {
    let obstacleX = this.x + this.width / 2;
    let obstacleY = this.y + this.height / 2;
    let playerX = playerInfo.x + playerInfo.width / 2
    let playerY = playerInfo.y + playerInfo.height / 2
    if (dist(obstacleX,obstacleY,playerX,playerY) > 30 && dist(obstacleX + this.width,obstacleY,playerX,playerY) > 40) {
      return false;
    } else {
      // console.log(dist(obstacleX,obstacleY,playerX,playerY))
      // console.log(dist(obstacleX + 60,obstacleY,playerX,playerY))
      return true;
    }
  }


  drawObstacle() {
    this.y -= 2
    // draw the coins
    rect(this.x,this.y,100,10)
    // triangle(0, 0 ,20, 40,40, 0);
    //image(this.image, this.x, this.y, this.width, this.height);
  }
  drawTriangles() {
    let trianglesDown = [];
    // let trianglesUp = [];
    // for (let i = 0; i < width; i += 50){
    //   trianglesUp.push(triangle(i, 0, i+20, 40, i+40, 0));
    // }
    for (let i = 0; i < width; i += 50){
      trianglesDown.push(triangle(i, width, i+20, width-40, i+40, width));
    }
    return trianglesDown;
  }
}
