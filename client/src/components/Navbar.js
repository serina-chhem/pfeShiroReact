import React from "react";
import { withRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../images/logo.png";
import Headroom from "react-headroom"

class Navbar extends React.Component {
    render() {
        return (
            <Headroom>
            
                <div className="nav">

                    <Link to="/">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>
                    
                    <div>
                            <Link to="/#propos" className="nav-link">
                                À propos
                            </Link>

                            <Link to="/#fonctionnalites" className="nav-link">
                                Fonctionnalités
                            </Link>

                            <Link to="/#contact" className="nav-link">
                                Créateurs
                            </Link>
                        <Link to="/test" className="nav-link">
                                Test
                            </Link>
                        
                       
                            
                        
                            
                       
                    </div>
                </div>
            
            </Headroom>
        );
    }
}

export default withRouter(Navbar);
