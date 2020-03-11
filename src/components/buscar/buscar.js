import React,{Component} from 'react';
import Cabecalho from '../cabecalho/cabecalho';
import {Container, Row, Col} from 'react-bootstrap';
import axios, {serviceUrl, onSuccess,onFailure} from 'axios';

class Tabela extends Component{
	render(){
		return(
		<tr>
			<td data-label="nome">{this.props.nome}</td>
			<td data-label="cpf">{this.props.cpf}</td>
			<td data-label="nascimento">{this.props.nascimento}</td>
			
		</tr>
		)
	}
}

class Informacoes extends Component{
	constructor(props){
		super(props);
		this.state = {
			nome: '',
			cpf: '',
			data: [],
			tabela: '',
			registros: 0
		};
		this.inputNome = null;
		this.setRefNome = element =>{
			this.inputNome = element;
		}
		
		this.divTable = null;
		this.setRefTable = element =>{
			this.divTable = element;
		}
		
	}
	
	ComponentDidMouth(){
		
	}
	
	listar =()=>{
		 
			/*var data = [
		  {
			nome: 'Butters',
			idade: 3, 
			cpf: '491.456.652'
		  },
		  {
			nome: 'Lizzy',
			idade: 3, 
			cpf: '491.456.652'
		  },
		  {
			nome: 'Red',
			idade: 3, 
			cpf: '491.456.652'
		  },
		  {
			nome: 'Joey',
			idade: 3, 
			cpf: '491.456.652'
		  },
		];*/
		axios.defaults.baseURL = 'http://localhost/apiReact/Pessoa.php';
		axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.get(serviceUrl, onSuccess, onFailure)
		.then(resp => {
			let d = (resp.data);
			this.setState({data:  d});
			this.setState({registros: d.length});
			console.log(this.state.dados);
			//console.log(resp.data);
			
		})
		.catch(error => {
			console.log(error);
		})
		//this.setState({data});
		
		//alert('teste');
	}
	render(){
		let tabela_exibe = '';
		if(this.state.registros != 0)//Se tiver algum registro na tabela ele insere a parte de busca com cabeçalho no corpo
		{
			tabela_exibe = <table className="ui celled table">
								<thead>
									<tr>
										<th>Name</th>
										<th>CPF</th>
										<th>Nascimento</th>
									</tr>
								</thead>
								 <tbody>
								    {this.state.data.map((row)=> 
										<Tabela nome={row.nome} key={row.id} email={row.email} telefone={row.telefone} nascimento={row.nascimento} cpf={row.cpf}/>
									)}	
								</tbody>	
							</table>;
		}
		
		return(
			<>
				<form onSubmit={this.handleSubmit}>
					<Row className="show-grid my-4">
						<Col>
							<div className="label-float">
								<input type="text" onInput={(e) => this.setState({nome: e.target.value})}  ref={this.setRefNome} placeholder=" " />
								<label>Nome</label>	
							</div>
						</Col>
					</Row>
					<Row className="show-grid my-4">
						<Col>
							<div className="label-float">
									<input type="text" onInput={(e) => this.setState({cpf: e.target.value})} placeholder=" " />
									<label>CPF</label>
								</div>
						</Col>
					</Row>	
					<Row className="show-grid my-4" align="center">
						<Col align="center">
								<div className="ui animated button" tabIndex="0" onClick={()=>this.listar()}>
								  <div className="visible content">Buscar</div>
								  <div className="hidden content">
									<i className="right arrow icon"></i>
								  </div>
								</div>
						</Col>
					</Row>
					
					<Row className="show-grid my-4" align="center">
						<Col align="center">
							{tabela_exibe}
						</Col>
					</Row>
					
				</form>
			</>
		)
	}
}

class Buscar extends Component{
	render(){
		return(
			<>
			<Cabecalho/>
			<Container>
				<Informacoes/>
			</Container>
			</>
		)
	}
}

export default Buscar;