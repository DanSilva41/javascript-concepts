// for, for in, while, do while

// while(boolean) { instrucao }
var x = 0;
while(x <= 10) {
	console.log("X é igual a "+ x);
	x++;
}

console.log();
// do { instrucao } whilte(boolean);
do {
	console.log("X é igual a "+ x);
	x++;
} while(x <= 15);	

console.log();
//for(definicao; condicao; iteracao) { instrucao }
for(var y = 10; y >=0; y--) {
	console.log("Y é igual a "+ y);
}

console.log();
//for(var <apelido> in <objeto>){ instrucao }
var objeto = {
	nome: 'John',
	sobrenome: 'Snow'
}

for(var prop in objeto) {
	console.log(objeto[prop]);
}