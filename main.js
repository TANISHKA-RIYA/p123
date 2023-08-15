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
function gotposes(result){
    if (result.length > 0){
        console.log(result);
    }
}