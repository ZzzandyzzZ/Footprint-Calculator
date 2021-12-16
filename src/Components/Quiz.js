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
            "title": "What operating system do you use?",
            "elements": [
                {
                    "type": "checkbox",
                    "name": "opSystem",
                    "title": "OS",
                    "hasOther": true,
                    "isRequired": true,
                    "choices": ["Windows", "Linux", "Macintosh OSX"]
                }
            ]
        }, {
            "title": "What language(s) are you currently using?",
            "elements": [
                {
                    "type": "checkbox",
                    "name": "langs",
                    "title": "Please select from the list",
                    "colCount": 4,
                    "isRequired": true,
                    "choices": [
                        "Javascript",
                        "Java",
                        "Python",
                        "CSS",
                        "PHP",
                        "Ruby",
                        "C++",
                        "C",
                        "Shell",
                        "C#",
                        "Objective-C",
                        "R",
                        "VimL",
                        "Go",
                        "Perl",
                        "CoffeeScript",
                        "TeX",
                        "Swift",
                        "Scala",
                        "Emacs Lisp",
                        "Haskell",
                        "Lua",
                        "Clojure",
                        "Matlab",
                        "Arduino",
                        "Makefile",
                        "Groovy",
                        "Puppet",
                        "Rust",
                        "PowerShell"
                    ]
                }
            ]
        }, {
            "title": "Please enter your name and e-mail",
            "elements": [
                {
                    "type": "text",
                    "name": "name",
                    "title": "Name:"
                }, {
                    "type": "text",
                    "name": "email",
                    "title": "Your e-mail"
                }
            ]
        }
    ]
};


 render() {
  var model = new Survey.Model(this.json);
  model
    .onComplete
    .add(function (sender) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
    });
    model.showProgressBar = 'bottom';
  return (<Survey.Survey model={model} />);
 }
}
export default Quiz;