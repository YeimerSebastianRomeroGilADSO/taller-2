addEventListener("DOMContentLoaded", ()=>{
    let q = Number(prompt("Cual es el caudal aproximado en (litros/segundo)? ", 210))
    let h = Number(prompt("Cual es la altura del deposito? ", 100))
    let r = Number(prompt("Cual es el radio del deposito? ", 200))
    v = (Math.PI) * Math.pow(r, 2) * h
    t = v / q
    m = t / 60
    document.body.insertAdjacentHTML("beforeend", `<div class="estilo">El tiempo en llenar su deposito es ${t} <br> El tiempo que demoraria en llecarse es ${m} </div> `);
    let llaves = 11500 * 5
    let bomba=1168000
    let pernos=87000*3
    let vueltos=91000
    total=llaves+bomba+pernos+vueltos
    total1=llaves+bomba+pernos

console.log(`El total que pago por los productos:<b> ${total1}$</b><br>Entonces sabemos que traia: <b>${total}$`)  



})
