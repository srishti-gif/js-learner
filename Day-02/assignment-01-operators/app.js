//even odd
const num = 8;
if(num%2==0) console.log("even");
else console.log("odd");

//elibility..
const age = 16;
if(age>=18) console.log("eligible to vote")
else console.log("!under-age")

//ctc calculation..
let salary = 15000;
let ctc = (salary*12)+(salary*12+0.2);
console.log("ctc is" ,ctc);


//traffic light..
let light_color = "green";
if(light_color==="red") console.log("stop");
else if(light_color==="yellow") console.log("ready to go");
else console.log("go!!")

// electricity bill
let unit = 1;
let cost_of_one_unit = 150;
let one_day_cost = unit*cost_of_one_unit;
let annual = one_day_cost*365;
let total_bill = annual- (annual*0.2);
console.log(total_bill);

//leap year..
let year = 2025;
if(year%4==0) console.log("Leap year");
else console.log("not a leap year");

//max of three..
let p = 10;
let q = 88;
let r = 90;
if(p>r&&p>q) console.log("p is the larger number");
else if(r>p&&r>q) console.log("r is the larger number");
else console.log("q is the larger");

//bitwise operator
let count = 5;
count = count << 1;
console.log(count);







