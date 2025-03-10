"use strict"

let arrayNumero = [];

let resultDiv = document.getElementById("result").textContent

function validateInput(input){
    if(isNaN(input)){
        return console.log("not a number")
    }
    return console.log(input)
}

function checkNumber(){
    let numeroFizzBuzz = parseInt(document.getElementById.pa("number"))

    validateInput(numeroFizzBuzz)

    try {

        if (numeroFizzBuzz % 3 ==  0 && numeroFizzBuzz % 5 ==  0  ) {
            console.log("BuzzFizz")
        } else if (numeroFizzBuzz % 3 ==  0){
            console.log("Buzz")
        }else if(numeroFizzBuzz % 3 ==  0 ){
            console.log("Buzz")
        }else{
            console.log(numeroFizzBuzz)
        }
        
    } catch (error) {
        
    }

    arrayNumero.push(numeroFizzBuzz)
   
}
