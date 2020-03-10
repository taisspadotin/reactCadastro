import React, {Component} from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import {Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import './style.scss';
import Cabecalho from '../cabecalho/cabecalho';;

const options = [
  { key: 'm', text: 'Masculino', value: 'masculino' },
  { key: 'f', text: 'Feminino', value: 'feminino' },
  { key: 'o', text: 'Outro', value: 'outro' },
]

class Cadastro extends Component{
	constructor(props){
		super(props);
		this.state ={
			nome: '',
			cpf: '',
			email: '',
			telefone: '',
			nascimento: ''
		};
		
		/*REFS DOS INPUTS*/
		this.INome = null;
		this.setRefNome = element =>{
				this.INome = element;
		}
	}
	
	Cadastrar = () =>{
		if(this.INome.value==''){
			alert("Preencha o nome");
			this.INome.focus();
		}
		else{
			//chamando a api para cadastro
			const user = {
			  nome: this.state.nome,
			  email: this.state.email,
			  cpf: this.state.cpf,
			  nascimento: this.state.nascimento,
			  telefone: this.state.telefone
			};	
			
			axios.post(`http://localhost/apiReact/Pessoa.php`, JSON.stringify(user))
			  .then(res => {
				if(res.data == 'erro'){
					alert('Erro ao inserir os dados');
				}
				else{
					alert('Dados inseridos com sucesso!');
				}
				console.log(res.data);
			  })
		}
		//alert('yee');
	}
	
	render(){
			return(
			<>
			<Cabecalho/>
			
			<Container>
				 <Form>
					<br/>
					<Row className="show-grid my-4">
					<Col className="Titulo">
					<h3>Preencha os dados corretamente para realizar o cadastro de pessoa</h3>
					</Col>
				</Row>
				<Row className="show-grid my-2">
					<Col>
						<div className="label-float">
						<div className="sub">
							<input type="text" onInput={(e) => this.setState({nome: e.target.value})}  ref={this.setRefNome} placeholder=" " />
							<label>Nome</label>		
							<small>Preencha o nome completo</small>		
						</div>
						</div>
					</Col>
				</Row>
				<Row className="show-grid my-2">
					<Col  xs={12} md={8}>
						<div className="label-float">
							<input type="text" onInput={(e) => this.setState({email: e.target.value})} placeholder=" " />
							<label>Email</label>
						</div>
					</Col>
					<Col  xs={12} md={4}>
						<div className="label-float">
							<input type="text" onInput={(e) => this.setState({telefone: e.target.value})} placeholder=" " />
							<label>Telefone</label>
						</div>
					</Col>
				</Row>
				<Row className="show-grid my-2">
					<Col xs={12} md={6}>
						<div className="label-float">
							<input type="text"  placeholder=" " />
							<label>Nascimento</label>
						</div>
					</Col>
					<Col xs={12} md={6}>
						<div className="label-float">
							<input type="text" onInput={(e) => this.setState({cpf: e.target.value})} placeholder=" " />
							<label>CPF</label>
						</div>
					</Col>
					{/*<Col xs={12} md={2}>
						<div className="label-float">
							<Label>Ativo</Label>
							<Switch {...this.state} innerLabelChecked="on" innerLabel="off" />
						</div>
					</Col>*/}
					
				</Row>	
				<Row className="show-grid my-4">
					<Col  align="center">
						<button className="ui button">Limpar</button>
						<Button onClick={this.Cadastrar}>Cadastrar</Button>
					</Col>	
				</Row>
				{/*<Form.Field>
					  <label>Nome Completo</label>
					  <input placeholder='Nome Completo' onInput={(e) => this.setState({nome: e.target.value})}  ref={this.setRefNome}/>
					</Form.Field>
					<Form.Field>
					  <label>Email</label>
					  <input placeholder='Email' />
					</Form.Field>
					<Form.Group widths='equal'>
					  <Form.Input fluid label='Data de nascimento' placeholder='00/00/0000' />
					  <Form.Select
						fluid
						label='Genero'
						options={options}
						placeholder='Genero'
					  />
					</Form.Group>
					<Button onClick={this.Cadastrar}>Cadastrar</Button>
				  </Form>
				  aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>
				  aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>
				  aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>
				  aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>
				  aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>aaaa<br/>
				*/}
				</Form>
			</Container>	  
			</>
			)
	}
}
export default Cadastro;