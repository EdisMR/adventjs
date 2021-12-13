/* 
Considera una lista/array de ovejas.
Cada oveja tiene un nombre y un color.
Haz una función que devuelva una lista con todas las ovejas
que sean de color rojo y que además su nombre contenga tanto
las letras n Y a, sin importar el orden, las mayúsculas o espacios.
*/

const ovejas = [
	{ name: 'Noa', color: 'azul' },
	{ name: 'Euge', color: 'rojo' },
	{ name: 'Navidad', color: 'rojo' },
	{ name: 'Ki Na Ma', color: 'rojo'},
	{ name: 'AAAAAaaaaa', color: 'rojo' },
	{ name: 'Nnnnnnnn', color: 'rojo'}
]

function contarOvejas(ovejas){
	let result=[]
	let name
	
	for(let x in ovejas){
		name=ovejas[x].name.toLowerCase()
		if(
			ovejas[x].color=="rojo" &&
			name.includes("a") &&
			name.includes("n")
		){
			result.push(ovejas[x])
		}
	}
	return result
}

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]