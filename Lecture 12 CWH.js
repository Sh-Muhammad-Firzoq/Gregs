//PRACtice set Questions

//1.

let obj = {
    "Hassan": 45,
    hussain: 50,
    "Harrys": 45
}


for (let i = 0; i < Object.keys(obj).length; i++) {
    console.log(Object.keys(obj)[i], obj[Object.keys(obj)[i]]);
    console.log(Object.keys(obj)[i], ":", Object.values(obj)[i]);
}



for (a in obj) {
    console.log("Marks of", a, "is", obj[a]);

}

obj["Amir"] = 100;
obj.sas = 45
console.log(obj);


let a

do {

    a = prompt("Enter a number")
    a = Number.parseInt(a)


} while (a != 0)