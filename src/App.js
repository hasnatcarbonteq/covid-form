import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from './Containers/HomeContainer/HomeContainer'
import SignupContainer from './Containers/SignupContainer/SignupContainer'


function App() {

    return (
        <Router>
            <Switch>
                <Route path="/" component={HomeContainer} exact />
                <Route path="/signup" component={SignupContainer} exact />
            </Switch>
        </Router>
    )
}

export default App
