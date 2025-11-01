import { useState } from "react";

export function EntradaInfo() {
    const [texto, setTexto] = useState("");

    return (
        <div>
            <input
                type="text"
                placeholder="Escribe algo"
                onChange={(e) => setTexto(e.target.value)}
            />
            <p>Información ingresada: {texto}</p>
        </div>
    );
}
