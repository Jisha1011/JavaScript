document.addEventListener('DOMContentLoaded',()=>{

    const bird =document.querySelector('.bird')
    const gameDisplay =document.querySelector('.game-container')
    const ground =document.querySelector('.ground')
    const sky =document.querySelector('.sky')
    
    let birdLeft = 220
    let birdBottom = 100
    let gravity = 2
    let isGameOver = false;
    let gap = 500



    function startGame(){
        birdBottom-= gravity
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft+'px'
    }

   let gameTimerId= setInterval(startGame, 20)
    function control(e)
    {
        if(e.keyCode === 32){
            jump()
        }

    }



  function jump(){
    if(birdBottom<500)
    birdBottom += 50
    bird.style.bottom = birdBottom + 'px'
    console.log(birdBottom)
    
  }
  document.addEventListener('keyup',control)

  function generateObstacles(){

    let obstacleLeft =500
    let randomHeight = Math.random() * 60
    let obstacleBottom =randomHeight
     const obstacles =  document.createElement('div')
     const topObstacle = document.createElement('div')
     if(!isGameOver)
        {   obstacles.classList.add('obstacles')
            topObstacle.classList.add('topObstacles')
        }
     gameDisplay.appendChild(obstacles)
    gameDisplay.appendChild(topObstacle)
     obstacles.style.left=obstacleLeft +'px'
     obstacles.style.bottom= obstacleBottom +'px'
     topObstacle.style.left= obstacleLeft + 'px'
     topObstacle.style.bottom= obstacleBottom + gap + 'px'
     //top

     function moveObstacle(){
        obstacleLeft -=2
        obstacles.style.left = obstacleLeft+'px'
        topObstacle.style.left = obstacleLeft+'px'

        if(obstacleLeft === -60)
        {
            gameDisplay.removeChild(obstacles)
            gameDisplay.removeChild(topObstacle)
            
        }
        if(
            obstacleLeft>200 && obstacleLeft<280 && birdLeft ===220 && (birdBottom <obstacleBottom+153|| birdBottom>obstacleBottom+gap-200) ||
            
            birdBottom === 0)
        {
            gameOver()
            clearInterval(timerId)
        }
        

        

    }
    let timerId = setInterval(moveObstacle,20)
    if(!isGameOver)setTimeout(generateObstacles,3000)
  }

  generateObstacles()

  function gameOver(){
    clearInterval(gameTimerId)
    isGameOver = true;
    document.removeEventListener('keyup',control)
    
  }

}


)