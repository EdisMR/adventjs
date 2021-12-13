/* 
¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.
Creamos un triángulo de asteríscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

 */


function createXmasTree(height){
	let result=""
	let maxCantAsteriscos
	let cantAsteriscosPorLinea
	let cantRellenoLateral
	let caracteres={
		space:"_",
		aster:"*"
	}

	if(height>0 && height<=100){
		maxCantAsteriscos=(height*2)-1
		
		/* Construir el arbol */
		for(let x=1;x<=height;x++){
			/*
				cantAsteriscos =((numero de linea *2)-1) 
				cantRellenoLateral= (maxCantAsteriscos - cantAsteriscos)/2
			*/
			cantAsteriscosPorLinea =((x *2)-1) 
			cantRellenoLateral= (maxCantAsteriscos - cantAsteriscosPorLinea)/2
			
			for(let counter1=1;counter1<=cantRellenoLateral;counter1++){
				result+=caracteres.space
			}
			for(let counter2=1;counter2<=cantAsteriscosPorLinea;counter2++){
				result+=caracteres.aster
			}
			for(let counter1=1;counter1<=cantRellenoLateral;counter1++){
				result+=caracteres.space
			}
			result+="\n"

		}
		
		/* Tronco del arbol */
		for(let s=1;s<=2;s++){
			for(let counter1=1;counter1<=(maxCantAsteriscos-1)/2;counter1++){
			result+=caracteres.space
			}
			result+="#"
			for(let counter1=1;counter1<=(maxCantAsteriscos-1)/2;counter1++){
				result+=caracteres.space
			}
			if(s!=2){
				result+="\n"
			}
		}
	}

	return result
}

console.log(createXmasTree(15))