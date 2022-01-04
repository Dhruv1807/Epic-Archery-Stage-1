class Player {
    constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.player_image = loadImage("./assets/player.png")
    this.player_hand = loadImage("./assets/playerArcher.png")
    }
    display() {
    
    push();
    rotate(this.angle);
    imageMode(CENTER);
    image(this.player_hand, 0, 0, this.width, this.height);
    pop();
}
    
}