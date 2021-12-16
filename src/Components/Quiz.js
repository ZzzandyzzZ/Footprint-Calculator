import * as Survey from "survey-react";
import "survey-react/survey.css";
import React, { Component } from "react";

Survey.StylesManager.applyTheme("stone");
Survey.surveyLocalization.locales[
  Survey.surveyLocalization.defaultLocale
].requiredError = "Este campo no puede ir vacío";
class Quiz extends Component {
  //Define Survey JSON
  //Here is the simplest Survey with one text question
  json = {
    title: "Calcula tu huella de carbono de manera sencilla",
    pages: [
      {
        name: "Datos personales",
        navigationTitle: "Datos personales",
        navigationDescription: "Datos personales",
        elements: [
          {
            type: "image",
            name: "first_page_image",
            imageLink: "/images/personal.png",
            imageHeight: 200,
          },
          {
            type: "text",
            name: "name",
            title: "Ingresa tus nombres y apellidos",
            hasOther: true,
            isRequired: true,
          },
          {
            type: "text",
            name: "email",
            title: "Ingresa tu email",
            hasOther: true,
            isRequired: true,
          },
        ],
      },
      {
        name: "Hogar",
        navigationTitle: "Hogar",
        navigationDescription: "Hogar",
        elements: [
          {
            type: "image",
            name: "first_page_image",
            imageLink: "/images/house.svg",
            imageHeight: 200,
          },
          {
            type: "rating",
            name: "numberHome",
            title: "¿Cuántas personas viven en tu hogar?",
            hasOther: true,
            isRequired: true,
            rateMin: 0,
            rateMax: 10,
            minRateDescription: "(Cantidad mínima)",
            maxRateDescription: "(Cantidad máxima)",
          },
        ],
      },
      {
        name: "Transporte",
        navigationTitle: "Transporte",
        navigationDescription: "Transporte",
        elements: [
          {
            type: "image",
            name: "first_page_image",
            imageLink: "/images/car.svg",
            imageHeight: 200,
          },
          {
            type: "text",
            name: "transport1",
            title:
              "Si tiene auto privado, normalmente con cuantas personas lo comparte?",
            isRequired: false,
            validators: [
              {
                type: "numeric",
                minValue: 2,
                maxValue: 10000,
              },
            ],
          },
          {
            type: "text",
            name: "transport2",
            title:
              "Si tiene auto privado, ¿Cuántas horas a la semana lo utiliza? ",
            hasOther: true,
            isRequired: false,
            validators: [
              {
                type: "numeric",
                minValue: 5,
                maxValue: 10000,
              },
            ],
          },
          {
            type: "boolean",
            name: "transport3",
            title: "¿Usa transporte público? ",
            hasOther: true,
            isRequired: true,
          },
          {
            type: "text",
            name: "transport4",
            visibleIf: "{transport3} == true",
            title:"¿Cuántas horas normalmente utiliza taxis a la semana?",
            isRequired: true,
            validators: [
              {
                type: "numeric",
                minValue: 3,
                maxValue: 10000,
              },
            ],
          },
          {
            type: "text",
            name: "transport5",
            visibleIf: "{transport3} == true",
            title:
              "¿Cuántas horas pasa a la semana en promedio en el transporte público? ",
            isRequired: true,
            validators: [
              {
                type: "numeric",
                minValue: 3,
                maxValue: 10000,
              },
            ],
          },
          {
            type: "text",
            name: "transport6",
            visibleIf: "{transport3} == true",
            title: "¿Cuánto dinero gasta en gasolina por semana?",
            isRequired: true,
            validators: [
              {
                type: "numeric",
                minValue: 0,
                maxValue: 10000,
              },
            ],
          },
          {
            type: "text",
            name: "transport7",
            visibleIf: "{transport3} == true",
            title: "¿Cantidad de horas que viaja al año en avión?",
            isRequired: true,
            validators: [
              {
                type: "numeric",
                minValue: 0,
                maxValue: 10000,
              },
            ],
          },
        ],
      },
      {
        name: "Energía",
        navigationTitle: "Energía",
        navigationDescription: "Energía",
        elements: [
          {
            type: "image",
            name: "first_page_image",
            imageLink: "/images/energia.svg",
            imageHeight: 200,
          },
          {
            type: "text",
            name: "energy1",
            title: "¿Cuánto pagas por recibo de luz al mes? ",
            isRequired: true,
            validators: [
              {
                type: "numeric",
                minValue: 10,
                maxValue: 10000,
              },
            ],
          },
          {
            type: "text",
            name: "energy2",
            title:
              "¿Cuántos balones de gas de 10kg utilizas en tu casa al mes?",
            isRequired: true,
            validators: [
              {
                type: "numeric",
                minValue: 1,
                maxValue: 10000,
              },
            ],
          },
        ],
      },
      {
        name: "Alimentación",
        navigationTitle: "Alimentación",
        navigationDescription: "Alimentación",
        elements: [
          {
            type: "image",
            name: "first_page_image",
            imageLink: "/images/food.svg",
            imageHeight: 200,
          },
          {
            type: "text",
            name: "aliment1",
            title: "¿Cuántas veces comes carne a la semana?",
            isRequired: true,
            validators: [
              {
                type: "numeric",
                minValue: 0,
                maxValue: 10000,
              },
            ],
          },
        ],
      },
      {
        name: "Residuos",
        navigationTitle: "Residuos",
        navigationDescription: "Residuos",
        elements: [
          {
            type: "image",
            name: "first_page_image",
            imageLink: "/images/residuos.svg",
            imageHeight: 200,
          },
          {
            type: "text",
            name: "residue1",
            title:
              "¿Cuántas bolsas de plástico utilizas solamente tú a la semana?",
            isRequired: true,
            validators: [
              {
                type: "numeric",
                minValue: 0,
                maxValue: 10000,
              },
            ],
          },
        ],
      },
    ],
    showProgressBar: "top",
    progressBarType: "buttons",
  };
  render() {
    var model = new Survey.Model(this.json);
    model.onComplete.add(function (sender) {
      const name = sender.data["name"];
      const email = sender.data["email"];
      const n = sender.data["numberHome"];
      const nc = sender.data["transport1"];
      const ha = sender.data["transport2"];
      const P3 = (ha * 4.2 * 52) / nc;
      const transport_public = sender.data["transport3"];
      if (transport_public == false){
        const ht = 0;
        const htp = 0;
        const gaso = 0;
        const hav = 0;
      }
      else{
        const ht = sender.data["transport4"];
        const htp = sender.data["transport5"];
        const gaso = sender.data["transport6"];
        const hav = sender.data["transport7"];
      }
      const P4 = ht * 3.5 * 52;
      const P5 = htp * 4.2 * 52;
      const P6 = (gaso * 0.217 * 2.37) / nc;
      const P7 = hav * 75;
      const luz = sender.data["energy1"];
      const P8 = (luz * 1.28 * 12) / n;
      const gas = sender.data["energy2"];
      const P9 = (14.25 * gas * 12) / n;
      const carne = sender.data["aliment1"];
      const P10 = carne * 5.4 * 52;
      const bolsas = sender.data["residue1"];
      const P11 = bolsas * 0.033 * 52;

      const HC = ((P3 + P6) / 2 + P4 + P5 + P6 + P9 + P10 + P11) / 1000;

      var data = sender.data;
      data.email = email;
      data.name = name;
      data.result = HC;
      console.log(data);
      fetch("http://54.149.211.70:5000/save-data", {
        method: "POST",
        body: JSON.stringify(data),
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
      console.log(data);
    });
    return <Survey.Survey model={model} />;
  }
}
export default Quiz;
