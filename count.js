/**
 * This file prints out the following statistics:
 * - # of alg sets
 * - # of cases
 * - # of algs
 */

const inDir = "algSets";

const fs = require("fs");
const path = require("path");

const files = fs.readdirSync(inDir);

let cases = 0;
let algs = 0;

for (const file of files) {
    const fileContents = fs.readFileSync(path.join(inDir, file));
    const json = JSON.parse(fileContents);
    cases += json.length;
    json.forEach(algCase => {
        algs += algCase.algs.length;
    })
}

// Put 2 spaces so it makes a new line in markdown
console.log(`- Alg sets: ${files.length}`);
console.log(`- Cases: ${cases}`);
console.log(`- Algs: ${algs}`);