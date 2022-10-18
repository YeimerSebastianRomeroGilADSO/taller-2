addEventListener("DOMContentLoaded", ()=>{
    let x1 = Number(prompt(" ingrese el valor de x1 "))
    let x2 = Number(prompt(" ingrese el valor de x2 "))
    let y1 = Number(prompt(" ingrese el valor de y1 "))
    let y2 = Number(prompt(" ingrese el valor de y2 "))
    x = Math.pow ( x2-x1,2)
    y = Math.pow( y2-y1, 2)
    r = Math.sqrt ( x+y)
    let  resta = (r<0)

               ? "¡¡ la solucion es indefinidad !!"
               : ` la distacia es ${r}`
    console.log(` el valor de la distancia es : ${r} `)
})
