document.getElementById ('calculate-button').onclick = function() {
	//Coletar números dentro das caixas de input
	let elem1 = document.getElementById('elem-1');
	let elem2 = document.getElementById('elem-2');

	let val1 = parseInt(elem1.value);
	let val2 = parseInt(elem2.value);

	let choice = document.querySelector('input[name="operation"]:checked');
	let operation = choice.value;

	console.log(val1);
	console.log(val2);
	console.log(operation);

	let operationResult = getResult(val1, val2, operation);

	//Mostrar o resultado dentro do elemento dom id "result"
	let resultElement = document.getElementById('result');
	resultElement.innerHTML = operationResult;
}



	function getResult(val1, val2, operation) {
	if (operation === '+') {
		return val1 + val2;
	} else if (operation === '-') {
		return val1 - val2;
	} else if (operation === '*') {
		return val1 * val2;
	} else if (operation === '/') {
		return val1 / val2;
	} 
}




//if (operation === '+') {
//	resultElement.innerText = val1 + val2;
//}

//if (operation === '-') {
//	resultElement.innerText = val1 - val2;
//}




//document.getElementById ('calculate-button').onclick = function() {
//alert('Botão foi apertado');
//}