// 1- Callback Hell || Pyramid Of Doom

// This code using callback Hell

// Description of the Code
//setTimeout calls to sequentially display messages in the console with a 1-second delay between each one.
// The messages appear one after the other in a "callback chain",
// which is sometimes referred to as "callback hell" due to the nested structure.

setTimeout(() => {
  console.log("Show the Titel 1");
  setTimeout(() => {
    console.log("Show the Titel 2");
    setTimeout(() => {
      console.log("Show the Titel 3");
      setTimeout(() => {
        console.log("Show the Titel 4");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// Solve problem callback hell using promise

// 2- Promise
// Convert code using callback to Promise

new Promise((resolve, reject) => {
  //async code
  setTimeout(() => {
    console.log("Show the Titel 1");
    resolve();
  }, 1000);
})
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Show the Titel 2");
        resolve();
      }, 1000);
    });
  })
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Show the Titel 3");
        resolve();
      }, 1000);
    });
  })
  .then(() => {
    setTimeout(() => {
      console.log("Show the Titel 4");
    }, 1000);
  });

// Improve code using promise to async and await

//   3- Async and Await
// convert this code of using Promise to using Async & Await

async function showTitles() {
  await new Promise((resolve, reject) => {
    //async code
    setTimeout(() => {
      console.log("Show the Titel 1");
      resolve();
    }, 1000);
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Show the Titel 2");
      resolve();
    }, 1000);
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Show the Titel 3");
      resolve();
    }, 1000);
  });

  setTimeout(() => {
    console.log("Show the Titel 4");
  }, 1000);
}

showTitles();
