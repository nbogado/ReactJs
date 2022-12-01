import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="/"><img src={"img/logo.png"} alt="Cafeteria" width={80} /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" aria-current="page" href="/cafeMolido">Café Molido</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/cafeGranos">Café en granos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/capsulasDolceGusto">Capsulas DolceGusto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/capsulasNespresso">Capsulas Nespresso</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="col-md-6 d-flex justify-content-end align-items-center">
                <CartWidget />
            </div>
        </div>
    )
}

export default NavBar;