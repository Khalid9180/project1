const canvas = document.getElementById("Snake");
const ctx = canvas.getContext("2d");

let speed = 25;
let speedx = 0;
let speedy = 0;
let snakex = 350;
let snakey = 350;
let snakeWidth = 25;
let snakeHeight = 25;
const xRight = (snakex + snakeWidth) -(speedx*speed);
const xLeft = snakex -(speedx*speed);
const yUp = snakey -(speedy*speed);
const yDown  = (snakey + snakeHeight)-(speedy*speed);
let foodx = 100;
let foody = 100;
let foodWidth = 25;
let foodHeight = 25;


function food (){
    ctx.fillStyle = "black";
    ctx.fillRect(foodx, foody, foodWidth, foodHeight);
}


function clearCanvas (){
    ctx.fillStyle = "darkslategray"
    ctx.fillRect(0, 0, 700, 700);
}

function drawSnake(){
    ctx.fillStyle = "red";
    ctx.fillRect(snakex -(speedx*speed), snakey-(speedy*speed), snakeWidth, snakeHeight);
    
}

function updateCanvas(){
    clearCanvas()
    drawSnake()
    food ()
    setTimeout(updateCanvas, 1000)
}
document.addEventListener('keydown', e => {
    console.log(e.key)
    switch (e.key) {
        case "ArrowUp":
        speedy +=1;
        if (snakey -(speedy*speed) < 0 ) {
            console.log("gameover")
    
            }
        break;
        case "ArrowDown":
        speedy -=1;
        if ((snakey + snakeHeight)-(speedy*speed) > 700) {
            console.log("gameover")
            }
        break;
        case "ArrowRight":
            speedx -=1;
            if ((snakex + snakeWidth) -(speedx*speed) > 700) {
            console.log("gameover")
            }
        
        break;
        case "ArrowLeft":
        speedx +=1;
            if (snakex -(speedx*speed) < 0) {
            console.log('gameover');
        }
        break;
    }
    updateCanvas();
}); 

updateCanvas()
