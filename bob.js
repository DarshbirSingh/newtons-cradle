class Bob { 
    constructor(x, y){
        var options = { isStatic:false,restitution:0.3, friction:0.5, density:1.2 } 
        this.body = Bodies.circle(x, y, 90, options); 
        this.radius = 90; 
        World.add(world, this.body); }
        display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("blue")
        stroke("blue")
        strokeWeight(3)
        ellipse(0,0,90,90)
        pop()
        }
    }