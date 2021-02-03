import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./components/MainPage.js";
import Form from "./components/Form.js";
import Cro from "./components/Cro.js";
import Navbar from "./components/Navbar.js";
import "./App.css";
import {Helmet} from "react-helmet";
import Test from "./components/Test";
import TestCro from "./components/TestCro";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    render() {
        return (
            <Router>
                <div>
                    <Helmet>
                        <title>PFE - Shiro</title>
                    </Helmet>
                    
                    <Navbar />
                    <div className="Container">
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/form" component={Form} />
                        <Route exact path="/cro" component={Cro} />
                        <Route exact path="/test" component={Test} />
                        <Route exact path="/testCro" component={TestCro} />
                    </div>
                </div>
    
            </Router>
        );
    }
}

export default App;
