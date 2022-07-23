import React, { Component } from "react";
import { Provider } from "react-redux";
import dataStore from "./store";
import ClassList from "./ClassList";

export default class App extends Component {

    render() {
        return  <Provider store={ dataStore }>
                    <ClassList /> 
                </Provider>                            
    }
}
