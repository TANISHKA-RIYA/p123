rightwrist = 0;
leftwrist = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(700,100);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotposes);
}
function modelLoaded(){
    console.log("model loaded");
}
function draw(){
    background("grey");
    textsize(difference); 
    fill(25,0,0);
    text("Tanishka",50,400);
}

function gotposes(result){
    if (result.length > 0){
        console.log(result);

    rightwrist = result[0].pose.rightWrist.x;
    leftwrist = result[0].pose.leftWrist.x;
    difference = floor(leftwrist-rightwrist);
  }
}