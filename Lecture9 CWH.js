//Loops In JavaScripts Non


//For in Loop

const obj = {
    Name: "Hassan",
    Class: 1,
    Id: true
}

for (let i in obj) {
    console.log(i, obj[i]);
}

obj['City'] = "Lahore"
obj.bir = true

console.log(obj);

let arr = [1, "Hassan", true]

for (let i in arr) {
    console.log(i);
}