//pyramind
for (let i = 1; i <= 5; i++) {
  let ans = ``;

  for (let j = 1; j <= i; j++) {
    ans += "* ";
  }

  console.log(ans);
}

// table of 3
let num = 3;

for (let i = 1; i <= 10; i++) {
  console.log(num, "x", i, "=", num * i);
}

//even odd
for (let i = 1; i <= 500; i++) {
  if (i % 2 == 0) console.log("even");
  else console.log("odd");
}

//skipping multiples of 3
for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0) continue;
  console.log(i);
}

//reverse a number..
let digits = 6789;
let reverse_num = "";

while (digits > 0) {
  let rem = digits % 10;

  reverse_num += rem;
  digits = Math.floor(digits / 10);
}

console.log(reverse_num);
