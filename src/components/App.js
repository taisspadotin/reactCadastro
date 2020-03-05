import React from 'react';
import Tabela from './Tabela';
import Main from './rotas/main';
import Cabecalho from './cabecalho/cabecalho';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios, {serviceUrl, onSuccess,onFailure} from 'axios';

export default class App extends React.Component{

    constructor(){
        super();
        this.state=({
            db: []
        });
        this.exibirCarros();
		//this.cadPessoa();
    }

    exibirCarros(){
        /*fetch("http://localhost/apiReact/")
        .then((response)=>response.json())
        .then((responseJson)=>
        {
            this.setState({
                db: responseJson
            });
        })*/
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
		
		/*const body = { nome: "teste" }
		fetch("http://localhost/apiReact/Pessoa.php",{
		method: 'POST',
		body: JSON.stringify(body)
		})
        .then(function(response) {
		  return response.blob();
		})*/
		
	const user = {
      nome: 'tais'
    };	
	
	axios.post(`http://localhost/apiReact/Pessoa.php`, JSON.stringify(user))
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
	  
/*axios.defaults.baseURL = 'http://localhost/apiReact/Pessoa.php';
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.get(serviceUrl, onSuccess, onFailure)
.then(resp => {
console.log("Funcionou");
})
.catch(error => {
console.log(error);
})*/
  
	}

    render(){
        return(
          <div>
		  <Cabecalho />
		  <Main />
		  
		  {   <Tabela arraycarros={this.state.db}></Tabela>}
        </div>
        );
    }
}