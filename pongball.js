class Ball{
    constructor(x,y,diameter,speedx,speedy){
        this.x = x;
        this.y = y;
        this.speedx = speedx;
        this.speedy = speedy;
        this.diameter = diameter;
    }

    update(){
        this.polygon = this.box;
        this.#move();
        this.collisionCheck();
        this.borderCheck();
    }

    #move(){
        this.x += this.speedx;
        this.y += this.speedy;
    }

    collisionCheck(){
       // console.log(this.x+this.diameter, inimigo.x-inimigo.width);
        if(player.x+player.width > this.x-this.diameter/2){
            if(Math.abs(this.y - player.y) < player.height)
                this.speedx *= -1;
        }
        if(this.x+this.diameter/2 > inimigo.x-inimigo.width){
            if(Math.abs(this.y - inimigo.y) < inimigo.height)
                this.speedx *= -1;
        }
    }

    borderCheck(){
        if(this.x + this.diameter/2> canvas.width || this.x - this.diameter/2 < 0){
            this.speedx *= -1;
          }
          if(this.y  + this.diameter/2> canvas.height || this.y  - this.diameter/2< 0){
            this.speedy *= -1;
          }
    }

    draw(ctx,color){
        //ctx.translate(this.x,-this.y+canvas_height*0.4);
        ctx.fillStyle = color;

       ctx.beginPath();
       ctx.arc(this.x, this.y, this.diameter , 0, 2 * Math.PI);
       ctx.fill();
    }
}