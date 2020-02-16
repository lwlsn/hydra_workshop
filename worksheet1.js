

// Welcome !  Let's explore live coding visuals in hydra. 

// Everything with two double slashes (//) or a slash and a star (/*,*/) is a comment- the computer can't "read" these, it lets you leave messages to yourself. 

// Shortcuts you might want to know
/* 
[ctrl/opt & enter ] - runs one line of code
[ctrl & shift & enter] - runs multiple line of code. 
*/

//Let's start by "running" this piece of code below  to make some visuals .. Place the mouse on the line below and press {ctrl/cmd & enter}

osc(10).out()

// You should see the background change. This is a visual "oscillator", changing the background between black and white at a steady rate. 

//The first number we "send" to the oscillator determines how fast it goes. A higher number will make it go faster. 

osc(100).out()


