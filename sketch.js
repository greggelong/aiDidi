let img
let cnv
let button
let output
let cx,cy


function setup() {
cnv =createCanvas(800, 30);
cnv.parent("colorbox")
 //cx = floor((windowWidth - cnv.width) / 2);
  // cy = floor((windowHeight - cnv.height) / 2);
 // cnv.position(cx, cy);
  getStreet()
  background(128)
  textSize(30);
  textWrap(WORD);

  // Display the text.
  text('Wait for image',0, 0, 800);
  button = createButton("Click for new image, (change of color shows you have clicked)")
  button.parent("buttonholder")
  button.mousePressed(doit)
  button.size(300,300)
  
  //button.position(cx,cy+cnv.height+30)
  button.style('font-size', '30px');
  //output.position(button.x,button.y+60)
}

 async function doit(){
    background(random(255),random(255),random(255))
    await getStreet()
   

 }

async function getStreet(){
  /* 
  if (img) {
    img.remove();
    //uncomment to delete old image;
  }
   */
  let loc = random(["a futuristic city",
    "an ancient monument site in the desert",
    "a city on an alien world",
    "a city floating in outer-space",
    "a hidden underwater metropolis",
    "a bustling medieval market town",
    "a serene mountain village",
    "a high-tech research facility on the moon",
    "a mystical forest village",
    "a post-apocalyptic wasteland",
    "a sprawling subterranean city",
    "a vibrant island paradise",
    "a remote Arctic research station",
    "an abandoned industrial complex",
    "a utopian society in the clouds",
    "a vibrant cyberpunk metropolis",
    "an ancient castle on a cliffside",
    "a futuristic underwater research station",
    "a magical academy in the mountains",
    "a floating island with waterfalls",
    "a colony on Mars",
    "a bustling spaceport city",
    "a secret base in the jungle",
    "a haunted ghost town",
    "a grand palace in a desert oasis",
    "a tranquil lakeside town",
    "a futuristic vertical city",
    "a vibrant alien marketplace",
    "a sprawling nomadic caravan",
    "a mysterious ancient labyrinth"])
  img = await createImg("https://image.pollinations.ai/prompt/a%20view%20from%20the%20back%20of%20a%20taxi%20in%20a%20futuristic%20"+loc+"%20with%20a%20cool%20person%20in%20the%20backseat?width=800&height=800&nologo=true&seed="+floor(random(1026)),"street scene")
 //img.position(cx,cy)
 img.parent("sketch-holder")
 
 //cnv.image(img,0,0)
   
}