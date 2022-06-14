/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dominio = [".com", "cl", "es", "te"];
  document.querySelector("p").innerHTML =
    pronoun[0] + adj[0] + noun[0] + dominio[0];

  console.log("Hello Rigo from the console!");
};
