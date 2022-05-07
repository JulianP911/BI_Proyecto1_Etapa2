import React, { useState } from "react";
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

// Funcion NavbarMarvel
function FormAnalytic () {
    const [datos, setDatos] = useState({
        study: '',
        condition: '',
        model: '',
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.id] : event.target.value,
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(prediccionElegibilidad(datos));
    }

    async function prediccionElegibilidad(datos) {
        var url = "https://proyecto1-etapa2-bi.herokuapp.com/"
        if(datos.model === "1") {
            url += "decisionTree"
        } else if(datos.model === "2") {
            url += "randomForest";
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
                console.log(resp);
            })
            .catch((err)=> {
                console.log(err);
            }) 
    }

    return (
        <Form onSubmit={enviarDatos}>
            <Form.Group className="mb-3">
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
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

// Exportar funcion NavbarMarvel para ser visible en otros archivos
export default FormAnalytic;