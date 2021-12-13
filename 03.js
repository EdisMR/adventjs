/* 
El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...
*/

function isValid(letter){
	let result
	let parentesis1Pos=letter.indexOf("(")+1
	let parentesis2Pos=letter.indexOf(")")
	let content

	if(parentesis1Pos!=-1 && parentesis2Pos!=-1){
		content=letter.substring(parentesis1Pos,parentesis2Pos)

		if(
			content.includes("[") || content.includes("{") ||
			content.includes("(") || content.includes(")") ||
			content==undefined || content=="" || letter.includes("(())")
		){
			result=false
		}else{
			result=true
		}
	}else{
		result=false
	}

	return result
}



isValid("bici coche (balón) bici coche peluche")
isValid("(muñeca) consola bici")
typeof isValid("bici coche (balón bici coche")
isValid("(peluche {) bici")