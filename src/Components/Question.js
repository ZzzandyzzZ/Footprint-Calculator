import React, { Component } from "react";

class Question extends Component {
    render (){
        return (
            <>
                <h1> ¿ Cual es tu pregunta?</h1>
                Ingresa tal cosa
                <input type="text" id="name" name="name" required size="10"/>
            </>
        )
    }
}
export default Question;