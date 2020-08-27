class Game {
  constructor() {
    this.particles = []
    this.speed = 2;
    this.obstacles = [];
    this.circles = [];
    this.vector
  }
  preloadGame() {
    
  }
  setupGame() {
     this.obstacle = new Obstacle();
     this.background = new Background ();
     this.upgrade = new PowerUp ();
     this.player = new Player();
     this.player.setGame(this);
     this.particle = new Particle(this.player.x, this.player.y);
     this.player.image = this.playerImg;
     
    }
    drawGame() {
    clear();
    this.obstacle.drawTriangles()
    this.upgrade.drawUpgrade();
    this.player.drawPlayer();


    if(frameCount % 60 ===  0) {
      this.obstacles.push(new Obstacle(this.platform))
    }

    if (this.player.score > 10 && (frameCount % 60 == 0)) {
      this.vector = createVector(random(0,width), random(0,height))
      this.particles.push(this.vector)
  
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
        this.vector = createVector(this.player.x, this.player.y)
        this.particles.push(this.vector)
        return false
      } else {
        return true
      }
    })
    this.particle.whereIsPlayer(this.player)
    this.circles.forEach((circle) => {
      circle.drawUpgrade();
    })
    if(frameCount % 120 === 0) {
      this.circles.push(new PowerUp(this.upgrade))
    }

    if (this.player.x < 0) {
      this.player.x = this.player.x + width;
    }
    if (this.player.x > width) {
      this.player.x = width - this.player.x;
    }
    beginShape()
    for (let i = 0; i < this.particles.length; i++) {
      let position = this.particles[i];
      let randomness1 = random(1,5);
      let randomness2 = random(-5,0)
      let randomness3 = random(-7,5)
      push()
      noFill()
      if (this.player.score == 3) {
        // strokeWeight(4);
        // stroke(51); 
        position.x += randomness1;
        position.y += randomness1;
      }
       if (this.player.score == 6) {
        position.x += randomness2;
        position.y += randomness2;
      } 
      if (this.player.score > 9) {
        position.x += randomness3;
        position.y += randomness3;

      }

       fill(random(100, 255),random(100, 255),random(100, 255))
      ellipse(position.x , position.y , i +100, i+ 100)
      // vertex(position.x,position.y)
      pop()
    }
    endShape()
    // this.particle.update()
    this.particle.drawParticles();

 
    if (this.player.y < 50 || (this.player.y == height - this.player.height && this.player.playing)) {
      frameRate(0);
      alert(`You got ${this.player.score} circles, try to collect 10 next time!`)
      location.reload();
  }
  // if (this.player.y == height - this.player.height && this.player.playing){
  //   console.log("you lose down");
  // }
  }
}

// drum.mp3
