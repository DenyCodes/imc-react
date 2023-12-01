import React, { useState } from 'react';

function App() {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    function calcularIMC(altura, peso) {
        return peso / (altura * altura);
    }

    function classificarIMC(imc) {
        if (imc < 18.5) {
            return "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 25) {
            return "Peso normal";
        } else if (imc >= 25 && imc < 30) {
            return "Sobrepeso";
        } else {
            return "Obesidade";
        }
    }

    const imcCalculado = calcularIMC(altura, peso);
    const classificacao = classificarIMC(imcCalculado);

    return (
        <>
            <input type="number" onChange={(e) => setAltura(e.target.value)} />
            <input type="number" onChange={(e) => setPeso(e.target.value)} />
            <h2>{classificacao}</h2>
            <h1>{imcCalculado}</h1>
        </>
    );
}

export default App;
