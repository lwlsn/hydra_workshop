
/* Music Hackspace Hydra Workshop
28/06/20
Developed by Lizzie Wilson */

// Welcome !  Let's explore live coding visuals in hydra.

// Hydra is a web-based language, so the code you will write is based in JavaScript.

// Everything with two double slashes (//) or a slash and a star (/*,*/) is a comment- the computer can't "read" these, it lets you leave messages to yourself.

// Shortcuts you might want to know
/*
[ctrl/opt & enter ] - runs one line of code
[ctrl & shift & enter] - runs multiple line of code.
*/



// PART 1 - MAKE A VISUAL PATTERN //

// 1.1 Signal generators

//Let's start by "running" this piece of code below  to make some visuals .. Place the mouse on the line below and press {ctrl/cmd & enter}

osc(2).out()

noise(2).out()

voronoi().out()

// You should see the background change. This is a visual "oscillator", changing the background between black and white at a steady rate.


//The first number we "send" to the oscillator determines how fast it goes. A higher number will make it go faster.

osc(10).out()
osc(100).out()

//second changes the speed
osc(100, 0.2).out()



//third changes the colours
osc(100, 0.2, 0.9).out()

// two parameters, frequency + speed..
noise(100, 0.2).out()

//add some functions

//rotate the visuals (radians)
osc(10,0.1).rotate(2).out()

//kaleidoscope
osc(10,0.1).rotate(2).kaleid(5).out()


//change overall colour
osc(10,0.1).rotate(2).kaleid(5).color(1.14, 0.6,.80).out()

//start changing numbers - start live coding!
osc(10,0.1).rotate(2).kaleid(5).color(1.14, 0.6,.80).out()


/// some functions that you can try  ///

// .contrast (amount)
// .invert (amount)
// .saturate (amount)
// .pixelate( x, y )
// .repeatX( repetitions, offset )
// .repeatY( repetitions, offset )
// .rotate( angle, speed )
// .scale( size, xMultiplier, yMultiplier )

//documentation to all the functions..
// https://github.com/ojack/hydra/blob/master/docs/funcs.md



// PART 2 - MODULATING AND OPERATORS FUNCTIONS //

//2.1 Operator functions

// multiply the two signals together
osc(20,0.1, 0.8).mult(noise(2)).out()

//adding the two signals together
osc(20, 0.1, 0.8).add(noise(2)).out()

//blend the two signals
osc(20,0.1, 0.8).blend(noise(2)).out()

//difference
osc(20,0.1, 0.8).diff(noise(2)).out()


//2.2 Global variables can be used in this for more fun!

//  move your mouse from left to right
osc(() => mouse.x).out()
// this is replacing the frequency of the oscillator with the mouse position value
// on the screen in pixels (i.e. usually a value between 0 - 1000)

// move your mouse up and down
osc(20).diff(noise(()=> mouse.y)).out() // try changing diff to add, mult etc...

// we can also control the oscillator using time
osc( ({time}) => Math.sin(time)*200 ).out(o0)
// here we are changing the frequency of the oscillator at different time values
// moving from 1 - 200


// 2.3 Modulation

// Modulating occurs when an oscillator’s behavior is affected by an external signal.





// PART 3 - FFT PROCESSES//


// PART 4 - FUN STUFF //

//init cam

//
