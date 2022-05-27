// For each of these values, what type will the TypeScript compiler infer?
let a = 100; // number
let b = "Coffee"; // string
let c = [true, false, false]; // boolean[]
let d = { age: number }; // age: number
let e = [3]; // number[]
let f; // any
let g = []; // any[]

// What are the compilation errors in each of the following code snippets?
let song: { title: string; releaseYear: number } = { title: "My song" };
// releaseYear missing while initializing the song object

let prices = [100, 200, 300];
prices[0] = "$100"; // cannot assign string value to number[]

function myFunc(a: number, b: number): number {} // function expected to return a number
