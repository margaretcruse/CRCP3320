function setup(){
	createCanvas(windowWidth,windowHeight);

}

let v = 0;
let x = 0;
let y = 0;
function draw(){
	
	v++;
	if(v>255){
		v=0;
	}
	x++;
	if(x>windowWidth){
		x=0;
	}
	y++;
	if(y>windowHeight){
		y=0;
	}
	fill(255-v,255,40,150);
	noStroke();
	ellipse(mouseX,mouseY,100,100);
	ellipse(x,y,50,50);
	fill(255,255,255);
	text("this is my secret message",500,100);
}
