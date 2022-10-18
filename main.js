addEventListener("DOMContentLoaded", ()=>{
    let altu = Number(prompt(" ingrese la altura "))
    let radio = Number ( prompt(" ingrese el radio "))
    let caudal = Number(prompt(" ingrese el caudal "))
    vl = Math.PI*(radio**2) * altu
    j = vl / caudal
    tiempo = j / 60
document.write(`EL TIEMPO EN LLENAR ES: ${tiempo}  <br>`)




})
