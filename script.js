const h1 = document.querySelector("h1")
const input1 = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const btn = document.querySelector("#btnCalcular")
const result = document.querySelector("#result")
const form = document.querySelector("#form")


// btn.addEventListener("click", btnOnclick) /*la funcion no lleva parentesis por que solo manda a llamar la funcion que se va ejecutar*/

// function btnOnclick () {
//     const suma = input1.value + input2.value;
//     result.innerText = `el resultado es ${suma}`
    
// }

form.addEventListener("submit", sumarInputs)

function sumarInputs (e) {
    e.preventDefault()
    const suma = input1.value + input2.value;
    result.innerText = `el resultado es ${suma}`

}




