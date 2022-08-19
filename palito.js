class Jogador{
    constructor(x,y,width,height,controlType,speed){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.controlType = controlType;
        this.speed = speed;
        this.bally = 0;

        this.up = false;
        this.down = false;
        this.rdnum =0;

        this.box = [
            {x:0,y:0},
            {x:1*width,y:0},
            {x:1*width,y:1*height},
            {x:0,y:1*height}
        ]
    }

    update(){
        this.polygon = this.box;
        this.#move();
    }
  
    #move(){
        switch(this.controlType){
            case "player":
                this.#addKeyboardListener();
                if(this.y > 0 && this.up)
                    this.y -= this.speed;
                if(this.down)
                    if(this.y < canvas.height - this.height-10)
                    this.y += this.speed;
                break;
            case "inimigo":
                //if(this.y < altura - this.height-10){
                    let ballpos = ball.y;
                    console.log(this.rdnum);
                    if(ballpos > 0+this.height && ballpos < canvas.height-this.height)
                        this.y=ballpos-80;
                    //console.log(this.y);
               // }
                break;
        }
    }

    #addKeyboardListener(){
        document.onkeydown=(event) =>{
            switch(event.key){
                case "ArrowUp":
                    this.up = true;
                    break;
                case "ArrowDown":
                    this.down = true;
                    break;
            }
            //console.table(this);
        }
        
        document.onkeyup=(event) =>{
            switch(event.key){
                case "ArrowUp":
                    this.up = false;
                    break;
                case "ArrowDown":
                    this.down = false;
                    break;
            }
            //console.table(this);
        }
    }

    draw(ctx,color){
        ctx.translate(this.x,this.y);
        ctx.fillStyle = color;

       ctx.beginPath();
       ctx.moveTo(this.polygon[0].x,this.polygon[0].y);

       for(let i=1;i<this.polygon.length;i++){
           ctx.lineTo(this.polygon[i].x,this.polygon[i].y);
       }
       ctx.fill();
    }
}