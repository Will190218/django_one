 function loadpenalti() {
    const xhttp = new XMLHttpRequest();
     xhttp.onload = function() {
         document.querySelector("#main").innerHTML =
             this.responseText;
     }
     xhttp.open("GET", "penalti.html");
    xhttp.send();
 }

// function loadpenalti() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function() {
//         document.querySelector("#main").innerHTML = this.responseText;
//     }
//     xhttp.open("GET", "/penalti/");  // Ajuste o caminho para corresponder a uma rota válida
//     xhttp.send();
// }


function loadcalculator() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.querySelector("#main").innerHTML =
            this.responseText;
    }
    xhttp.open("GET", "calculator.html");
    xhttp.send();
}

function returnhome() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.querySelector("#projeto_penaltis[").innerHTML =
            this.responseText;
    }
    xhttp.open("GET", "main_portfolio.html");
    xhttp.send();
}