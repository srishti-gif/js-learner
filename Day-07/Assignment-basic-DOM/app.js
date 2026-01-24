const element = document.getElementById("title");
element.innerText = "Hello World";
console.log(element.innerText);

function changeColor() {
  const elements = document.getElementsByClassName("box");
  console.log(elements);

  const arr = Array.from(elements);
  console.log(arr);

  arr.forEach((e) => {
    e.style.backgroundColor = "blue";
  });
}

function printButton() {
  let element = document.getElementById("click-me");
  let item = element.innerText;
  console.log(`you click at ${item} button`);
}

function getText() {
  let element = document.getElementById("myInput");
  let input = element.value;
  console.log(input);
}

/*
1. Find the Most Frequent Word in a Paragraph
Consider the follwoing HTML:

<div id="text">This is a test. This test is only a test.</div>
Now, find and display the most frequently occurring word. Also put a count of occurance beside it.

Hints:

Use document.querySelector() or getElementById() to select the paragraph.
Convert the text into an array of words.
Use querySelector() to display the most frequent word along with the count inside another <div>.
*/

function countFreq() {
  let element = document.getElementById("text");
  console.log(element);

  let sentence = element.innerText;
  console.log(sentence);

  let sentenceToArray = sentence.split(" ");
  console.log(sentenceToArray);

  let obj = {};
  sentenceToArray.forEach((word) => {
    if (!obj[word]) {
      obj[word] = 1;
    } else {
      obj[word] = obj[word] + 1;
    }
  });

  console.log(obj);

  let maxFreq = Math.max(...Object.values(obj));
  console.log(maxFreq);
}

/*
2. Create a zebra pattern
Consider the following HTML:

<ul id="cars">
    <li>BMW</li>
    <li>Mahindra</li>
    <li>Audi</li>
    <li>Toyota</li>
    <li>Honda</li>
    <li>Hundai</li>
    <li>Tata</li>
    <li>Suzuki</li>
</ul>
Now put alternate colors and background colors to each of the list tags. for example,

If tne BMW is in white color text, the background should be in black color.
Then for the next car it will be reversed, the color is black and the background is white.
Then again the next one is white color and background black
So on.


*/

function printColors() {
  let elements = document.querySelectorAll("#cars li");
  console.log(elements);

  elements.forEach((element, i) => {
    if (i % 2 != 0) {
      element.style.backgroundColor = "green";
    }
  });
}

/*
Find and Replace Text Inside a Page
Write a script that finds all occurrences of a word inside a 
<p> tag and replaces them with another word dynamically.
*/

function ReplaceOccurence() {
  let elements = document.getElementById("text1");

  let sentence = elements.innerText;
  console.log(sentence);

  let sentenceToArray = sentence.split(" ");
  console.log(sentenceToArray);

  let obj = {};

  sentenceToArray.forEach((word) => {
    if (!obj[word]) {
      obj[word] = 1;
    } else {
      obj[word] = obj[word] + 1;
    }
  });

  let maxFreq = Math.max(...Object.values(obj));

  for (let word in obj) {
    if (obj[word] == maxFreq) {
      maxFreqWord = word;
      break;
    }
  }
  console.log(maxFreqWord);

  let updatedArray = sentenceToArray.map((word) => {
    if (word === maxFreqWord) {
      return "exam";
    }
    return word;
  });

  console.log(updatedArray);

  let newSentence = updatedArray.join(" ");
  console.log(newSentence);
}

/*
5. Extract and Count Unique Links from a Page
Count all the unique hyperlinks (<a>) in a page and display their count.

*/

function countUniqueLinks() {
  const links = document.getElementsByTagName("a");
  const unique = new Set();

  for (let i = 0; i < links.length; i++) {
    unique.add(links[i].href);
  }

  console.log(unique.size);
}

countUniqueLinks();

/*

getElementById() -> returns single Element

getElementsByClassName() -> returns HTMLCollection

getElementsByTagName() -> returns HTMLCollection

querySelector() -> returns first matching Element

querySelectorAll() -> returns NodeList


*/
