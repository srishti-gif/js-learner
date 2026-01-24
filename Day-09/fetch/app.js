/*
1. Use fetch() to retrieve a list of users from 
https://jsonplaceholder.typicode.com/users 
and log the names to the console
*/

async function getData() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const response = await fetch(url);
  console.log(response);

  const data = await response.json();
  data.forEach((element) => {
    console.log(element.name);
  });
}

getData();

/*
2. Fetch all posts by userId=1 from 
https://jsonplaceholder.typicode.com/posts?userId=1 
and display the titles in the DOM

*/

async function getDataByIdOne() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const newParam = {
    userId: 1,
  };

  try {
    const queryString = new URLSearchParams(newParam).toString();
    console.log(queryString);
    const newUrl = `${url}?${queryString}`;
    console.log(newUrl);

    const respose = await fetch(url);
    const data = await respose.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getDataByIdOne();

/*
3. Send a POST request to 
https://jsonplaceholder.typicode.com/posts 
with a new post (title, body, userId). 
Show the response in console
*/

async function createPost(postData) {
  const url = "https://jsonplaceholder.typicode.com/posts";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.log("Error:", err);
  }
}

const newPost = {
  title: "new-post",
  body: "anything",
  userId: crypto.randomUUID(),
};

createPost(newPost);

/*
4. Update the post with ID = 1 by 
sending a PUT request with a new title and body. 
Use the same endpoint

*/

async function updatePost(updateData) {
  const url = "https://jsonplaceholder.typicode.com/posts/1";

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });

    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

const updateData = {
  userId: 1,
  title: "new-title",
  body: "new-body",
};

updatePost(updateData);

/*
7. Send a POST request to 
https://jsonplaceholder.typicode.com/posts with 
Content-Type: application/json 
in headers. Log the response

*/

const request = new Request("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "hello",
    body: "test post",
    userId: 1,
  }),
});

async function handleHeader() {
  try {
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

handleHeader();
