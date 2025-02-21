​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​function setup() {
    createCanvas(400, 400); // Create a 400x400 pixel canvas
    background(220);        // Set a light gray background
}

function draw() {
    fill(255, 0, 0);       // Red fill color
    ellipse(mouseX, mouseY, 50, 50); // Draw a circle that follows the mouse
}
​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​