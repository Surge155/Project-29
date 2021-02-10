class Block{
    constructor(x,y){
        var options = {
           isStatic: false
        }
        this.Body = Bodies.rectangle(x,y,40,40,options);
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;
        World.add(world,this.Body);
    }

    display(){
        var pos = this.Body.position;
        var angle = this.Body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
       fill(random(100,200));
        rectMode(CENTER);
        rect(0,0,40,60);
        pop();

    }
}