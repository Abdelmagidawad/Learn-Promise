// Link of Challenge : https://elzero.org/javascript-bootcamp-assignments-lesson-from-179-to-188/

// Solution Challenge Using Promise

import { builtStructure } from "./module.js";

const getData = (APiLink) => {
  return new Promise((res, rej) => {
    let request = new XMLHttpRequest();

    request.onload = function () {
      if (this.status === 200) {
        res(JSON.parse(this.responseText));
      } else {
        rej(Error("No data found"));
      }
    };
    request.open("GET", APiLink);
    request.send();
  });
};

getData("./articales.json")
  .then((response) => {
    let conArticales = document.querySelector(".con-articles");
    response.slice(0, 5).forEach((obj) => {
      builtStructure(obj, conArticales);
    });
  })
  .catch((error) => {
    console.log(`Rejected: ${error}`);
  });
