# Importar las librerías necesarias para ofrecer los requerimientos de negocio
import json
from plistlib import load
from typing import Optional
from typing_extensions import Self
from DataModel import DataModel, DataModelList
from typing import FrozenSet
import pandas as pd
import numpy as np
from pandas import json_normalize
from sklearn.metrics import r2_score, mean_squared_error
from joblib import load
from fastapi.encoders import jsonable_encoder
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Creación de la instancia de FastAPI
app = FastAPI()

# Arreglo de las urls que pueden acceder al backend
origins = ["http://localhost:3000", "https://proyecto1-etapa2-bi-front.herokuapp.com"]

# Manejo de las cors para habilitar los endpoints
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Endpoint inicial de la API
@app.get("/")
def read_root():
   return {"InteligenciaNegocios": "Proyecto1Etapa2"}

# Endpoint 1: Realizar predicciones con el modelo ML (Decission tree)
@app.post("/decisionTree")
def make_predictions_decission_tree(data: DataModelList):
   print(data)
   df = convert_json_to_dataframe(data)
   df.columns = DataModel.columns()
   model = load("./models/Model_DecisionTree.joblib")
   result = model.predict(df)
   lists = result.tolist()
   json_predict = json.dumps(lists)
   return {"Predict": json_predict}

# Endpoint 2: Realizar predicciones con el modelo ML (Random forest)
@app.post("/randomForest")
def make_predictions_random_forest(data: DataModelList):
   df = convert_json_to_dataframe(data)
   df.columns = DataModel.columns()
   model = load("./models/Model_RandomForest.joblib")
   result = model.predict(df)
   lists = result.tolist()
   json_predict = json.dumps(lists)
   return {"Predict": json_predict}

# Endpoint 3: Realizar predicciones con el modelo ML (Logistic regression)
@app.post("/logisticRegression")
def make_predictions_logistic_regresion(data: DataModelList):
   df = convert_json_to_dataframe(data)
   df.columns = DataModel.columns()
   model = load("./models/Model_LogisticRegression.joblib")
   result = model.predict(df)
   lists = result.tolist()
   json_predict = json.dumps(lists)
   return {"Predict": json_predict}


# Función: Está se encarga de convertir los datos recibidos a través del JSON en un dataframe para que puedan ser usados en el modelo ML
def convert_json_to_dataframe(data):
    dict = jsonable_encoder(data)
    dataframe = json_normalize(dict['texts']) 
    return dataframe