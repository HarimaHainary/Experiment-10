document.getElementById("fetchBtn").addEventListener("click", fetchPosts);

function fetchPosts() {
  const postsContainer = document.getElementById("postsContainer");
  postsContainer.innerHTML = "<p>Loading data...</p>";

  fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then(response => response.json())
    .then(data => {
      postsContainer.innerHTML = ""; // clear loading text
      data.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <small><b>Post ID:</b> ${post.id}</small>
        `;
        postsContainer.appendChild(postElement);
      });
    })
    .catch(error => {
      postsContainer.innerHTML = "<p style='color:red;'>Error fetching data!</p>";
      console.error("Fetch Error:", error);
    });
}