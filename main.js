addEventListener("DOMContentLoaded", ()=>{
    let  tot = 0
    let des = 0
    let step = 0
    for (step = 0; step < 3; step ++){
        let p1 = Number( prompt( "cual fue el costo del producto ", 2300))
        c1 = p1-( p1*5/100)
        i1 = p1 - c1 
        tot = c1 + tot
        des = i1 +des 
    }
    for (step = 0; step < 2; step ++){
        let p1 = Number( prompt( "cual fue el costo del producto ", 2300))
        c1 = p1-( p1*2/100)
        i1 = p1 - c1 
        tot = c1 + tot
        des = i1 +des 
    }
 console.log(`el costo de sus productos con el descuento es ${tot}$, su descuento es de ${des},$`)
})
