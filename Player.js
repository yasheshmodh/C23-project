class Player{
    constructor(x,y,w,h){
var Options = {
    isStatic:true
}
this.body = Bodies.rectangle(x,y,w,h,Options)

this.w = w
this.h = h
this.image = loadImage("assets/player.png")
World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        image(this.image,0,0,this.w,this.h)
        pop()

    }
}