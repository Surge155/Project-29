class Block{
    constructor(x,y){
        /*var options = {
            isStatic: true,
            restitution: 0.3
        }*/
        this.Body = Bodies.rectangle(x,y,40,40);
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;
        World.add(world,this.Body);
    }

    display(){
        var pos = this.Body.position;
       fill(random(100,200));
        rectMode(CENTER);
        rect(pos.x,pos.y,40,60);
    }
}