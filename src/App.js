import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from './Containers/HomeContainer/HomeContainer'
import SignupContainer from './Containers/SignupContainer/SignupContainer'
import { Provider } from "react-redux";
import store from './redux/store'


function App() {

    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" component={HomeContainer} exact />
                    <Route path="/signup" component={SignupContainer} exact />
                </Switch>
            </Router>
        </Provider>
    )
}

export default App
