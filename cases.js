/**
 * This file prints out the number of cases for each set.
 */

const inDir = "algSets";

const fs = require("fs");
const path = require("path");

const files = fs.readdirSync(inDir);

let cases = {};

for (const file of files) {
    const fileContents = fs.readFileSync(path.join(inDir, file));
    const json = JSON.parse(fileContents);
    cases[file] = json.length;
}

console.log(cases);