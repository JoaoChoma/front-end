// Criando um vetor com alguns elementos
let vetor = [1, 2, 3, 4, 5];

// Acessando elementos do vetor pelo índice
console.log(vetor[0]); // Saída: 1
console.log(vetor[2]); // Saída: 3

// Modificando um elemento do vetor
vetor[1] = 10;
console.log(vetor); // Saída: [1, 10, 3, 4, 5]

// Adicionando elementos ao vetor
vetor.push(6);
console.log(vetor); // Saída: [1, 10, 3, 4, 5, 6]

// Removendo elementos do vetor
vetor.pop();
console.log(vetor); // Saída: [1, 10, 3, 4, 5]

// Tamanho do vetor
console.log(vetor.length); // Saída: 5
