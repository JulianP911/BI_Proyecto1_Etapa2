# Importar las librerías necesarias para el manejo de los datos 
import string
from pydantic import BaseModel
from typing import List

# Clase DataModel
class DataModel(BaseModel):

    # Estas varibles permiten que la librería pydantic haga el parseo entre el Json recibido y el modelo declarado
    processed_study: str
    processed_condition: str
    

    # Esta función retorna los nombres de las columnas correspondientes con el modelo exportado en joblib
    def columns():
        return ["processed_study", "processed_condition"]


# Clase DataModelList
class DataModelList(BaseModel):

    # Está varible permiten que la librería pydantic haga el parseo entre el Json recibido y el modelo declarado
    texts: List[DataModel]