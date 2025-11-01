import { useState } from "react";

export function Formulario() {
    const [valor, setValor] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Escribe algo"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
            />
            <button type="button">Enviar</button>
        </form>
    );
}