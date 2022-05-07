import React from "react";

// Funcion NavbarMarvel
function NavbarAnalytic () {
    return (
        <nav className="navbar navbar-light" style={{background: "#9CD7FD"}}>
            <div className="container-fluid">
                <a className="navbar-brand" style={{color: "#014B7B"}} href=".">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACoklEQVR4nO2bvW4UMRDHf0GnK9JGoUKip6ZAKEDLQcVLpEqJeAAK8sHDhAZegDsFXiPZROFegUhHsbM6tPF+eM7e8W38l0YreT3jmf+tZ2zf7g7D4wXwQa6PpW0JXADnwG8DnwbBc+AXsOqQC+k7GkyAz8AdZYC3wBnwFngmMgO+An+kz53oTAz8DYqnwJx1UCfAbkv/XeCUNVlzsWGCqThzQ/dj2yVXwJua/fdAIfdmtXuvpX3Tca8pSZ9qCDgJ4MAK+AbsOez/H+Cl4/6e6Ibw4VhDwLUov/TUeyV6f4EjYKehXxcBiO6R2FqJbR8csH4SvFE554sfovexo9+MkoRLyoTYhk9i87vCH20casVb0XM99lrss64gvhicAPWAkey26j1SGHxHe4aOjaZxC8rKEnygOvqWp4OAvlSJtUtcyTT4FOgyeNbTWY2cRvA3uMEJ5bJ2SbjAl5TEti2NkyHACip/NUlwVAhBwIJy05JCW1D0faRc/Sza8hTQIMSBw4L7DFu1BUWuAg8BmQBrB6wRk4CmXaPrDDBJbJoE23aNTUdgmyC5vYBWf0EzcZW4VoCjqQJ9yY0OX0ab5nyTfuicYD4FXMH/dPSbO/qFyAnmBGgHCrWyHE0OGBSpEtBVCYKdA6RKQNeUSLIKuJKg65dy/bqjSIIzykB8y2Cf/wZj+BvdYHCHYoyXag4YDDEJKOTqmhJXtb591v9bVwUOuR8o0nZYa/OdEklWAWvkHKBBJsDaAWvEIMA3o2sk6SowRILMVcCBXAU0yARYO2CNTIC1A9bIBFg7YA3NKzIF8IQ01wKu7bcavmd/1tJ0thj8THDbkFeCbcgEtNy7kWvI9/6HRvWRleqjqWPsE1so+aIhYCokVJ/PbaMUErzqw8mMh4B/xOKoq4ShERwAAAAASUVORK5CYII=" alt="Logo App" width="35" height="35" className="d-inline-block align-text-top"/>
                <span className="mt-5">Salva a Tu Paciente</span>
                </a>
            </div>
        </nav>
    )
}

// Exportar funcion NavbarMarvel para ser visible en otros archivos
export default NavbarAnalytic;