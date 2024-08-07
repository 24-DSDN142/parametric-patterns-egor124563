//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let mouthWidth = 29;//default 35
let mouthHeight = 29;//default 39
let eyesize = 30;//default 30
let teethHeight = 20;//defualt 20
let eyebrows = true;
let eye2size = 12//defualt 13
let eyebrowHeight = 80 //default 80
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(63, 73, 150); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  fill(252,194,27,255)  
  strokeWeight(1);
circle(100,100,100)

fill(255, 255, 254)
circle(80,90,eyesize)//eyes
fill (33,19,13)
circle(80,90,eye2size)
fill(255, 255, 254)
circle(120,90,eyesize)//eyes
fill(1, 1, 1)
ellipse(120,90,eye2size,)
ellipse(100,125,mouthWidth,mouthHeight)
fill(255,255,254)

angleMode(DEGREES)

arc(100,120.5,mouthWidth,teethHeight,180,0)
strokeWeight(5)

if(eyebrows){
stroke(193,135,23)
noFill()
arc(80,eyebrowHeight,30,30,210,290)
arc(120,eyebrowHeight,30,30,250,330)
noStroke()
fill(192,15,15)
}
}