var nVolume = 0;
var nDiameter = 7;
var nHeight = 10;

var nRadius = nDiameter/2;

nVolume = 3.14*((nRadius * nRadius)*nHeight);

console.log(`A cylinder with a diameter of ${nDiameter} meters and a height of ${nHeight} meters yields a volume of ${nVolume} meters cubed`);