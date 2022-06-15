/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var dominio = [".com", ".cl", ".es", ".net", ".org", ".alo", "des"];
  for (let Rdpr = 0; Rdpr < pronoun.length; Rdpr++) {
    for (let Rdad = 0; Rdad < adj.length; Rdad++) {
      for (let Rdnoun = 0; Rdnoun < noun.length; Rdnoun++) {
        for (let Rddom = 0; Rddom < dominio.length; Rddom++) {
          console.log(
            pronoun[Rdpr] + adj[Rdad] + noun[Rdnoun] + " " + dominio[Rddom]
          );
        }
      }
    }
  }
};
