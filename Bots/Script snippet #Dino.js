function lonelyDinoAutoPlay() {
        
    setTimeout(function() {
        runnerInstance = this.Runner.instance_;
        horizonObstacles = runnerInstance.horizon.obstacles;
        
        if (runnerInstance.tRex.ducking) {
            runnerInstance.tRex.setDuck(true);
        }
            
        if (runnerInstance.crashed) {
            console.log("Game Over... Paste the code again to automate the game");
            return;
        }
            
        if (horizonObstacles.length > 0) {
            action = "JUMP";
            obstacleType = horizonObstacles[0]["typeConfig"]["type"];

            // Identify Action based on obstacles
            if (obstacleType == "CACTUS_SMALL" || obstacleType == "CACTUS_LARGE") {
                action = "JUMP";
            } else if (obstacleType == "PTERODACTYL") {
                if (horizonObstacles[0]["yPos"] == 75 || horizonObstacles[0]["yPos"] == 50)
                    action = "DUCK";
            }

            // Jump or Duck for the obstacle
            if (horizonObstacles[0].xPos <= 100) {
                console.log(myobstacles[0]);
                if (action == "JUMP") {
                    console.log("Jumping for the " + obstacleType + "!");
                    currentSpeed = runnerInstance.currentSpeed;
                    runnerInstance.tRex.startJump(currentSpeed-3);
                } else if (action == "DUCK") {
                    console.log("Ducking for the " + obstacleType + "!");
                    runnerInstance.tRex.setDuck(true);
                }
            }
        }
        lonelyDinoAutoPlay();
    }, 15);
}
console.log('Start the Game!!!')
lonelyDinoAutoPlay();
