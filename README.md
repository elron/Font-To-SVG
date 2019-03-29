# Font To SVG

## Easily convert font string to SVG file!

FontKit has a way to make SVG from a specific letter, but not for a full string.

Well, now you can generate SVG files from a string, with a custom font!

### Notes:

 - This makes a seperate path for each letter.
 - This takes care of these opentype features: liga
 - *Warnings:* I did not check if it kerns currectly.


## How to use?

1. Install FontKit dependencie: ``` npm install fontkit ```

2. Make sure you have node.js installed

3. Edit `fontToSVG.js` to change your font & output settings.

4. Run this in the terminal: ``` node fontToSVG ``` (and edit the output settings if necessary)

5. Watch the magic happen - a new SVG file has been created that contains your text using your specified font! 


## Thanks!

- Based on [Fontkit](https://github.com/foliojs/fontkit). Thanks for creating awesomeness!
- Based on [AlexandraK](https://github.com/AlexandraK)'s [hint of an answer](https://github.com/foliojs/fontkit/issues/148).
- [1001fonts](1001fonts.com) Thanks for the free font to demonstrate.