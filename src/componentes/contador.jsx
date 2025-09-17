import React from 'react'
import { useState } from 'react';

export default function Contador(props) {

  const [contador, setcontador] = useState(0);

  const sumar = () => {
    setcontador(contador + props.paso);
    }
  return (
    <div>
       <h2>{contador}</h2> 
       <button onClick={sumar} className="btn btn-primary">Sumar + {props.paso}</button>
    </div>
  )
}
