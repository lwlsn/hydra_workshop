/* Music Hackspace Hydra Workshop
28/06/20
Developed by Lizzie Wilson
*/

// Welcome !  Let's explore live coding visuals in hydra.

// Hydra is a web-based language, so the code you will write is based in JavaScript.

// Everything with two double slashes (//) or a slash and a star (/*,*/) is a comment- the computer can't "read" these, it lets you leave messages to yourself.

// Shortcuts you might want to know
/*
[ctrl & enter ] - runs one line of code

[option & enter] - runs one "block" of code, i.e. no space between the lines

[ctrl & shift & enter] - runs everything
*/


// PART 1 - MAKE A VISUAL PATTERN //

// 1.1 Signal generators

//Let's start by "running" this piece of code below  to make some visuals .. Place the mouse on the line below and press {ctrl/cmd & enter}

//oscillator// You should see the background change. This is a visual "oscillator", changing the background between black and white at a steady rate.
osc(10).out()

//back to black background
solid().out()

//other "base" backgrounds
noise(2).out()

voronoi().out()

shape(10).out()


//The first number we "send" to the oscillator is known as a parameter.
//This parameter determines how fast it goes. A higher number will make it go faster.

osc(10).out()
osc(100).out()

//second changes the speed
osc(100, 0.2).out()


//third changes the colours
osc(100, 0.2, 0.9).out()

// two parameters, frequency + speed..
noise(100, 0.2).out()

// To find out what all the different parameters are for each function,
// check the documentation page:
// https://github.com/ojack/hydra/blob/master/docs/funcs.md

//1.2 - Adding functions to the pattern

//rotate the visuals (radians)
osc(10,0.1).rotate(2).out()

//kaleidoscope (try chaning this value and see what happens)
osc(10,0.1).rotate(2).kaleid(5).out()

//change overall colour
osc(10,0.1).rotate(2).kaleid(5).color(1.14, 0.6,.80).out()

//start changing numbers inside the brackets - start live coding!
osc(10,0.1).rotate(2).kaleid(5).color(1.14, 0.6,.80).out()


// 1.3  Exercise- start making your own patterns.


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

osc(20,0.1,0.8).out()

noise(2).out()

// multiply the two signals together
osc(20,0.1, 0.8).mult(noise(2)).out()

//adding the two signals together
osc(20, 0.1, 0.8).add(noise(2)).out()

//blend the two signals together
osc(20,0.1, 0.8).blend(noise(2)).out()

//calculate the difference between the two signals
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


voronoi(20)
.modulate(osc(40, 0.03))
.out()


// we can have up to four different "channels" of visual patterns..

// specify which channel to send to
osc(2,0.4).out(o0)

noise(2,0.4).out(o1)

// why can't we see the noise function here??
// we need to use the render function to decide which channel to show..

// show the osc
render(o0)

//show the
render(o1)


//we can use these to modulate each other..

osc(20).modulate(o1).out()


// Exercise - use modulations and operators to update your code or create something new..




// PART 3 - FFT PROCESSES//

// 3.1 FFTS in Hydra
a.show()

a.hide()

shape(3, () => a.fft[0]).out()

// The number in brackets [0] corresponds to which frequency band to use. 0 corresponds to low frequency and higher numbers
// correspond to higher frequency bands.

shape(5, () => 0.5 + a.fft[0])
  .invert( ()=> 0.5 + a.fft[2])
  .out()


//Start adding functions..
osc(3).scale(()=> a.fft[0]*4 +1)
.kaleid(4)
.blend(o0).out()


//3.2 Exercise .. Create your own fft visuals


// MISC - FUN STUFF //

//using camera as an input..

s1.initCam(0)

src(s1).out()


// using the screen as an input

s2.initScreen(0)

src(s2).modulate(osc(20)).out()

solid().out()
