let a = "Shreyan";

console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);  // Undefined

console.log(a.length);

let frnd = "JJ";

console.log("My name is " + a + " and my friend's name is " + frnd);

// template literals
console.log(`My name is ${a} and my friend's name is ${frnd}`);

// make the string uppercase and lowercase
console.log(a.toUpperCase());
console.log(a.toLowerCase());

//string slicing
console.log(a.slice(1,5)); // 1-4 characters will be printed 
console.log(a.slice(1));

// replace part of the string
console.log(a.replace("Sh",77)); // if "Sh" is occured twice only replaces the first one 

// concatinate
console.log(a.concat(frnd));
console.log(a.concat(frnd,"kk"));

// strings are immutable 
console.log(a);
