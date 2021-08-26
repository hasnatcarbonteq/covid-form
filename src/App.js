import React from 'react'
import './App.less'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './containers/Home'


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch>
        </Router>
    )
}

export default App
