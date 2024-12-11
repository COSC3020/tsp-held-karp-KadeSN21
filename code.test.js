const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js') + '');

const testCases = [
    { dm: [[]], expected: 0 },  
    { dm: [[0]], expected: 0 },  
    { dm: [[0, 0, 0], [0, 0, 0], [0, 0, 0]], expected: 0 }, 
    { dm: [[0, 1, 2], [1, 0, 2], [2, 2, 0]], expected: 3 },  
    { dm: [[0, 3, 4, 2, 7], [3, 0, 4, 6, 3], [4, 4, 0, 5, 8], [2, 6, 5, 0, 6], [7, 3, 8, 6, 0]], expected: 14 } 
];

testCases.forEach(({ dm, expected }, index) => {
    const result = tsp_hk(dm);
    try {
        assert.strictEqual(result, expected);
        console.log(`Test case ${index + 1} passed.`);
    } catch (error) {
        console.error(`Test case ${index + 1} failed. Expected ${expected}, but got ${result}.`);
    }
});
