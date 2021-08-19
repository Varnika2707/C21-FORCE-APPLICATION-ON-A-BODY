class Ball  {
    //properties
    constructor(x,y,r){
        var options = {
            restitution:0.95
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);
    }

    //functions/methods
    display(){
        //namespacing
        var pos = this.body.position;

        fill("red")
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y,this.r,this.r)

    }
}