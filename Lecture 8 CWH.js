// Chapter 2 Practice Set ,Lecture 8

//Question1

let age = prompt("Enter the age of person")
age = Number.parseInt(age)

switch (age) {
    case (age > 10 && age < 20):
        alert("Age is btwn 10 and 20")
        break;

    default:
        alert("DEafault Statement")
}

let n = prompt("Enter the number")
n = Number.parseInt(num)

switch (true) {

    case (num % 3 == 0 && num % 2 == 0):
        alert(`${num} is divisible by 2 and 3`)
        break;

    default:
        alert("Default Case")
        break;

}

console.log(age > 18 ? "You are Eligible" : "You Cannot");