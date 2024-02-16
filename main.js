function preload() {

}

function setup()
{
    
        canvas = createCanvas( 420, 420 );
        canvas.position(110, 250);
        video = createCapture(VIDEO)
        video.hide();   
    
    
}

function take_snapshot() {
    save ('student_name.png')
    }


function draw() {
image(video, 0, 0, 640, 480);
circle(75,75, 125,);
circle(75,350, 125);
circle(350,350, 125);
circle(350,75, 125);


rect(350, 75, 30, 250);
rect(75, 75, 250, 30);
rect(75, 350, 250, 30);
rect(75, 75, 30, 250);
}