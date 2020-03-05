import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../home/home'
import Cadastro from '../cadastro/cadastro';
const Main = () =>(
	<Switch>
	<Route exact path="/" component={Home} />
	<Route path="/cadastro" component={Cadastro} />
	</Switch>
)
export default Main;