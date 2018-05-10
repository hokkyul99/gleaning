function setup() {
  createCanvas(700,500);
}

function drawPerson(x, y){
  push();
  translate(x,y); 
  
  fill(109,92,71);
  ellipse(232,254,51,-163);
  
  fill(166,148,108);
  ellipse(227,336,37,48);

  fill(68,65,57);
  ellipse(328,261,139,210);

  fill(109,92,71);
  ellipse(291,179,141,80);
  
  fill(166,148,108);
  ellipse(209,207,57,64);
  
  fill(106,121,116);
  ellipse(192,228,54,28);
  ellipse(194,196,74,79);
  
  fill(166,148,108);
  ellipse(324,143,30,30);
  
  fill(109,92,71);
  ellipse(325,169,52,66);
  ellipse(297,187,110,54);
  pop();
  
}

function drawPersonUp(x, y){
  push();
  translate(x,y); 
  
  fill(109,92,71);
  ellipse(279,168,113,72);
  
  fill(166,148,108);
  ellipse(309,158,37,48);

  fill(68,65,57);
  ellipse(328,261,139,210);

  fill(109,92,71);
  ellipse(291,178,141,80);
  
  fill(166,148,108);
  ellipse(209,207,57,64);
  
  fill(106,121,116);
  ellipse(192,228,54,28);
  ellipse(194,196,74,79);
  
  fill(166,148,108);
  ellipse(324,143,30,30);
  
  fill(109,92,71);
  ellipse(325,169,52,66);
  ellipse(297,187,110,54);
  pop();
  
}

function Issac(x, y){
  push();
  translate(x,y);
  line(0,0,50,-100);
  line(0,0,0,-100);
  line(0,0,-50,-100);
  pop();
}

function draw(){
  background(159,148,120);
  fill(206,191,172);
  rect(0,0,width,100);
  if(keyCode===UP_ARROW){
    drawPersonUp(0,0);
    drawPersonUp(100,0);
  }
  else{
    drawPerson(0,0); 
    drawPerson(100,0);
  }
  Issac(317,466);
  Issac(98,248);
  Issac(169,421);
  Issac(564,345);
  
}