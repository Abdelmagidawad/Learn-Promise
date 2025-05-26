// Challenge API Practice to Get User Posts App  using Axios

async function getPosts(userId) {
  let secPosts = document.querySelector(".posts-list");

  try {
    let url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    let response = await axios.get(url);
    let posts = response.data;
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
            <p class="error-msg">${"No User Posts Found"}</p>
          </div>`;
  }
}

async function getUsers() {
  let secUsers = document.querySelector(".users-list");

  try {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    let users = response.data;

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
            <p class="error-msg">${"No Users Found"}</p>
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
