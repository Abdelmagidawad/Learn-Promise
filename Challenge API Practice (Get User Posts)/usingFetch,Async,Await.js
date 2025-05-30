// Challenge API Practice to User Posts App  using Fetch ,Async,Await

async function getPosts(userId) {
  let secPosts = document.querySelector(".posts-list");

  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    if (!response.ok) {
      throw "No User Posts Found";
    }

    let posts = await response.json();
    secPosts.innerHTML = " ";
    posts.slice(0, 20).forEach((post) => {
      secPosts.innerHTML += `
          <div class="post">
              <h3>${post.title}</h3>
              <p>${post.body}</p>
          </div>`;
    });
  } catch (error) {
    secPosts.innerHTML = `
         <div class="no-data">
            <p class="error-msg">${error}</p>
          </div>`;
  }
}

async function getUsers() {
  let secUsers = document.querySelector(".users-list");

  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw "No Users Found";
    }
    let users = await response.json();
    secUsers.innerHTML = " ";
    users.slice(0, 20).forEach((user) => {
      secUsers.innerHTML += `
          <div class="user" userId="${user.id}" userName="${user.name}">
              <h3>${user.name}</h3>
              <p class="mail">${user.email}</p>
          </div>`;
    });
    // **********
    let allUsers = document.querySelectorAll(".user");
    postsUser(allUsers);
  } catch (error) {
    secUsers.innerHTML = `
           <div class="no-users">
            <p class="error-msg">${error}</p>
           </div>`;
  }
}

getUsers();

function postsUser(users) {
  users.forEach((user) => {
    let id = user.getAttribute("userId");
    let name = user.getAttribute("userName");

    user.addEventListener("click", () => {
      getPosts(id);
      //
      let coinName = document.querySelector(".sec-posts h2");
      coinName.innerHTML = name;
      users.forEach((user) => {
        user.classList.remove("selected");
      });
      user.classList.add("selected");
      //
    });
  });
}
