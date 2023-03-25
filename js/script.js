/* const notas = [7, 5, 10]
const notas2 = [5, 8, 7]
const calcularPromedio = (notasAPromediar) => { // Cómo se define una función
    let acumulador = 0
    for(let i = 0; i < notasAPromediar.length; i = i + 1){
        acumulador = acumulador + notasAPromediar[i]
    }
    console.log("Su promedio es de: " + acumulador/notasAPromediar.length)
}
calcularPromedio(notas)
calcularPromedio(notas2) */


/* 
let consulta= prompt()

if(consulta==null){
    console.log("el usuario tocó cancelar")

}

else if(consulta == ""){
    console.log("tocó aceptar pero no escribió nada")

}

else if(!isNaN(consulta)/*comprobar si es un número*//*){
    console.log("es un número")


}

else{
    console.log("es una palabra")
}

*/

/* 
const ej6 = () =>{
    for(let i = 1; i <= 10; i = i + 1){
        if(i != 5){
            console.log(i)
           }
    }
}
console.log(ej6()) */
/* 
for(let i=1: i <= 10; i = i + 1){
    if(i % 2 == 0){
        console.log(i + " es par")
    }
}
 */

/*ejercicio 16: promedio de las alturas de 5 personas*/
/* let acumulador = 0
for(let i = 1; i <= 5; i = i + 1){
    acumulador = acumulador + Number (prompt("ingrese una altura"))

}

console.log("El resultado del promedio de las 5 alturas es: " + (acumulador/5)) */

/* ejercicio 26, para ver la película*/
/*
const puedeVerPelicula = (edad, tieneAutorizacion) => {
    return edad >= 15 || tieneAutorizacion 

}
puedeVerPelicula(12, false)
puedeVerPelicula(12, true)
puedeVerPelicula(16, false)
puedeVerPelicula(18, true)

let estaSoleado = true
let tengoPlata = true

//voy al parque si está soleado o tengo dinero

/* if(estaSoleado || tengoPlata){
    console.log("voy al parque")
} */

//voy al parque si está soleado y tengo dinero

/* if(estaSoleado && tengoPlata){
    console.log("voy al parque")
}
 */

/* let contador = 0
/* contador = contador + 1
contador = contador + 1
 */
/* contador++
contador++ */

/* let contador = 20
contador += 20 */

const nombres = ["Maria", "Pepe", "Lopez"]
/* 
for(let 1 = 0; i < nombres.length; i++){
    console.log(nombres[i])
} */
/* for off es para recorrer arrays */
for(let nombre of nombres){
    console.log(nombre)
}