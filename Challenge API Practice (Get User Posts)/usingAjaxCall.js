// Challenge API Practice to Get User Posts App using Ajax Call

function getPosts(userId) {
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  request.send();

  request.onload = function () {
    let secPosts = document.querySelector(".posts-list");
    try {
      if (this.status >= 200 && this.status < 300) {
        let data = JSON.parse(this.responseText);
        secPosts.innerHTML = " ";
        data.slice(0, 20).forEach((post) => {
          secPosts.innerHTML += `
          <div class="post">
              <h3>${post.title}</h3>
              <p>${post.body}</p>
          </div>`;
        });
      } else {
        throw "No User Posts Found";
      }
    } catch (error) {
      secPosts.innerHTML = `
         <div class="no-data">
            <p class="error-msg">${error}</p>
          </div>`;
    }
  };
}

function getUsers() {
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/users");
  request.send();

  request.onload = function () {
    let secUsers = document.querySelector(".users-list");
    try {
      if (this.status >= 200 && this.status < 300) {
        let data = JSON.parse(this.responseText);
        secUsers.innerHTML = " ";
        data.slice(0, 20).forEach((user) => {
          secUsers.innerHTML += `
          <div class="user" userId="${user.id}" userName="${user.name}">
              <h3>${user.name}</h3>
              <p class="mail">${user.email}</p>
          </div>`;
        });
        // **********
        let allUsers = document.querySelectorAll(".user");
        postsUser(allUsers);
      } else {
        throw "No Users Found";
      }
    } catch (error) {
      secUsers.innerHTML = `
           <div class="no-users">
            <p class="error-msg">${error}</p>
          </div>`;
    }
  };
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
