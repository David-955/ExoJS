let a = 2;
a = a - 1;
console.log("let a doit être à 1 : " + a);

a++;
console.log("let a doit être à 2 : " + a);

let b = 8;
b += 2;
console.log("let b doit être à 10 : " + b);

let c = a + b * b;
console.log("let c doit être à 102 : " + c);

let d = a * b + b;
console.log("let d doit être à 30 : " + d);

let e = a * (b + b);
console.log("let e doit être à 40 : " + e);

let f = (a * b) / a;
console.log("let f doit être à 10 : " + f);

let g = (b / a) * a;
console.log("let g doit être à 10 : " + g);