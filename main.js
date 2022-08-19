const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');


canvas.width = 800;
canvas.height = 600;

const player = new Jogador(10,0,10,100,"player",5);
const inimigo = new Jogador(canvas.width-20,0,10,100,"inimigo",0);
const ball = new Ball(100,100,25,2,2);
let score = [0,0];
let bool_point = false;
animate();

function animate() {
    canvas.height = canvas.height;

    context.font = '50px Verdana';
    context.fillStyle = "white";
    context.fillText(score[0],canvas.width/2-70,70);
    context.fillText(score[1],canvas.width/2+70,70);
    
    register_score();
    drawObject(player);
    drawObject(inimigo);
    drawObject(ball);
    
    requestAnimationFrame(animate);
}

function register_score(){
    //console.log(ball.x);
    if(ball.x-ball.diameter < player.x){
        if(!bool_point){
            bool_point = true;
            score[1] +=1;
        }
    }
    if(ball.x > canvas.width/2)
        bool_point = false;

    if(ball.x > inimigo.x){
        console.log(ball.x);
        if(!bool_point){
            bool_point = true;
            score[0] +=1;
        }
    }
}

function drawObject(objeto){
    objeto.update();
    //canvas.height = canvas.height;
    context.save();
    objeto.draw(context,"white");
    context.restore();
}