const game = new Game();

function preload() {
    game.preloadGame();
}
function setup() {
    createCanvas(700, 600); 
    game.setupGame();
    fill(240);
    noStroke();
}
function draw() {
    game.drawGame();

    let t = frameCount / 60; // update time
  
    // create a random number of snowflakes each frame
    for (let i = 0; i < random(5); i++) {
      snowflakes.push(new snowflake()); // append snowflake object
    }
  
    // loop through snowflakes with a for..of loop
    for (let flake of snowflakes) {
      flake.update(t); // update snowflake position
      flake.display(); // draw snowflake
    }
}

// add the jump function here:
function keyPressed() {
    if (keyCode === 32 && game.player.canJump) {
        game.player.jump();
    }
    // if (keyCode === 39) {
        
    //     game.player.moveRight();
    // }
}
// function keyPressed() {

//     if (keyCode === 32) {
//         console.log("jump")
//         game.player.jump();
//     }
//     if (keyCode === 39) {
        
//         game.player.moveRight();
//     }
// }

//keyIsDown