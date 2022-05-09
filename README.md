# Proyecto 1 Etapa 2 - Inteligencia de Negocios

<h3>Automatización análitica de textos</h3>

<strong>Integrantes:</strong>
  <ul>
    <li>Julián Padilla Molina - 201913677</li>
    <li>Juan Andrés Ariza - 201911442</li>
    <li>Diego Felipe Carvajal - 201911910</li>
  </ul>

<strong>Objetivos:</strong>
  <ul>
    <li>Automatizar un proceso replicable para aplicar la metodología de analítica de textos en la construcción de modelos analíticos.</li>
    <li>Desarrollar una aplicación que utiliza un modelo analítico basado en aprendizaje automático y es de interés para un rol dentro de una organización.</li>
  </ul> 

<h3>Backend</h3>

<strong>Instrucciones de instalación:</strong>
  <ol>
  <li>Clonar el proyecto en un carpeta de preferencia.</li>
  <li>Abrir Visual Studio Code en la carpeta donde quede almacenado el proyecto (carpeta Back).</li>
  <li>Abrir la terminal en la dirección de proyecto back e ingresar el comando <code>$ pip install -r requirements.txt
</code> para instalar las dependencias necesarias para la ejecución respectiva del proyecto back.</li>
  </ol>
  
<strong>Despliegue del proyecto:</strong>
  <ul>
    <li>
      Deslpliegue local:
      <ol>
        <li>Abrir la terminal en la dirección del proyecto e ingresar el comando <code>uvicorn main:app --reload</code> para correr el servidor de forma local.</li>
      </ol>
    </li>
    <li>
      Despliegue remoto:
      <ol>
        <li>Abrir el navegador de preferencia y ingresar a la url <code>"https://proyecto1-etapa2-bi.herokuapp.com/"</code> donde se encuentra el proyecto back en el servidor remoto.</li>
      </ol>
    </li>
  </ul>
 
 <strong>Funcionamiento del API:</strong>
 
 El diseño de la API consta principalmente de tres endpoints:
 
 <ul>
  <li>
    Endpoint: <code>http://127.0.0.1:8000/decisionTree</code> o <code>https://proyecto1-etapa2-bi.herokuapp.com/decisionTree</code>
    <br>
    <strong>Funcionalidad:</strong> Calcular la predicción de egibilidad de un paciente para ensayos clínicos de cancer mediante el algoritmo de <b>Decision Tree</b>.
    <br>
    <strong>Operabilidad:</strong> Se envía un JSON con dos textos: el texto del estudio y el texto de la condición. El API retorna la predicción del modelo de clasificación.
    <br>
  </li>
</ul>
<ul>
  <li>
    Endpoint: <code>http://127.0.0.1:8000/randomForest</code> o <code>https://proyecto1-etapa2-bi.herokuapp.com/randomForest</code>
    <br>
    <strong>Funcionalidad:</strong> Calcular la predicción de egibilidad de un paciente para ensayos clínicos de cancer mediante el algoritmo de <b>Random Forest</b>.
    <br>
    <strong>Operabilidad:</strong> Se envía un JSON con dos textos: el texto del estudio y el texto de la condición. El API retorna la predicción del modelo de clasificación.
    <br>  
  </li>
</ul>
<ul>
  <li>
    Endpoint: <code>http://127.0.0.1:8000/logisticRegression</code> o <code>https://proyecto1-etapa2-bi.herokuapp.com/logisticRegression</code>
    <br>
    <strong>Funcionalidad:</strong> Calcular la predicción de egibilidad de un paciente para ensayos clínicos de cancer mediante el algoritmo de <b>Logistic Regresion</b>.
    <br>
    <strong>Operabilidad:</strong> Se envía un JSON con dos textos: el texto del estudio y el texto de la condición. El API retorna la predicción del modelo de clasificación.
    <br>  
  </li>
</ul>
 
<strong>Ejemplo de funcionamiento:</strong>
<ul>
    <li><strong>Nota</strong>:Abrir la herramienta Postman para correr los test del endpoint 1, 2 y
      3. (La colección de las pruebas se encuentra en la carpeta "collections").</li>
</ul>

<strong>Endpoints (1, 2 y 3): Body Request</strong>
<ul>
  <li>A continuación, se presenta el JSON que se envía por medio del endpoint:</li>
</ul>

```json
{
  "texts": [
    {
      "processed_study": "study interventions are Stem cell transplantation",
      "processed_condition": "hodgkin lymphoma diagnosis and history of congenital hematologic immunologic or metabolic disorder which in the estimation of the pi poses prohibitive risk to the recipient"
    },
    {
      "processed_study": "study interventions are Saracatinib",
      "processed_condition": "recurrent verrucous carcinoma of the larynx diagnosis and patients must agree to use adequate birth control for the duration of study participation and for at least eight weeks after discontinuation of study drug"
    }
  ]
}
```

<strong>Endpoints (1, 2 y 3): Response</strong>
<ul>
  <li>A continuación, se presenta el JSON con la respuesta obtenida:</li>
</ul>

```json
{
    "Predict": "[1, 0]"
}
```

<h3>Frontend</h3>

<strong>Instrucciones de instalación:</strong>
<ol>
  <li>Clonar el proyecto en un carpeta de preferencia.</li>
  <li>Abrir Visual Studio Code en la carpeta donde quede almacenado el proyecto (carpeta Front > bi-front).</li>
  <li>Abrir la terminal en la dirección de proyecto bi-front e ingresar el comando <code>npm i</code> para instalar las dependencias necesarias para la ejecución respectiva del proyecto front.</li>
</ol>

<strong>Despliegue del proyecto:</strong>
  <ul>
    <li>
      Deslpliegue local:
      <ol>
        <li>Abrir la terminal en la dirección del proyecto bi-front e ingresar el comando <code>npm start</code> para correr el servidor de forma local.</li>
      </ol>
    </li>
    <li>
      Despliegue remoto:
      <ol>
        <li>Abrir el navegador de preferencia y ingresar a la url <code>"https://proyecto1-etapa2-bi-front.herokuapp.com/"</code> donde se encuentra el proyecto front en el servidor remoto.</li>
      </ol>
    </li>
  </ul>
  
