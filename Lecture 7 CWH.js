//Lecture7 
let a = prompt("please enter the age")
console.log(typeof a);
a = Number.parseInt(a)
console.log(typeof a);


a >= 1 && a < 10 ? console.log("Hey Kiddo") : a > 10 && a < 20 ? alert("Adult") : "WHat?"

if (a < 10) {
    console.log(10);
} else if (a > 1) {
    alert("Else Runs")
}

console.log("Finish");


switch (a) {
    case (a > 5 && a < 10):
        console.log("Between 5 n 10");
        break;
    case (a > 10 && a < 20):
        console.log("Between 10 n 20");
        break;

    default:
        console.log("Default");


}