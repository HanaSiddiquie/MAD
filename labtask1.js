// Lab Task 1 

const add = (x, y) => 
    (x === undefined || y === undefined) ? "Error: Missing input!" : x + y;

const subtract = (x = 0, y = 0) => x - y;

const multiply = (...nums) => nums.reduce((prod, n) => prod * n, 1);

function divide() {
    if (arguments.length < 2) return "Error: Need at least 2 values";
    let ans = arguments[0];
    for (let i = 1; i < arguments.length; i++) ans /= arguments[i];
    return ans;
}

// Test
console.log("Add:", add(8, 4));
console.log("Subtract:", subtract(10));        
console.log("Multiply:", multiply(2, 3, 5));    
console.log("Divide:", divide(120, 2, 3));      


//lab Task 2

function SolveThis(obj) {
    let out = {};

    for (let op in obj) {
        let vals = obj[op];

        switch (op) {
            case "sum":
                out[op] = vals.reduce((a, b) => a + b, 0);
                break;

            case "max":
                out[op] = Math.max(...vals);
                break;

            case "min":
                out[op] = Math.min(...vals);
                break;

            case "abs":
                out[op] = vals.map(n => Math.abs(n));
                break;

            case "round":
                out[op] = vals.map(n => Math.round(n));
                break;

            case "ceil":
                out[op] = vals.map(n => Math.ceil(n));
                break;

            case "floor":
                out[op] = vals.map(n => Math.floor(n));
                break;

            case "random":
                out[op] = Math.random().toFixed(3); 
                break;

            default:
                out[op] = "⚠ Unsupported operation";
        }
    }
    return out;
}

// Test
console.log(SolveThis({
    sum: [2, 5, 3],
    max: [1, 9, 6, 4],
    min: [7, 3, 8, 2],
    abs: [-4, 6, -9],
    round: [2.4, 7.8],
    ceil: [2.2, 4.6],
    floor: [5.9, 7.1],
    random: []
}));