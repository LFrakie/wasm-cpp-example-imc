async function runCalc(){
// Cargar el archivo WASM
const wasmModule = await WebAssembly.instantiateStreaming(fetch("imc.wasm"), {});
// Importar la función calcularIMC
const calcuIMC = wasmModule.instance.exports.calcularIMC;

const peso = 60;
const altura = 1.62;

// Llamar a la función calcularIMC
const imc = calcuIMC(peso, altura);
document.write(`Tu IMC es: ${imc} <br>`);
}

runCalc();


// async function sCalc(){
// // Cargar el archivo WASM
// const wasmModule = await WebAssembly.instantiateStreaming(fetch("saludar.wasm"), {});
// // Importar la función calcularIMC
// const calcuIMC = wasmModule.instance.exports.calcularIMC;

// const peso = 65;
// const altura = 1.64;

// // Llamar a la función calcularIMC
// const imc = calcuIMC(peso, altura);
// document.write(`Tu IMC es: ${imc} <br>`);
// }

// sCalc();

