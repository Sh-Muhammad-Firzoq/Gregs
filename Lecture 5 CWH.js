//Lecture 5
//Practice Set

//Question 1.
var a = "Hassan" + 45
console.log(a + 45);


//Question 2.
console.log(typeof a);


//Question 3.
const obj = {
    "key1": 15,
    key2: "Hassan"
}
obj["key2"] = 15
obj.key1 = "Hassan"
console.log(obj);

//Question 4.
obj["key3"] = undefined
obj.key4 = null

console.log(obj);

//Question 5.
let dic = {
    Fight: "Dispute",
    Broke: "Loss",
    "Hassan": "Bro1",
    "Hussain": "Bro2",
    "Harrys": "Bro3"
}

console.log(dic["Fight"], dic.Broke);

dic = 45
console.log(dic);