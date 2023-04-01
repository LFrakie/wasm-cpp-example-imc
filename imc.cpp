#include <iostream>
#include <emscripten.h>

using namespace std;

// Función para calcular el IMC
double calIMC(double peso, double altura) {
    return peso / (altura * altura);
}

// Función principal que se llama desde JavaScript
extern "C" {
    EMSCRIPTEN_KEEPALIVE
    double calcularIMC(double peso, double altura) {
        return calIMC(peso, altura);
    }
}

