/* 
Para ayudar a esto, vamos a crear una función
que pasándole una instancia de Date nos diga
el número de días que faltan para el 25 de diciembre.
 */

function daysToXmas(date){

	let christmas=new Date("2021/12/25").getTime()

	return Math.ceil((christmas-date)/(24*60*60*1000))

}

daysToXmas(
	/* una fecha antes del 25 */
	new Date("December 27, 2021 03:24:00")
)





/* 


const date1 = new Date('Dec 1, 2021')
daysToXmas(date1) // 24

const date2 = new Date('Dec 24, 2021 00:00:01')
daysToXmas(date2) // 1

const date3 = new Date('Dec 24, 2021 23:59:59')
daysToXmas(date3) // 1

const date4 = new Date("December 20, 2021 03:24:00")
daysToXmas(date4) // 5


El resultado tiene que ser un número entero y, como ves, aunque falte un segundo hasta el siguiente día, se entiende que todavía falta un día.
¡Pero ojo! También hay que indicar si la fecha es del mismo día (devolveríamos 0) o si es una fecha futura (devolveríamos el número de días en negativo -):

const date = new Date('Dec 25, 2021')
daysToXmas(date) // 0

const date1 = new Date('Dec 26, 2021')
daysToXmas(date1) // -1

const date2 = new Date('Dec 31, 2021')
daysToXmas(date2) // -6

const date3 = new Date('Jan 1, 2022 00:00:01')
daysToXmas(date3) // -7

const date4 = new Date('Jan 1, 2022 23:59:59')
daysToXmas(date4) // -7



*/