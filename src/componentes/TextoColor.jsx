import React from "react";
import { useState } from "react";

export default function TextoColor(props) {
  const [color, setColor] = useState(props.colorInicial);
  const [nuevoColor, setNuevoColor] = useState("");

  const cambiarColor = () => {
    if (nuevoColor.trim()!==""){
        setColor(nuevoColor);
        setNuevoColor("");
    }
  }

    return (
        <div>
            <h2 style={{ color: color }}>{props.texto}</h2>
            <input type="text" size="25" value={nuevoColor} onChange={(e) => setNuevoColor(e.target.value)} placeholder="Ingrese un color (En ingles): " />
            <button onClick = {cambiarColor} className="btn btn-primary">Cambiar color</button>
        </div>
    );
}