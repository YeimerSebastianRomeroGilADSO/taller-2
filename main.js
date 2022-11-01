addEventListener("DOMContentLoaded", ()=>{
    let m2 = Number(prompt("Cantidad de m²"))
    let valor = Number(prompt("Precio del m²?"))
    total = m2 * valor
    document.body.insertAdjacentHTML("beforeend", `<div class="estilo">El valor de su pintura es ${total}$</div> `);
    let nombre = prompt("Ingrese el nombre del personal: ")
    let apellido = prompt("Ingrese apellido del personal")
    let año = Number(prompt("Ingrese el año de nacimiento: "))
    edad = 2022 - año
    console.log(` Nombre: ${nombre} ${apellido} <br> Edad: ${edad} `)
})
