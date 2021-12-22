
status =""; 


function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}
function modelLoaded(){
    console.log("model Loaded");
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
  if(error){
      console.log(error);
  }
  console.log(results);
}



function draw(){
    image(img,0,0,640,420);
    fill("#");
    text("Dog",45,75);
    noFill();
    stroke("#eb34db");
    rect(30,60,450,350);

    fill("#eb34db");
    text("Cat",320,120);
    noFill();
    stroke("#eb34db");
    rect(300,90,270,320);


}