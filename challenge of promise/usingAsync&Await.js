// Link of Challenge : https://elzero.org/javascript-bootcamp-assignments-lesson-from-179-to-188/

// Solution Challenge Using Async & Await

import { builtStructure } from "./module.js";

async function getData(APiLink) {
  try {
    let response = await fetch(APiLink);
    if (!response.ok) {
      throw new Error("No data found");
    }

    let data = await response.json();

    let conArticales = document.querySelector(".con-articles");
    data.slice(0, 5).forEach((obj) => {
      builtStructure(obj, conArticales);
    });
  } catch (error) {
    console.log(`Rejected : ${error}`);
  }
}

getData("./articales.json");
