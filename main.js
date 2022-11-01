addEventListener("DOMContentLoaded", ()=>{
    let nombre = prompt("Ingrese el nombre del personal: ")
    let apellido = prompt("Ingrese apellido del personal")
    let año = Number(prompt("Ingrese el año de nacimiento: "))
    edad = 2022 - año
    console.log(` Nombre: ${nombre} ${apellido} <br> Edad: ${edad} `)
})
