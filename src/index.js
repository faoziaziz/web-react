import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Route, 
    Switch, 
    Link, 
    BrowserRouter as Router 
} from 'react-router-dom'

import App from './App'
import Home from './containers/Home'
import About from './containers/About'
import Login from './containers/Login'

const routing = (
	<Router>
	<div>
	<Route exact path="/" component={Home} />
	<Route exact path="/home" component={Home} />
	<Route exact path="/about" component={About} />
	<Route exact path="/login" component={Login} />
	
    </div>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'))
