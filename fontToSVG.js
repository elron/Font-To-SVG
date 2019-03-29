
var fs = require('fs'); // to create/modify files via node
var fontkit = require('fontkit'); // to get the glyphs paths

// your font file
const fontSource = 'fonts/SCRIPTIN.ttf';

// your text goes here
const text = 'Your text goes here';



/***** change these numbers depending on your font settings: *****/

// move it verticaly
const y = 1200; 

// height of canvas
const height = 2200;

// if your canvas is too wide, then try a bigger number than 12. if its too narrow, lower the number or remove it. it depends on the font
const makeWidthSmallerBy = 16;


//////////////////////////////

let font = fontkit.openSync(fontSource),
    run = font.layout(text),
    aw = 0, // the total width of the canvas
    svg = run.glyphs.map((g, i) => {
        g = '<g transform="translate(' + aw + ',0)"><path d="' + g.path.toSVG() + '"/></g>';
        aw += run.positions[i].xAdvance; // increases the overall canvas width letter by letter.
        console.log(g); // for debugging. you can remove this
        return g;
    });

// now the svg variable stores your glyphs.
// its time to create an svg file that contains them:

var stream = fs.createWriteStream("fontToSvg.svg");
stream.once('open', function (fd) {
    stream.write('<svg xmlns="http://www.w3.org/2000/svg" width="' + aw / makeWidthSmallerBy + '" height="100" viewBox="0 0 ' + aw + ' ' + height + '"><g transform="translate(0,' + y + ') scale(1,-1)">' + svg.join('') + '</g></svg>');
    stream.end();
});
