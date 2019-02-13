var img;


function setup() {
createCanvas(1000,1000)
img = loadImage('assets/test.png');
//noCorsor();
}
function draw() {
  background(200)
  image(img, width/2, height/2);
  if(mouseX>width/2-img.width/2 && mouseX<width/2+img.width/2 &&
   mouseY>height/2-img.height/2 && mouseY<height/2+img.height/2)
   {
  filter(GRAY);
  }
  else {
    filter(BLUR, 255);
  }


  imageMode(CENTER);

}
