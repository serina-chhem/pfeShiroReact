import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    render() {
        return (
            <div className="App">
                {/*<Navbar/>*/}
                <div className="Container">
                    <Form />
                </div>
    
            </div>
        );
    }
}

export default App;
