const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

//A partir desta, execute os passos abaixo:

//a) Remoção do excesso de espaços no final da corda;

console.log(minhaString.trim())

//b) exiba, em um console.log() a quantidade de caracteres da 
//string, antes e depois da remoção dos espaços;

console.log(minhaString.length)
console.log(minhaString.trim().length)

//c) Substitua os traços ________por “sticioso”.
const novaminhaString = minhaString.replace("____", "sticioso")
console.log(minhaString.replace("____", "esticioso"))