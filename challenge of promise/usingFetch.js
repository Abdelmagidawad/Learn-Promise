// Link of Challenge : https://elzero.org/javascript-bootcamp-assignments-lesson-from-179-to-188/

// Solution Challenge Using Fetch API

import { builtStructure } from "./module.js";

const fetchData = function (APiLink) {
  fetch(APiLink)
    .then((response) => {
      if (!response.ok) {
        throw new Error("No data found");
      }
      return response.json();
    })
    .then((data) => {
      let conArticales = document.querySelector(".con-articles");
      data.slice(0, 5).forEach((obj) => {
        builtStructure(obj, conArticales);
      });
    })
    .catch((error) => {
      console.log(`Rejected: ${error}`);
    });
};

fetchData("./articales.json");
