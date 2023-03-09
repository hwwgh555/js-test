const name = 'hww'
const gender = true
function myTagFunc(strings) {
	console.log( strings  )
	// ['hi, ', '', ' is a ', '']
}


const result = myTagFunc`hi, ${name} is a ${gender}`




