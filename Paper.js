class Paper {
    constructor(x, y, r) {
      var options = {
          'isStatic': false,
          'restitution': 0.3,
          'friction':0.5,
          'density':1.2
      }
      this.image = loadImage("paperimg.png");
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x,this.y, this.r/2, options);
           
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r);
      pop();
    }
  };
  