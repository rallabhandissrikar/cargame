function opponent(car) {
  this.x = random(20, width - 20);
  this.y = random(-100, 0);
  this.width = 40;
  this.height = 80;
  this.image = loadImage("oponent.png");
  this.speedRun = 10;
  this.carl = car;

  this.show = function () {
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
  };

  this.move = function () {
    if (frameCount % 5 == 0) {
      this.y += this.speedRun;

      
      if (this.carl === 1) {
        if (this.x - 20 < opppositecar2.x + 20 && this.x + 20 > opppositecar2.x - 20) {
          this.x = random(20, width - 20);
          this.y = random(-100, 0);
          
        }
      } else if (this.carl === 2) {
        if (this.x - 20 < opppositecar1.x + 20 && this.x + 20 > opppositecar1.x - 20) {
          this.x = random(20, width - 20);
          this.y = random(-100, 0);
          

        }
      }

      if (this.y > 400) {
        this.x = random(20, width - 20);
        this.y = random(-100, 0);

      }
    }

    if (frameCount % 50 == 0) {
      this.speedRun += 0.5;
      
    }

    

  };
}
