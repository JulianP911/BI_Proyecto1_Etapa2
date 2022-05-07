import React from "react";
import FormAnalytic from "./formAnalytic/formAnalytic";
import NavbarAnalytic from "./navbarAnalytic/navbarAnalytic";

// Funcion Analtytic
function Analtytic () {
    return (
        <div>
            <NavbarAnalytic />
            <div className="container">
                <div className="row">
                    <div className="col-7 border">
                        <FormAnalytic />
                    </div>
                    <div className="col-5">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

// Exportar funcion Analtytic para ser visible en otros archivos
export default Analtytic;