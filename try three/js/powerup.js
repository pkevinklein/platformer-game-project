class PowerUp {
    constructor(circle) {
        this.height = 50;
        this.width = 50;
        this.cirle = circle
        this.collectables = [];
        this.x = (Math.random() * width);
        this.y = height - this.height;
        this.platform;
        this.game = new Game();
        this.particle = new Particle (this.x,this.y);
        this.player = new Player()
    }

    drawUpgrade() {
        this.y -= 3
        this.obstacle = new Obstacle()
        ellipse(this.x, this.y, 15, 15)
      }
    upgradeCollision(playerInfo) {
        let playerX = playerInfo.x + playerInfo.width / 2
        let playerY = playerInfo.y + playerInfo.height / 2
        if (dist(this.x,this.y,playerX,playerY) > 35) {
          return false;
        } else {
            playerInfo.score++;
            // this.particle.particles.push(new Particle(this.player.x,this.player.y));
          return true;
        }
      }
}