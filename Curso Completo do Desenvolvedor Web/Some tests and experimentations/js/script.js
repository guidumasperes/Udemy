/*var resp = confirm("Deseja excluir?");

console.log(resp);
*/

function soma(a, b) {

	return a + b;
}

//console.log(soma(3, 4));

document.querySelector("#calcular").addEventListener("click", function (){
	let valorA = document.querySelector("#valorA").value;
	let valorB = document.querySelector("#valorB").value;

	alert(parseInt(valorA) + parseInt(valorB));
});