import React from "react";

// Funcion NavbarMarvel
function NavbarAnalytic () {
    return (
        <header class="p-3 mb-3 border-bottom bg-dark">
            <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/30/000000/external-patient-plastic-surgery-flaticons-flat-flat-icons.png" alt="logo_home"/>
                </a>

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="." class="nav-link px-2 link-light">Patient Eligibility</a></li>
                </ul>

            

                <div class="dropdown text-end">
                <a href="." class="d-block link-light text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://img.freepik.com/vector-gratis/fondo-personaje-doctor_1270-84.jpg?w=2000" alt="mdo" width="32" height="32" class="rounded-circle"/>
                </a>
                <ul class="dropdown-menu text-small link-light" aria-labelledby="dropdownUser1">
                    <li><a class="dropdown-item" href=".">New project...</a></li>
                    <li><a class="dropdown-item" href=".">Settings</a></li>
                    <li><a class="dropdown-item" href=".">Profile</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href=".">Sign out</a></li>
                </ul>
                </div>
            </div>
            </div>
        </header>
    )
}

// Exportar funcion NavbarMarvel para ser visible en otros archivos
export default NavbarAnalytic;