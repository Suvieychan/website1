function setup() {
    createCanvas(700, 700);
    background(142, 137, 150);
    angleMode(DEGREES);
}

function draw() {
    fill(0);
    strokeWeight(3);


    line(350, 0, 0, 350);
    line(350, 0, 700, 350);
    line(0, 350, 350, 700);
    line(700, 350, 350, 700);

    line(0, 110, 700, 110);
    line(110, 0, 110, 700);
    line(590, 0, 590, 700);
    line(0, 590, 700, 590);

    line(250, 0, 0, 450);
    line(0, 250, 450, 0);
    line(450, 0, 700, 450);
    line(250, 0, 700, 250);
    line(0, 450, 450, 700);
    line(700, 450, 250, 700);
    line(0, 250, 250, 700);
    line(450, 700, 700, 250);

    rect(350, 275, 240, 77);
    arc(350, 350, 250, 250, 90, QUARTER_PI, PIE);

    /*line(350, 225, 350, 475);
    line(225, 350, 700, 350);
    line(250, 300, 700, 300);
    line(240, 310, 700, 310);
    line(230, 320, 700, 320);
    line(245, 315, 700, 315);
    line(275, 225, 450, 350);
    line(275, 225, 350, 475);
    line(275, 450, 450, 450);
    line(275, 225, 425, 225);
    line(300, 475, 425, 475);
    line(275, 225, 350, 450);
    line(275, 450, 425, 225);
    line(425, 225, 450, 350);
    line(275, 225, 225, 350);
    line(245, 240, 350, 350);
    line(235, 275, 700, 350);
    line(0, 0, 0, 0);
    line(0, 0, 0, 0);
    line(0, 0, 0, 0);
    line(0, 0, 0, 0);
    line(0, 0, 0, 0);
    line(0, 0, 0, 0);
    line(0, 0, 0, 0);
    line(0, 0, 0, 0);
    line(0, 0, 0, 0);*/

    function mousePressed(){
        saveCanvas("Day7", "png")
    }
    
}