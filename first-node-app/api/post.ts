(async () => {
const url = "https://jsonplaceholder.typicode.com/posts";
const data = {
  title: "foo",
  body: "bar",
  userId: 1
};

try {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  
  if (response.ok) {
    const responseData = await response.json();
    console.log(responseData);
  } else {
    console.error("HTTP Error: " + response.status);
  }
} catch (error) {
  console.error("An error occurred:", error);
}
}
)();