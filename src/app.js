import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = [`mi perro`, `el vecino`, `mbappe`, `el cura`];
  let action = [`se ha comido`, `ha roto`, `ha olvidado`, `ha manchado`];
  let what = [`los deberes`, `la tv`, `los platos`, `la ropa`];
  let when = [`mientras dormía`, `al volver a casa`, `de madrugada`, `de vacaciones`];

  let quienes = who[Math.floor(Math.random() * who.length)];
  let accion = action[Math.floor(Math.random() * action.length)];
  let que = what[Math.floor(Math.random() * what.length)];
  let cuando = when[Math.floor(Math.random() * when.length)];

  let excusa = quienes + " " + accion + " " + que + " " + cuando


   document.querySelector("#excusa").innerHTML = excusa

  console.log("Hello Rigo from the console!");
};
