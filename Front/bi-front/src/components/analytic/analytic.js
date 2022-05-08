import React from "react";
import FormAnalytic from "./formAnalytic/formAnalytic";
import NavbarAnalytic from "./navbarAnalytic/navbarAnalytic";

// Funcion Analtytic
function Analtytic () {
    return (
        <div>
            <NavbarAnalytic />
            <div className="container">
                <div>
                    <FormAnalytic />
                </div>
            </div>
        </div>
    );
}

// Exportar funcion Analtytic para ser visible en otros archivos
export default Analtytic;