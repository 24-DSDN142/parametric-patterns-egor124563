//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let mouthWidth = 35;
let mouthHeight = 29;//default 39
let eyesize = 30;//default 30

let eyebrows = true;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
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
circle(80,90,13)
fill(255, 255, 254)
circle(120,90,eyesize)//eyes
fill(1, 1, 1)
ellipse(120,90,13,)
ellipse(100,125,mouthWidth,mouthHeight)
fill(255,255,254)

angleMode(DEGREES)

arc(100,120.5,mouthWidth,20,180,0)
strokeWeight(5)

if(eyebrows){
stroke(139,180,62)
noFill()
arc(80,80,30,30,210,290)
arc(120,80,30,30,250,330)
}
}