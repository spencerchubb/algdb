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

let numCases = 0;
let numAlgs = 0;

for (const file of files) {
    const fileContents = fs.readFileSync(path.join(inDir, file));
    const json = JSON.parse(fileContents);

    numCases += json.cases.length;

    json.cases.forEach(case_ => {
        if (case_.algs) {
            numAlgs += case_.algs.length;
        }
        if (case_.variants) {
            case_.variants.forEach(variant => {
                numAlgs += variant.algs.length;
            });
        }
    });
}

// Put 2 spaces so it makes a new line in markdown
console.log(`- Alg sets: ${files.length}`);
console.log(`- Cases: ${numCases}`);
console.log(`- Algs: ${numAlgs}`);