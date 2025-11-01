import { useState } from "react";

export function Calculadora() {
    const [numero, setNumero] = useState(0);

    return (
        <div>
            <p>Valor actual: {numero}</p>
            <button onClick={() => setNumero(numero + 1)}>Sumar Numero</button>
            <button onClick={() => setNumero(numero - 1)}>Restar Numero</button>
        </div>
    );
}
