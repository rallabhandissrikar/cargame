function car() {
  this.x = width/2;
  this.y = 250;
  this.width = 40;
  this.height = 80;
  this.fly = false;

  this.show = function() {
    imageMode(CENTER)
    image(playercarimage, this.x, this.y, this.width, this.height);
    this.x = constrain(this.x,20,width - 20);
    this.y = constrain(this.y,40,height - 40);
  }

  this.carMove = function(side) {
    if (side === "left") {
      this.x -= 30;
      this.y = this.y;
    }if (side === "right") {
      this.x += 30;
      this.y = this.y;
    }if (side === "up") {
      this.y -= 30;
      this.x = this.x;
    }if (side === "down") {
      this.y += 30;
      this.x = this.x;
    }
  }
}
