var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 
var backimg;

function preload(){
   
}

function setup(){
    createCanvas(1350,650); 
    //To use angle in Degrees
    angleMode(DEGREES);   
}

function draw(){
    background(255,125,120);

    textFont("Segoe Script");
    textSize(55);
    strokeWeight(3);
    stroke(15,29,241);
    fill(22,241,15);
    text("TICK-TOCK CLOCK", 600,190);

    textSize(25);
    strokeWeight(3);
    stroke(241,9,215);
    fill("YELLOW");
    text("HOUR HAND IS YELLOW ", 600,290);

    textSize(25);
    strokeWeight(3);
    stroke("yellow");
    fill("GREEN");
    text(" SECONDS HAND IS GREEN", 600,370);

    textSize(25);
    strokeWeight(3);
    stroke("green");
    fill("PINK");
    text(" MINUTES HAND IS PINK", 600,330);


    //Translation and rotation 
    translate(200,200)
    rotate(-90)

    //Calculating time using predefined func from p5.js
    hr = hour();
    mn = minute();
    sc = second();

    //To create ab iterative rotation
    strokeWeight(8);
    stroke(255, 150, 235);
    noFill();
    scAngle = map(sc, 0, 60, 0, 360);
    strokeWeight(8);
    stroke(154, 234, 101);
    mnAngle = map(mn,0,60,0,360);
    strokeWeight(8);
    stroke(137, 96, 253);
    hrAngle = map(hr % 12,0,12,0,360);

    //drawing seconds hand
    push();
    rotate(scAngle); //rotate the hand based on angle calculated
    stroke(136,241,9);
    strokeWeight(4);
    line(0,0,200,0);
    pop()

    //drawing minutes hand
    push();
    rotate(mnAngle);
    stroke(241,9,215);
    strokeWeight(7);
    line(0,0,170,0);
    pop()

    //drawing hour hand
    push();
    rotate(hrAngle);
    stroke(241,241,9);
    strokeWeight(9);
    line(0,0,145,0);
    pop()

    stroke("black");
    point(0,0)

    //drawing the arcs
    strokeWeight(2);
    noFill();
    //Seconds
    stroke(136,241,9);
    arc(0,0,385,385,0,scAngle);
    //Minutes
    strokeWeight(5);
    stroke(241,9,241);
    arc(0,0,320,320,0,mnAngle);
    //Hour
    strokeWeight(7);
    stroke(241,241,9);
    arc(0,0,275,275,0,hrAngle);

    drawSprites();
  // strokeWeight(5);
   //stroke(0,255,0);
  
}