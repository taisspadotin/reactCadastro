import React, {Component} from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import {Container, Row, Col, Alert, Modal} from 'react-bootstrap';
import axios, {serviceUrl, onSuccess,onFailure} from 'axios';
import './style.scss';
import Cabecalho from '../cabecalho/cabecalho';
/*import {Link} from 'react-router-dom';*/
import { cpfMask, telefoneMask } from './mask';

class ListaPessoas extends Component{
	
	render(){
		return(
		<>
		<h3>{this.props.nome}</h3>
		</>
		)
	}
}

class Cadastro extends Component{
	constructor(props){
		super(props);
		this.state ={
			nome: '',
			cpf: '',
			email: '',
			telefone: '',
			nascimento: '',
			dados: [],
			registros: 0,
			smShow: false,
			divModal: []
		};
		
		/*REFS DOS INPUTS*/
		this.INome = null;
		this.setRefNome = element =>{
				this.INome = element;
		}
		this.refCpf = React.createRef();
		this.refNascimento = React.createRef();
		this.refEmail = React.createRef();
		this.refId = React.createRef();
		this.refTelefone = React.createRef();
		
	}
	
	componentDidMount() {
		axios.defaults.baseURL = 'http://localhost/apiReact/Pessoa.php';
		axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.get(serviceUrl, onSuccess, onFailure)
		.then(resp => {
			let d = (resp.data);
			this.setState({dados:  d});
			//console.log(this.state.dados);
			this.setState({registros: d.length});
			//console.log(resp.data);
			
		})
		.catch(error => {
			console.log(error);
		})
	}
	
	Cadastrar = () =>{
		if(this.INome.value === ''){
			this.launch_modal('Erro de cadastro','preencha o nome!','Alerta');
			this.INome.focus();
		}
		else if(this.refEmail.current.value === ''){
			this.launch_modal('Erro de cadastro','Preencha o Email','Alerta');
			this.refEmail.current.focus();
		}
		else if(this.refCpf.current.value === ''){
			this.launch_modal('Erro de cadastro','Preencha o CPF!','Alerta');
			this.refCpf.current.focus();
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
				//console.log(res.data);
			  })
		}
		//alert('yee');
	}
	
	launch_modal =(titulo, mensagem, classe)=>{
		let divModal = [titulo, mensagem, classe]
			this.setState({divModal});
			this.setState({smShow:true});
			
	}
	CarregaDados =(nome, id, cpf, nascimento, email, telefone)=>{
		//alert('teste');
		this.INome.value = nome;
		this.refCpf.current.value = cpf; 
		this.refId.current.value = id; 
		this.refNascimento.current.value = nascimento; 
		this.refEmail.current.value = email; 
		this.refTelefone.current.value = telefone; 
		
	}
	Alterar = () =>{
		alert(this.refId.current.value);
	}
	Excluir =() =>{
		let id = this.refId.current.value;
		const user = {
			 id: id
			};	
			
			axios.delete(`http://localhost/apiReact/Pessoa.php`, {params: {id: id}});
		
	}
	closemodal =() =>{
		this.setState({smShow: false});
	}
	render(){
		let tabela_exibe = '';
		if(this.state.registros != 0)//Se tiver algum registro na tabela ele insere a parte de busca com cabeçalho no corpo
		{
			tabela_exibe = <table className="ui celled table tabela">
								<thead>
									<tr>
										<th>Name</th>
										<th>CPF</th>
										<th>Nascimento</th>
									</tr>
								</thead>
								 <tbody>
								    {this.state.dados.map((row)=> 
										<tr key={row.id} onClick={()=>this.CarregaDados(row.nome, row.id, row.cpf, row.nascimento, row.email, row.telefone)}>
											<td data-label="nome">{row.nome}</td>
											<td data-label="cpf">{row.cpf}</td>
											<td data-label="nascimento">{row.nascimento}</td>
											
										</tr>
									)}	
								</tbody>	
							</table>;
		}
		else{
			tabela_exibe = 
			<Alert variant="danger">
				<Alert.Heading>Nenhum registro encontrado!</Alert.Heading>
				<p>
				  Verifique se o sistema está conectado ao banco de dados corretamente,
				   se esse for o caso verifique se existem registros no banco.
				  </p>
			  </Alert>;
		}
		
		
			return(
			<>
			<Cabecalho/>
			
			<Container>
				 <Form>
					<Modal
					size="sm"
					show={this.state.smShow}
					onHide={() =>this.closemodal()}
					aria-labelledby="example-modal-sizes-title-sm"
					>
						<Modal.Header className={this.state.divModal[2]} closeButton>
					  <Modal.Title id="example-modal-sizes-title-sm">
						{this.state.divModal[0]}
					  </Modal.Title>
					</Modal.Header>
					<Modal.Body className={this.state.divModal[2]}>
					{this.state.divModal[1]}
					</Modal.Body>
				  </Modal>
		  
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
						<div className="label-float" >
							<input type="email" ref={this.refEmail} onInput={(e) => this.setState({email: e.target.value})} placeholder=" " />
							<label>Email</label>
						</div>
					</Col>
					<Col  xs={12} md={4}>
						<div className="label-float">
							<input type="text" ref={this.refTelefone} onInput={(e) => this.setState({telefone: telefoneMask(e.target.value)})} value={this.state.telefone} maxlength="15" placeholder=" " />
							<label>Telefone</label>
						</div>
					</Col>
				</Row>
				<Row className="show-grid my-2">
					<Col xs={12} md={6}>
						<div className="label-float">
							<input type="text" ref={this.refNascimento} placeholder=" " />
							<label>Nascimento</label>
						</div>
					</Col>
					<Col xs={12} md={6}>
						<div className="label-float">
							<input type="text" ref={this.refCpf} onInput={(e) => this.setState({cpf: cpfMask(e.target.value)})} value={cpfMask(this.state.cpf)} placeholder=" " />
							<label>CPF</label>
						</div>
					</Col>
					<input type="hidden" ref={this.refId}/>
					{/*<Col xs={12} md={2}>
						<div className="label-float">
							<Label>Ativo</Label>
							<Switch {...this.state} innerLabelChecked="on" innerLabel="off" />
						</div>
					</Col>*/}
					
				</Row>	
				<Row className="show-grid my-4">
					<Col  align="center">
					
						<button className="botaoanimado">
							<div className="ui animated button" tabIndex="0">
							  <div className="visible content">Limpar</div>
							  <div className="hidden content">
								<i className="eraser icon"></i>
							  </div>
							</div>
						</button>
					
						<button className="botaoanimado" onClick={this.Cadastrar}>
							<div className="ui animated button" tabIndex="0">
							  <div className="visible content">Cadastar</div>
							  <div className="hidden content">
								<i className="arrow right icon"></i>
							  </div>
							</div>
						</button>
					
						<button className="botaoanimado" onClick={()=>this.Alterar()}>
							<div className="ui animated button" tabIndex="0">
							  <div className="visible content">Alterar</div>
							  <div className="hidden content">
								<i className="pencil alternate icon"></i>
							  </div>
							</div>
						</button>
						
						<button className="botaoanimado" onClick={()=>this.Excluir()}>
							<div className="ui animated button" tabIndex="0">
							  <div className="visible content">Excluir</div>
							  <div className="hidden content">
								<i className="trash alternate icon"></i>
							  </div>
							</div>
						</button>
					</Col>					
				</Row>
				<Row className="show-grid my-4" align="center">
						<Col align="center">
							{tabela_exibe}
						</Col>
					</Row>
				</Form>
				
			</Container>	  
			</>
			)
	}
}
export default Cadastro;