const canvas = document.getElementById("Snake");
const ctx = canvas.getContext("2d");

let speed = 25;
let positionx = 0;
let positiony = 0;
let snakex = 350;
let snakey = 350;
let snakeWidth = 25;
let snakeHeight = 25;
let foodx = 100;
let foody = 100;
let foodWidth = 25;
let foodHeight = 25;
let myScore = 0;
let intervalId ;
let timeoutId ;
timeoutId =  setInterval(updateCanvas, 1000 / speed)

function collision(){
    if(snakey-(positiony*speed) === foody && snakex -(positionx*speed)=== foodx ){
        console.log("food eaten")
        foodx = Math.floor(Math.random()*24)*25
        foody = Math.floor(Math.random()*24)*25
        myScore++
    }     
}


function gameOver () {
    if (snakey -(positiony*speed) < 0 || (snakey + snakeHeight)-(positiony*speed) > 700 || (snakex + snakeWidth) -(positionx*speed) > 700 || snakex -(positionx*speed) < 0  ) {
        ctx.fillStyle = "yellow";
        ctx.font = "100px Verdana"
        ctx.fillText("Game Over", 80, 350);
        ctx.fillStyle = "yellow";
        ctx.font = "50px Verdana"
        ctx.fillText(`Total Score : ${myScore}`, 170, 420);
        clearTimeout(timeoutId);
        clearInterval(intervalId);
        setTimeout ( () => window.location.reload(), 3000) ;
    }
}


function food(){
    ctx.fillStyle = "green";
    ctx.fillRect(foodx, foody, foodWidth, foodHeight);
}


function clearCanvas(){
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, 700, 700);
}


function drawSnake(){
    ctx.fillStyle = "red";
    ctx.fillRect(snakex -(positionx*speed), snakey-(positiony*speed), snakeWidth, snakeHeight);  
}


function score(){
    ctx.fillStyle = "white"
    ctx.font = "20px Verdana"
    ctx.fillText(`Score:${myScore}`,605, 20)
}


function updateCanvas(){
    clearCanvas()
    collision ()
    food ()
    drawSnake()
    gameOver()
    score()  
}


document.addEventListener('keydown', e => {     
    switch (e.key) {
        case "ArrowUp":
            clearInterval(intervalId)
            intervalId = setInterval ( ()=> { positiony +=1;
            }, 150 )
            break;
        case "ArrowDown":
            clearInterval(intervalId)
            intervalId = setInterval ( ()=> {  positiony -=1;
            }, 150 )
            break;
        case "ArrowRight":
            clearInterval(intervalId)
            intervalId = setInterval ( ()=> { positionx -=1;
            }, 150 )
            break;
        case "ArrowLeft":
            clearInterval(intervalId)
            intervalId = setInterval ( ()=> { positionx +=1;
            }, 150 )
            break;
    }
    updateCanvas();
}); 

updateCanvas()
