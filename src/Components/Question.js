import React, { Component } from "react";

class Question extends Component {
    getValue(){
        const prueba = document.getElementById('name');
        alert(prueba);
    }

    render (){
        return (
            <>
                <h1> ¿ Cual es tu pregunta?</h1>
                Ingresa tal cosa
                <input type="text" id="name" name="name" required size="10"/>
                <button onClick={this.getValue()}>Enviar</button>
            </>
        )
    }
}
export default Question;