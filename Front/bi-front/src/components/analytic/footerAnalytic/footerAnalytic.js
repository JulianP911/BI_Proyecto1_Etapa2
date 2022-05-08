import React from "react";

// Funcion FooterAnalytic
function FooterAnalytic () {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-2 mb-2">
                <li className="nav-item"><a href="." className="nav-link px-2 text-muted">Patient Eligibility</a></li>
                </ul>
                <p className="text-center text-muted">&copy; 2022 Business Inteligence - Team 1</p>
            </footer>
        </div>
    )
}

// Exportar funcion FooterAnalytic para ser visible en otros archivos
export default FooterAnalytic;