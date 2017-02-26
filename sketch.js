var state=true;
var inc=1;
var d,e,r;
var inc2=1;

function setup() {
createCanvas(800,600);  
angleMode(DEGREES); 
d=0;
e=0;
}

function draw() {

background(11,72,107)

//Under circles    
for(var posX=100; posX<=700; posX+=100){
    for(var posY=100;posY<=500; posY+=100){
        for(var a=5;a<=180;a+=5){

            stroke(252,157,154)     
            line(posX+cos(a)*r,posY+sin(a)*r,posX+cos(a)*r,posY+r*sin(-a))
            line(posX-cos(a)*r,posY+sin(a)*r,posX-cos(a)*r,posY+sin(-a)*r)
    
        }
    }
}   

//Circles in movement   
for(var posX1=150; posX1<=350; posX1+=100){
    for(var posY1=150;posY1<=500; posY1+=100){
        for(var b=0;b<=90;b+=5){

            stroke(168,219,168)     
            line(posX1+50*cos(b)+d,posY1+50*sin(b),posX1+50*cos(180-b)+d,posY1+50*sin(b))
            stroke(254,67,101)    
            line(posX1-50*cos(180-b)+d,posY1+50*sin(-b),posX1-50*cos(b)+d,posY1+50*sin(-b))            
        }
    }
} 

    
for(var posX1=450; posX1<=700; posX1+=100){
    for(var posY1=150;posY1<=500; posY1+=100){
        for(var b=2.5;b<=92.5;b+=5){

            stroke(254,67,101)     
            line(posX1+50*cos(b)+e,posY1+50*sin(b),posX1+50*cos(180-b)+e,posY1+50*sin(b))
            stroke(168,219,168) 
            line(posX1-50*cos(180-b)+e,posY1+50*sin(-b),posX1-50*cos(b)+e,posY1+50*sin(-b))            
        }
    }
} 

 //Increment turn off with mouse   
 if(state==true){    
    d=d+inc
    if(d+inc>=300 || d+inc<=0) {   
  inc=-inc
    }
        e=e-inc2
    if(e-inc2<=-300 || e-inc2>=0) {   
  inc2=-inc2
    } 
 //radius of under circles change with mouse    
 r=mouseX
} 

}
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

function mousePressed(){
    if(state==true){
          state= false;
    }else{
        state=true;
    }
      
}