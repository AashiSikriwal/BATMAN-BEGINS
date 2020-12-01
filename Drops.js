class Drops{
    constructor(x,y){
        var options={
            isStatic:false
        }
        this.x=this.x
        this.y=this.y

    }
    update(){
        if(this.body>1000){
            this.x=this.x;
            this.y=this.y;
        }


    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(lightblue);
        ellipse(0,0,10,10);
        pop();
    }
}