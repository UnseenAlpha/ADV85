canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

images_array = ["mars.jpg", "mars2.jpg", "mars3.jpg", "mars4.jpg"];
random_number = Math.floor(Math.random()* 4);
console.log(random_number);
background_image = images_array[random_number];
rover_image = "rover.png";
rover_x = 10;
rover_y = 10;

function add(){
    background_imageTag = new Image();
    background_imageTag.onload = uploadbackground;
    background_imageTag.src = background_image;

    rover_imageTag = new Image();
    rover_imageTag.onload = uploadrover;
    rover_imageTag.src = rover_image;
}

function uploadbackground(){
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imageTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == "38"){
        up();
        console.log("up");
    }
    if(keypressed == "39"){
        right();
        console.log("right");
    }
    if(keypressed == "37"){
        left();
        console.log("left");
    }
    if(keypressed == "40"){
        down();
        console.log("down");
    }
}
function up(){
    if(rover_y >= 0 ){
        rover_y = rover_y - 10;
        console.log("when up arrow is pressed, X = " + rover_x + " | Y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function down(){
    if(rover_y <= 500 ){
        rover_y = rover_y + 10;
        console.log("when down arrow is pressed, X = " + rover_x + " | Y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function left(){
    if(rover_x >= 0 ){
        rover_x = rover_x - 10;
        console.log("when left arrow is pressed, X = " + rover_x + " | Y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if(rover_x <= 700 ){
        rover_x = rover_x + 10;
        console.log("when right arrow is pressed, X = " + rover_x + " | Y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}

