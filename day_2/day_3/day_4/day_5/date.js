
let newdate = new Date();
console.log(newdate.toString());

let created = new Date(2004,3,12);
console.log(created.toLocaleDateString());


let date2 = new Date("12-=06-2024")
console.log(date2.toLocaleDateString());


let date = Date.now()
console.log(date);

console.log(Math.floor(Date.now()/1000));



