import * as Survey from "survey-react";
import "survey-react/survey.css";
import React, { Component } from "react";

class Quiz extends Component {
  //Define Survey JSON
  //Here is the simplest Survey with one text question
  json = {
    title: "Carbon Footprint UNSA",
    pages: [
        {
            "title": "Hogar",
            "elements": [
                {
                    "type": "rating",
                    "name": "numberHome",
                    "title": "¿Cuántas personas viven en tu hogar?",
                    "hasOther": true,
                    "isRequired": true,
                    "rateMin": 0,
                    "rateMax": 10,
                    "minRateDescription": "(Cantidad mínima)",
                    "maxRateDescription": "(Cantidad máxima)",
                }
            ]
        },
        {
            "title": "Transporte",
            "elements": [
                {
                    "type": "text",
                    "name": "transport1",
                    "title": "Si tiene auto privado, normalmente con cuantas personas lo comparte?",
                    "isRequired": false,
                    "validators": [
                        {
                            "type": "numeric",
                            "minValue": 2,
                            "maxValue": 10000
                        }
                    ]
                },

                {
                    "type": "text",
                    "name": "transport2",
                    "title": "Si tiene auto privado, ¿Cuántas horas a la semana lo utiliza? ",
                    "hasOther": true,
                    "isRequired": false,
                    "validators": [
                        {
                            "type": "numeric",
                            "minValue": 5,
                            "maxValue": 10000
                        }
                    ]
                },
                {
                    "type": "boolean",
                    "name": "transport3",
                    "title": "¿Usa transporte público? ",
                    "hasOther": true,
                    "isRequired": true,

                },
                {
                    "type": "text",
                    "name": "transport4",
                    "visibleIf": "{transport3} == true",
                    "title": "¿Cuántas horas pasa a la semana en promedio en el transporte público? ",
                    "isRequired": true,
                    "validators": [
                        {
                            "type": "numeric",
                            "minValue": 3,
                            "maxValue": 10000
                        }
                    ]

                },
                {
                    "type": "text",
                    "name": "transport5",
                    "visibleIf": "{transport3} == true",
                    "title": "¿Cuánto dinero gasta en gasolina por semana?",
                    "isRequired": true,
                    "validators": [
                        {
                            "type": "numeric",
                            "minValue": 0,
                            "maxValue": 10000
                        }
                    ]

                },
                {
                    "type": "text",
                    "name": "transport6",
                    "visibleIf": "{transport3} == true",
                    "title": "¿Cantidad de horas que viaja al año en avión?",
                    "isRequired": true,
                    "validators": [
                        {
                            "type": "numeric",
                            "minValue": 0,
                            "maxValue": 10000
                        }
                    ]

                },
            ]
        },
        {
            "title": "Energía",
            "elements": [
                {
                    "type": "text",
                    "name": "energy1",
                    "title": "¿Cuánto pagas por recibo de luz al mes? ",
                    "isRequired": true,
                    "validators": [
                        {
                            "type": "numeric",
                            "minValue": 10,
                            "maxValue": 10000
                        }
                    ]

                },
                {
                    "type": "text",
                    "name": "energy2",
                    "title": "¿Cuántos balones de gas de 10kg utilizas en tu casa al mes?",
                    "isRequired": true,
                    "validators": [
                        {
                            "type": "numeric",
                            "minValue": 1,
                            "maxValue": 10000
                        }
                    ]

                },
            ]
        },
        {
            "title": "Alimentación",
            "elements": [
                {
                    "type": "text",
                    "name": "aliment1",
                    "title": "¿Cuántas veces comes carne a la semana?",
                    "isRequired": true,
                    "validators": [
                        {
                            "type": "numeric",
                            "minValue": 0,
                            "maxValue": 10000
                        }
                    ]

                },
            ]
        },
        {
            "title": "Residuos",
            "elements": [
                {
                    "type": "text",
                    "name": "residue1",
                    "title": "¿Cuántas bolsas de plástico utilizas solamente tú a la semana?",
                    "isRequired": true,
                    "validators": [
                        {
                            "type": "numeric",
                            "minValue": 0,
                            "maxValue": 10000
                        }
                    ]

                },
            ]
        }
    ]
};

  render() {
    var model = new Survey.Model(this.json);
    model.onComplete.add(function (sender) {
      document.querySelector("#surveyResult").textContent =
        "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
      fetch("http://54.149.211.70:5000/save-data", {
        method: "POST",
        body: JSON.stringify(sender.data),
      })
        .then((res) => res.json())
        .then(
          (response) => {
            console.log(response);
          },
          (err) => {
            alert(`Error: ${err}`);
          }
        );
      console.log(sender.data);
    });
    model.showProgressBar = "bottom";
    return <Survey.Survey model={model} />;
  }
}
export default Quiz;
