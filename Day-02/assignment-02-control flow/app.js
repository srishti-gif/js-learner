// valid amount check
let amt = 99;
if(amt%100==0) console.log("valid amount")
else console.log("invalid amount");

let num1 = 5;
let num2 = 10;


//calculator
let opt = '+';

switch(opt){
    case '+': 
        console.log(num1+num2);
        break;
    case '-':
        console.log(num1+num2);
        break;
    case '*':
        console.log(num1*num2);
        break;
    case '%':
        console.log(num2%num1);
        break;
    case '/':
        console.log(num1/num2);
        break;
}

let month =  3;

switch(month){
    case 1:
        console.log("aries");
        break;
    case 2:
        console.log("taurus");
        break;
    case 3:
        console.log("gemini");
        break;
    case 4:
        console.log("cancer");
        break;
    case 5:
        console.log("leo");
        break;
    case 6:
        console.log("virgo");
        break;
    case 7:
        console.log("libra");
        break;
    case 8:
        console.log("scorpio");
        break;
    case 9:
        console.log("sagittarius");
        break;

    case 10:
        console.log("capricon");
        break;
    case 11:
        console.log("aquarius");
        break;
    case 12:
        console.log("pisces");
        break;
}

let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}


let side1 = 2;
let side2 = 2;
let side3 = 5;
if(side1==side2&&side1==side3) console.log("equvilateral triangle");
else if(side1!=side2&&side1==side3) console.log("Isosceles triangle");
else console.log("scalene triangle");
