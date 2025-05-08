var display = document.querySelector("#display");
var fahr = document.querySelector("#fahr");
var kelvin = document.querySelector("#kelvin");


function digitar(digito){

    if (display.innerHTML.length < 10) {
        if(digito == "-"){
            if(display.innerHTML.length == 0){display.innerHTML += digito;}
        }
        else if(digito == "."){
            if(!display.innerHTML.includes(".")){display.innerHTML += digito;}
        }
        else{display.innerHTML += digito;}

        calculo();
    }
}

function limpar(){
    display.innerHTML = "";
    calculo();
}

function calculo(){
    var num = parseFloat(display.innerHTML);

    if(!isNaN(num)){
        fahr.innerHTML = `${num} C = ${(num * 1.8 + 32).toFixed(2)} F`;
        kelvin.innerHTML = `${num} C = ${(num + 273.15).toFixed(2)} K`;
    }
    else{
        fahr.innerHTML = "";
        kelvin.innerHTML = "";
    }
}
