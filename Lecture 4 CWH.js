//Lecture 4
// Primitive Data Types: 7 NNBBSSU
// NOn Primitive Data Types: Object, Arrays

let a = 12
let b = null
let c = "Hassan"
let d = Symbol("Hassan Symbol")
let e = BigInt(564226)
let f = true
let g = undefined

console.log(a, b, c, d, e, f, g);

let obj = {
    key1: "Hassan",
    key2: "Hussain",
    Key3: "Harrys"
}

for (let a in obj) {
    console.log("Key:", a, ": Value:", obj[a]);
}

obj.key1 = "Amir"

for (let a in obj) {
    console.log("Key:", a, ": Value:", obj[a]);
}