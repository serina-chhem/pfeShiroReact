import React from "react";
import { withRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../logo.png";

class Navbar extends React.Component {
    render() {
        return (
            <div className="Blanc">
                <div className="menu">
                    <Link to="/" className="nav-link Carre">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>
                    <div className="Rectangle"></div>
                    <div className="Carre">
                        <button>
                            <Link to="/#contact" className="nav-link">
                                Contact
                            </Link>
                        </button>
                        <button>
                            <Link to="/#fonctionnalites" className="nav-link">
                                Fonctionnalités
                            </Link>
                        </button>
                        <button>
                            <Link to="/#propos" className="nav-link">
                                A propos
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Navbar);
