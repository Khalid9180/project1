const canvas = document.getElementById("Snake");
const ctx = canvas.getContext("2d");

let speed = 25;
let speedx = 0;
let speedy = 0;
let snakex = 350;
let snakey = 350;
let snakeWidth = 25;
let snakeHeight = 25;
let xRight = (snakex + snakeWidth) -(speedx*speed);
let xLeft = snakex -(speedx*speed);
let yUp = snakey -(speedy*speed);
let yDown  = (snakey + snakeHeight)-(speedy*speed);
let foodx = 100;
let foody = 100;
let foodWidth = 25;
let foodHeight = 25;
let myScore = 0;
let intervalId ;
let timeoutId ;
timeoutId =  setInterval(updateCanvas, 1000 / speed)

function collision(){
    if(snakey-(speedy*speed) === foody && snakex -(speedx*speed)=== foodx ){
        console.log("food eaten")
        foodx = Math.floor(Math.random()*24)*25
        foody = Math.floor(Math.random()*24)*25
        myScore++
    }     
}


function gameOver () {
    if (snakey -(speedy*speed) < 0 || (snakey + snakeHeight)-(speedy*speed) > 700 || (snakex + snakeWidth) -(speedx*speed) > 700 || snakex -(speedx*speed) < 0  ) {
        console.log("gameover")
        ctx.fillStyle = "blue";
        ctx.font = "100px Verdana"
        ctx.fillText("Game Over", 80, 350);
        clearTimeout(timeoutId);
        clearInterval(intervalId);
    }
}




function food(){
    ctx.fillStyle = "black";
    ctx.fillRect(foodx, foody, foodWidth, foodHeight);
}


function clearCanvas(){
    ctx.fillStyle = "darkslategray"
    ctx.fillRect(0, 0, 700, 700);
}

function drawSnake(){
    ctx.fillStyle = "red";
    ctx.fillRect(snakex -(speedx*speed), snakey-(speedy*speed), snakeWidth, snakeHeight);
    
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
            intervalId = setInterval ( ()=> { speedy +=1;
        //   if (snakey -(speedy*speed) < 0 ) {
        //    gameOver()
        //     }
        }, 150 )
        break;
        case "ArrowDown":
            clearInterval(intervalId)
            intervalId = setInterval ( ()=> {  speedy -=1;
                // if ((snakey + snakeHeight)-(speedy*speed) > 700) {
                //     console.log("gameover")
                //     }
                }, 150 )
        break;
        case "ArrowRight":
            clearInterval(intervalId)
            intervalId = setInterval ( ()=> { speedx -=1;
                // if ((snakex + snakeWidth) -(speedx*speed) > 700) {
                // console.log("gameover")
                // }
            }, 150 )
        break;
        case "ArrowLeft":
            clearInterval(intervalId)
            intervalId = setInterval ( ()=> { speedx +=1;
            //     if (snakex -(speedx*speed) < 0) {
            //     console.log('gameover');
            // }
        }, 150 )
        break;
    }
    updateCanvas();
}); 

updateCanvas()
