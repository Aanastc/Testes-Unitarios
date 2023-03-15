function contador (notas){
	var contador = 0;
	for(let i = 0; i < notas.length; i++){
		if(notas[i] >= 50){
			contador ++;
		}
	}
	return contador;
}

// console.log(contador(100));
module.exports = contador;
