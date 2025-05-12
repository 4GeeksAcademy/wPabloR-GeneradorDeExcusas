import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = [`mi perro`, `el vecino`, `mbappe`, `el cura`];
  let action = [`se ha comido`, `ha roto`, `ha olvidado`, `ha manchado`];
  let what = [`los deberes`, `la tv`, `los platos`, `la ropa`];
  let when = [`mientras dormía`, `al volver a casa`, `de madrugada`, `de vacaciones`];



  function select(arr){
    return arr[Math.floor(Math.random() * arr.length)];
  }

 
  let excusa = select(who) + " " + select(action) + " " + select(what) + " " + select(when) 

   document.querySelector("#excusa").innerHTML = excusa
 
   
};
