import React from 'react';
import Tabela from './Tabela';
import Main from './rotas/main';
import Cabecalho from './cabecalho/cabecalho';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component{

    constructor(){
        super();
        this.state=({
            db: []
        });
        this.exibirCarros();
		this.cadPessoa();
    }

    exibirCarros(){
        fetch("http://localhost/reactFile/banco/src/api/")
        .then((response)=>response.json())
        .then((responseJson)=>
        {
            this.setState({
                db: responseJson
            });
        })
    }
	cadPessoa(){
		/*const body = { nome: "teste" }
		fetch("http://localhost/reactFile/banco/src/api/cadPessoa.php",{
		method: 'POST',
		body: JSON.stringify(body)
		})
        .then(function(response) {
		  return response.blob();
		})*/
	}

    render(){
        return(
          <div>
		  <Cabecalho />
		  <Main />
		  {/*    <Tabela arraycarros={this.state.db}></Tabela>*/}
        </div>
        );
    }
}