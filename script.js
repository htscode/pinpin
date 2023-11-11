document.addEventListener("DOMContentLoaded", function () {
    // This ensures that the JavaScript code runs after the DOM has fully loaded.
    let gameScreen = document.getElementById("gameScreen");

    function showMessage() {
        gameScreen.textContent = "Game started!"; 
        setTimeout(function () {
            gameScreen.classList.add("hidden");
            newScreen.classList.remove("hidden");
        }, 2000);

    }
    let topRightCorner = document.getElementById("topRightCorner");
    topRightCorner.addEventListener("click", function () {
        updateNumber();
    });

    let ok = document.getElementById("ok1");
    ok.addEventListener("click",nextText);
    let clickCount = 0;

    function nextText(){
            // Get the element with id "text"
            var textElement = document.getElementById('text');
      
            // Check if the element exist
              // Increment the click count
            clickCount++;
      
              // Change the text content based on the click count
            switch (clickCount) {
            case 1:
                textElement.textContent = 'Check that you have positioned your belt/watch for the measure of heart rate correctly before starting.';
                break;
            case 2:
                textElement.textContent = 'This is a controlled breathing exercise. Earn points for decreasing your heart rate.'; 
                break;
            case 3: 
                textElement.textContent = 'You will always inhale for 10 seconds and exhale 10 seconds.';
                break;
            case 4:
                textElement.textContent = 'You will repeat the all cycle for 8 full breaths.';
                break;
            case 5: 
                // Additional action on the third click
                textElement.textContent = 'LETS GO!';

                break;
            case 6: 
                breathing();
                
        	    startCountdown();
                break;
            default:
                // Reset the counter after the third click
                clickCount = 0;
                break;
            }
    }

      // Set the default heart rate
    let heartRate = 120;
    let hrtext = document.getElementById("yourhr");

    // Calculate the interval duration based on the heart rate
    let intervalDuration = 60000 / heartRate;    
    let pulsatingCircle = document.getElementById("heart");
    pulsatingCircle.addEventListener("click", function () {
        decreaseHeartRate();
    });

        
    document.addEventListener('keydown', function(event) {
        // Check if the pressed key is "d"
        if (event.key === 'd') {
        // Call the function to decrease heart rate
            decreaseHeartRate();
        }
        if (event.key === 'i') {
            increaseHeartRate();
        }
    });

    // Attach the showMessage function to the touchstart event.
  
    function startPulsating() {
        // Initial pulsating animation
        updatePulsatingAnimation();

        // Set an interval to update the pulsating animation based on the heart rate
        setInterval(function () {
            updatePulsatingAnimation();
        }, 60000 / heartRate);
    }

    function updatePulsatingAnimation() {
        // Update the pulsating animation duration dynamically based on the heart rate
        pulsatingCircle.style.animationDuration = `${60 / heartRate}s`;
    }


    function decreaseHeartRate() {
        // Decrease the heart rate by 40 beats per minute when clicked
        heartRate -= 5;
        let hrNumberElement = document.getElementById("hrnumber");
        // Recalculate the interval duration based on the updated heart rate
        intervalDuration = 60000 / heartRate;
        hrNumberElement.textContent = heartRate;
        updatePulsatingAnimation();

    }
    
    function increaseHeartRate() {
        // Decrease the heart rate by 40 beats per minute when clicked
        heartRate += 5;
        let hrNumberElement = document.getElementById("hrnumber");
        // Recalculate the interval duration based on the updated heart rate
        intervalDuration = 60000 / heartRate;
        hrNumberElement.textContent = heartRate;
        updatePulsatingAnimation();

    }




    gameScreen.addEventListener("click", showMessage);
    pulsatingCircle.addEventListener("click",decreaseHeartRate, updatePulsatingAnimation)

    function breathing() {
        setTimeout(function () {
            newScreen2.classList.add("hidden");
            breathingScreen.classList.remove("hidden");
            startPulsating();
        }, 500);

    }
    function instruction1() {
        setTimeout(function () {
            newScreen.classList.add("hidden");
            newScreen2.classList.remove("hidden");
        }, 2000);

    }


    breathbutton.addEventListener("click",instruction1)
        
    function updateNumber() {
        // Update the content of the number span with a new value (e.g., 42)
        let numberSpan = document.getElementById("number");
        let randomNumber = Math.floor(Math.random() * 100);
    
        numberSpan.textContent = randomNumber.toString();
    }
    let countdownElement = document.getElementById("countdown");
    let secondsRemaining = 20; // Set the initial countdown time to 4 seconds
    let countdownInterval;
   

    // Function to start the countdown
        function updateCountdown() {
        secondsRemaining--;

        // Check if the countdown reaches zero
        if (secondsRemaining > 0) {
            countdownElement.textContent = "Time: " + secondsRemaining + "s";
        } else {
            clearInterval(countdownInterval);
            countdownElement.classList.add("hidden"); // Hide the countdown element
            // Add any actions you want to perform when the countdown reaches zero
            console.log("Breath In countdown reached zero!");

            // Start the second countdown for "Hold breath" (7 seconds)
            startNewCountdown("Breath out", 10);
        }
    }

    // Function to start the countdown
    function startCountdown(duration) {
        countdownElement.classList.remove("hidden"); // Show the countdown element
        secondsRemaining = duration;
        countdownInterval = setInterval(updateCountdown, 1000);
    }

    // Function to stop the countdown
    function stopCountdown() {
        clearInterval(countdownInterval);
    }

    // Function to start a new countdown with custom text and duration
    function startNewCountdown(customText, duration) {
        // Set the custom text for the new countdown
        countdownElement.textContent = customText;

        // Start the new countdown
        startCountdown(duration);

        // When the second countdown finishes, start the third countdown for "Breath out" (8 seconds)
        setTimeout(function () {
            startNewCountdown("Breath in", 10);
        }, duration * 1000); // Wait for the duration of the second countdown
    }
    let gum = document.getElementById("gum");
    gum.addEventListener("animationiteration", function () {
        // Toggle text content on each animation iteration
        gum.innerHTML = gum.innerHTML === "Breath In" ? "Breath Out" : "Breath In";
    });


 // ==========================================
 
 var canvas = document.getElementById("cloudCanvas");
 var ctx = canvas.getContext("2d");

 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

 // Function to draw cartoon clouds
 function drawCartoonCloud(x, y, cloudColor, borderColor) {
     ctx.beginPath();
     ctx.arc(x, y, 20, 0, Math.PI * 2);
     ctx.arc(x + 25, y - 10, 30, 0, Math.PI * 2);
     ctx.arc(x + 60, y, 20, 0, Math.PI * 2);
     ctx.lineWidth = 5;
     ctx.strokeStyle = borderColor;
     ctx.stroke();
     ctx.fillStyle = cloudColor;
     ctx.fill();
     ctx.closePath();
 }

 // Function to draw character with multiple balloons
 function drawBalloons(cordnt, characterColor, ballSizes) {
     // Draw character
     // Draw multiple static balloons
     for (var i = 0; i < ballSizes.length; i++) {
         var bSize = ballSizes[i];
         var x = cordnt[i][0];
         var y = cordnt[i][1];
         console.log(bSize)
         ctx.beginPath();
         ctx.moveTo(x, y);
         ctx.ellipse(x, y, bSize[0], bSize[1], 0, 0, Math.PI * 2);
         ctx.fillStyle = characterColor;
         //ctx.quadraticCurveTo(x - balloonSize / 2, y - 60, x + balloonSize / 2, y - 60);
         ctx.moveTo(x, y+bSize[1]);
         ctx.lineTo(x + bSize[0], y+3*bSize[1]/2);
         ctx.lineTo(x - bSize[0], y+3*bSize[1]/2);
         ctx.fillStyle = 'rgb(255, 0, 0, 0.5)';
         ctx.fill();
         ctx.closePath();
     }
 }

 // Function to animate clouds and character
 function animateClouds() {
     ctx.fillStyle = "#87CEEB";
     ctx.fillRect(0, 0, canvas.width, canvas.height);

     // Update cloud positions with different speeds
     var cloudSpeed1 = 0.5;
     var cloudSpeed2 = 0.7;
     var cloudSpeed3 = 1.0;
     

     x1 += cloudSpeed1;
     x2 += cloudSpeed2;
     x3 += cloudSpeed3;
     

     // Draw clouds at different positions
     drawCartoonCloud(x1, 100, '#D3D3D3', '#A9A9A9');
     drawCartoonCloud(x2, 200, '#D3D3D3', '#A9A9A9');
     drawCartoonCloud(x3, 300, '#D3D3D3', '#A9A9A9');

     // Loop the clouds when they go out of the canvas
     if (x1 > canvas.width + 60) x1 = -60;
     if (x2 > canvas.width + 60) x2 = -60;
     if (x3 > canvas.width + 60) x3 = -60;

     // Request next animation frame
     requestAnimationFrame(animateClouds);
 }

 function animateBalloons() {
     ctx.fillStyle = "#87CEEB";
     ctx.fillRect(0, 0, canvas.width, canvas.height);

     var cloudSpeed1 = 0.5;
     var cloudSpeed2 = 0.7;
     var cloudSpeed3 = 1.0;
     

     x1 += cloudSpeed1;
     x2 += cloudSpeed2;
     x3 += cloudSpeed3;
     

     // Draw clouds at different positions
     drawCartoonCloud(x1, 100, '#D3D3D3', '#A9A9A9');
     drawCartoonCloud(x2, 200, '#D3D3D3', '#A9A9A9');
     drawCartoonCloud(x3, 300, '#D3D3D3', '#A9A9A9');

     // Loop the clouds when they go out of the canvas
     if (x1 > canvas.width + 60) x1 = -60;
     if (x2 > canvas.width + 60) x2 = -60;
     if (x3 > canvas.width + 60) x3 = -60;

     balloon1[0] += balloonSpeed1;
     balloon1[1] += balloonSpeed1;
     balloon2[0] += balloonSpeed2;
     balloon2[1] += balloonSpeed2;
     balloon3[0] += balloonSpeed3;
     balloon3[1] += balloonSpeed3;

     // Draw clouds at different positions
     drawBalloons(cordnt, 'red', [balloon1, balloon2, balloon3]);
     // Loop the clouds when they go out of the canvas
     if (balloon1[0] >  50) {balloonSpeed1 = -1*balloonSpeed1}
     //console.log(balloon1[0]);
     //console.log(balloonSizes[0][0]);
     if (balloon2[0] > 50) {balloonSpeed2 = -1*balloonSpeed2}
     if (balloon3[0] > 50) {balloonSpeed3 = -1*balloonSpeed3}

     if (balloon1[0] < 20) {balloonSpeed1 = -1*balloonSpeed1}
     if (balloon2[0] < 20) {balloonSpeed2 = -1*balloonSpeed2}
     if (balloon3[0] < 20) {balloonSpeed3 = -1*balloonSpeed3}

     // Draw multiple static balloons
     
     

     // Request next animation frame
     requestAnimationFrame(animateBalloons, animateClouds);
 }

 // Initial positions and settings
 var x1=50, x2=200, x3=350;
 var balloonSizes = [[40, 50] , [35, 45], [50, 60]]; // Adjust the sizes of the balloons
 var cordnt = [[300, 100], [500, 500], [80, 300]];
 animateClouds();

 var balloon1 = balloonSizes[0];
 var balloon2 = balloonSizes[1];
 var balloon3 = balloonSizes[2];
 var balloonSpeed1 = 0.2;
 var balloonSpeed2 = 0.1;
 var balloonSpeed3 = 0.15;
 
 animateBalloons();



 // Update canvas size on window resize
 window.addEventListener('resize', function () {
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
 });

 // Character position
 var characterX = 450;
 var characterY = 550;
});