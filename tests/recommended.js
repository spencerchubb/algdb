// Test to make sure that the 'recommended' alg sets actually exist.

const inDir = "../algSets";

const fs = require("fs");
const path = require("path");

const files = fs.readdirSync(inDir);

const algSetNames = files.map(file => file.replace(".json", ""));

for (const file of files) {
    const fileContents = fs.readFileSync(path.join(inDir, file));
    const json = JSON.parse(fileContents);

    json.recommended.forEach(recommended => {
        if (!algSetNames.includes(recommended)) {
            throw new Error(`Alg set ${recommended} does not exist`);
        }
    });
}

console.log("All good!");