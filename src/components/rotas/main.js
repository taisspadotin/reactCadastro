import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../home/home'
import Cadastro from '../cadastro/cadastro';
import Buscar from '../buscar/buscar';

const Main = () =>(
	<Switch>
	<Route exact path="/" component={Home} />
	<Route path="/cadastro" component={Cadastro} />
	<Route path="/buscar" component={Buscar} />
	</Switch>
)
export default Main;