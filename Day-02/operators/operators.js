

//operators in js :
//operators in js are arithmetic , assignment,comaprison,relational,logical, bitwise,conditional


//operators - symbols +,-,*
//operands -  x+y a and y are the operands..
//expression -  x = 2*9/3

//Arithmetic operators 

let a = 10;
let b = 20;

let f_name = "srishti"
let l_name = "chandra";

console.log(f_name+l_name);

console.log(a+b);   //30
console.log(a-b);   //-10
console.log(a*b);   //200
console.log(a%b);    //10
console.log(a**b);   //100000000000000000000
console.log(b/a);   //2



//pre increment and post increment op.

count = 10; 
console.log(--count);  // 9
console.log(count++);  //9
console.log(count)// 10


//Assignment operators

let x = 10;
x+=1;   //11
x-=1;   //10
console.log(x);

//comparsion operators
//== is lossy type camparison operator it converts the right hand side operands to to the 
//same data type and then compare them and return true;
console.log('3'==3) //true
console.log(false==0); //true

//NaN  - Not a number

let obj1 = {'name':'script'}
let obj2 = {'name': 'script'}

console.log(obj1==obj2); //false reference check ho rha hai

//logical operator 
console.log(false&&false);  // false
console.log(true&&true);   // true
console.log(false&&true);  // false

console.log(false||false) //false
console.log(true||true)
console.log(false||true) //true

let a1 = null ?? 1;   // 1
let a2 = undefined ?? 2; //2
let a3 = false ?? "script"; // false
let a4  =  0?? "new";  // 0

//bitwise operators..
// &  = and  can be treated as multiplications
//| = or can be treated as +
// xor gives 0 for the same bit ..


const c = 15;  //1111
const  d = 9;  //1001
console.log(c&d); //1001
console.log(c|d); // 1111

//right shift operator >>
// 9>>2  means 9 right shift by 2 places 
// 1001 = 0010 = 2

//left shift operator 
//9<<2 means 9 left shift by 2 places
//1001 = 100100 = 36

//2^2 = 0  ->01 ^ 01 = 00 same bit = 0


















