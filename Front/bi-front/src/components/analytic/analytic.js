import React from "react";
import FormAnalytic from "./formAnalytic/formAnalytic";
import NavbarAnalytic from "./navbarAnalytic/navbarAnalytic";
import FooterAnalytic from "./footerAnalytic/footerAnalytic";

// Funcion Analtytic
function Analtytic () {
    return (
        <div>
            <NavbarAnalytic />
            <div className="container mt-5 d-flex align-items-center">
                <h3>Eligibility of a patient for cancer clinical trials</h3>
            </div>
            <div className="container mt-3">
                <div>
                    <FormAnalytic />
                </div>
            </div>
            <FooterAnalytic />
        </div>
    );
}

// Exportar funcion Analtytic para ser visible en otros archivos
export default Analtytic;