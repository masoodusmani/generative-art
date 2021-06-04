# Generative art demos with p5js

A few examples of generative art created during a hackday on 2021-06-03 to 04. To run any demo locally, clone the git repo, and open an `index.html` file in the browser :).

- The demos using Perlin noise are based on the [Coding Train perlin noise tutorial](https://thecodingtrain.com/learning/noise/0.2-inroduction.html).
  ![](assets/perlin%20noise%202d%20flow%20particle.png)

- Lines facing mouse is based on [Generative design's sketch](http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_1_1_04).
  ![](assets/lines%20facing%20mouse.png)

- Periodic demos are based on [Etienne Jacob's tutorials](https://bleuje.github.io/tutorials/)
  ![](assets/periodic%20noise%20displacement.png)

# Contents of the p5 folder

- p5.js file
- p5.min.js file
- addons folder
  - p5.sound.js
  - p5.sound.min.js
- empty-example folder
  - index.html
  - p5.js
  - p5.sound.js
  - sketch.js

## p5.js

This file stores the complete p5.js library. It is easy to read by humans, so feel free to open it and explore its contents. It also has a friendly error system, which helps new programmers with common user errors.

## p5.min.js

This file is a minified version of the p5.js file. It is a lighter version, with the same functionalities, but smaller file size. This minified version is harder to read for humans, and does not include the friendly error system.

## addons folder

The addons folder includes additional p5.js related libraries, in both original versions and minified versions.

### p5.sound.js, p5.sound.min.js

p5.sound extends p5.js with Web Audio functionality including audio input, playback, analysis, and synthesis.

## empty-example folder

This is an empty example of a website. The folder includes the file for the website, index.html, the p5.js library, other related p5.js libraries, and a template starting point for your p5.js sketch, called sketch.js.

### index.html

index.html is a template for an HTML file. This index.html first imports the libraries included in the folder (p5.js, p5.sound.js) then loads and executes the file sketch.js which is where you can write your own code.

### sketch.js

The sketch.js is a template for the p5.js sketch, with the functions setup() and draw() that you can complete.

## README.txt

This README file formatted with Markdown :)

# What's next?

If you need more information to help get you started, please refer to our website:  
https://p5js.org/get-started/ and https://p5js.org/learn/

An online reference to the p5.js library is available here:  
https://p5js.org/reference/

In order to run your website (including the empty-example), you need to enable a local server, please see this tutorial in our wiki:  
https://github.com/processing/p5.js/wiki/Local-server

p5.js is a community and p5.js is built by contributions. If you want to learn more about us, visit:  
https://p5js.org/community/

# License

The p5.js library is free software; you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation, version 2.1.
