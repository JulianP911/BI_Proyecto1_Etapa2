import React, { useState } from "react";
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import ResultAnalytic from "../resultAnalytic/resultAnalytic";

// Funcion FormAnalytic
function FormAnalytic () {
    const [datos, setDatos] = useState({
        study: '',
        condition: '',
        model: '',
    })
    const [resultado, setResultado] = useState("-")
    // Funciones para el manejo de los datos del formulario
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.id] : event.target.value,
        })
    }
    const enviarDatos = (event) => {
        event.preventDefault();
        prediccionElegibilidad(datos);
    }
    // Funcion encargada para hacer las predicciones de elegibilidad de un paciente
    async function prediccionElegibilidad(datos) {
        var url = "https://proyecto1-etapa2-bi.herokuapp.com/"
        if(datos.model === "1") {
            url += "decisionTree"
        } else if(datos.model === "2") {
            console.log(datos)
            url += "randomForest";
            console.log(url)
        } else {
            url += "logisticRegression";
        }
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
        const info = JSON.stringify({ "texts": [{"processed_study": datos.study, "processed_condition": datos.condition}]});
        axios
            .post(url, info, {headers} )
            .then((resp)=> {
               console.log(resp)
               console.log(resp.data.Predict[1])
               setResultado(resp.data.Predict[1])
            })
            .catch((err)=> {
                console.log(err);
            }) 
    }
    return (
        <div className="row">
            <div className="col-7 border">
                <Form onSubmit={enviarDatos}>
                    <Form.Group className="mt-3">
                        <Form.Label><b>Study</b></Form.Label>
                        <Form.Control type="text" placeholder="Enter text of the study" id="study" onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label><b>Condition</b></Form.Label>
                        <Form.Control type="text" placeholder="Enter text of the condition" id="condition" onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Label><b>Predictive model</b></Form.Label>
                    <Form.Select aria-label="Default select example" id="model" onChange={handleInputChange}>
                        <option>Select the prediction model</option>
                        <option value="1">Decision Tree</option>
                        <option value="2">Random Forest</option>
                        <option value="3">Logistic Regression</option>
                    </Form.Select>
                    <Button className="bg-dark mt-3 mb-3" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <div className="col-5 border d-flex align-items-center justify-content-center">
                <ResultAnalytic resultadoElegibilidad={resultado}/>
            </div>  
        </div> 
    )
}

// Exportar funcion FormAnalytic para ser visible en otros archivos
export default FormAnalytic;