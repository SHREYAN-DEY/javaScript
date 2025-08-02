function greet(name) {
    console.log("Hey " + name + " !! Good morning !!");
}

greet("Shreyan")

function sum(a, b, c = 3) {
    console.log("a = ", a, " b = ", b, " c = ", c);
    return a + b + c;
}

let result1 = sum(3,5)
console.log("sum = ",result1);
console.log("--------------------------------------");
let result2 = sum(5)
console.log("sum = ",result2); // it it forbided -> 5  + undefined = NaN





// arrow function -----

const func = (x) =>{
    console.log("I am an arrow function",x);
}

func(10)
func(11)
func(12)