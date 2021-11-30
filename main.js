magic= ""
lwristX = 0
rwristX = 0
lwristY = 0
rwristY = 0
lwristScore = 0
rwristScore = 0
function preload(){
    magic= loadSound("Magic- 1d.mp3")
}
function setup() {
    canvas= createCanvas(300,250)
    canvas.position(950, 30)
    video= createCapture(VIDEO)
    video.hide()
    posenet = ml5.poseNet(video, modelLoaded)
	posenet.on('pose', gotPoses)
}

function modelLoaded() {
	console.log("Model has been loaded!")
}
    function draw(){
        push();
      translate(width,0);
      scale(-1, 1);
        image(video, 0, 0, 300, 250)
        pop()
}
function gotPoses(results) {
	if (results.length > 0) {
		console.log(results)
		lwristX = results[0].pose.leftWrist.x;
		lwristY = results[0].pose.leftWrist.y;
		rwristX = results[0].pose.rightWrist.x;
		rwristY = results[0].pose.rightWrist.y;
		rwristScore = results[0].pose.keypoints[10].score;
		lwristScore = results[0].pose.keypoints[9].score;
	}
}