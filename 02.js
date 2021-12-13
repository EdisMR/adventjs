/* 
Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece.
*/



const carta = 'bici coche balón _playstation bici coche peluche'

function listGifts(carta){
	/* Variable de resultado
	y un array temporal que guarda los items sin espacios y todo en minuscula */
	let result={}
	let temp=carta.toLowerCase().split(" ")

	/* en el arrat Temp eliminamos los que tienen un "_" al inicio */
	temp=temp.filter(item=>{
		if(item.indexOf("_")!=0){
			return item
		}
	})

	/* Contar las veces que aparece cada uno y generar el objeto con los regalos contados */
	let counter
	for(let NN in temp){/* Recorremos el ararray para generar el objeto */
		counter=0 /* En cada iteracion se reinica el contador */
		
		for(let y in temp){
			/* Recorremos para contar la cantidad de veces que aparece el objeto */
			if(temp[y]==temp[NN]){
				counter++
			}
		}
		
		result[temp[NN]]=counter
	}

	return result
}

const regalos = listGifts(carta)
console.log(regalos)
/*
{
	bici: 2,
	coche: 2,
	balón: 1,
	peluche: 1
}
*/