import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Row, Col} from 'react-bootstrap';
import './style.scss';
import { Label } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

var pagina = 0;

class Cabecalho extends Component{
	componentDidMount() {
		
		window.onscroll= function(){
			if(pagina == 0)
			{
				if(window.pageYOffset>100)
				{	document.getElementById('cabecalho').style.background = "#23261f";
					pagina = 1;
				}
			}
			else if(pagina ==1){
				if(window.pageYOffset == 0)
				{	document.getElementById('cabecalho').style.background = "none";
					pagina = 0;
				}
			}
		}
	}
		render(){
			return(
			<>
				<Navbar className="cabecalho" id="cabecalho" expand="lg">
				  <Navbar.Toggle aria-controls="basic-navbar-nav" />
				  <Navbar.Collapse id="basic-navbar-nav" >
					<Nav className="mr-auto" style={{width:'100%', justifyContent: 'center', alignItems: 'center'}}>
					 <Link to="home">Home</Link>
					 <Link to="cadastro">Cadastro</Link>
					 <Link to="/">Buscar</Link>
					  {/*<NavDropdown title="Buscar" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					  </NavDropdown>*/}
					</Nav>
				  </Navbar.Collapse>
				</Navbar>
			</>
			)
		}
}
class Circular extends Component{
	render(){
		let cor = this.props.cor;
		return(
			<div style={{background: cor}} className="circular">
				{this.props.children}
			</div>
		)
	}
}

class Inferior extends Component{
	render(){
		return(
			<div className="inferior">
				<br/>
				<h1>Lorem ipsum dolor sit amet consectetur</h1>
				<h3>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua nec nam aliquam sem et tortor consequat id porta nibh</h3>
				<br/><br/><br/><br/>
				<Row className="d-flex justify-content-center">
					<Col xs={12} md={3}>
						<Row className="d-flex justify-content-center">
							<Circular cor="#575757" >
								<i className="balance scale icon"></i>
							</Circular>
						</Row>
						<Row align="center">
							<Col >
								<h2>Ideias</h2>
								<h3> consectetur elit <br/>adipiscing, sed do eiusmod</h3>
							</Col>
						</Row>
					</Col>
					<Col xs={12} md={3}>
						<Row className="d-flex justify-content-center">
							<Circular cor="#575757" >
								<i className="bug icon"></i>
							</Circular>
						</Row>
						<Row align="center">
							<Col >
								<h2>Problemas</h2>
								<h3>tempor incididunt<br/> ut labore et dolore</h3>
							</Col>
						</Row>
					</Col>
					<Col xs={12} md={3}>
						<Row className="d-flex justify-content-center">
							<Circular cor="#879852" >
								<i className="star outline icon"></i>
							</Circular>
						</Row>
						<Row align="center">
							<Col >
								<h2>Pratica</h2>
								<h3>Amet venenatis<br/> urna cursus eget</h3>
							</Col>
						</Row>
					</Col>
					<Col xs={12} md={3}>	
						<Row className="d-flex justify-content-center">
							<Circular cor="#879852" >
								<i className="code icon"></i>
							</Circular>
						</Row>
						<Row align="center">
							<Col >
								<h2>Implementação</h2>
								<h3>Massa enim nec<br/> dui nunc mattis enim</h3>
							</Col>
						</Row>
					</Col>
				</Row>	
			</div>
		)
	}
}

class Informacoes extends Component{
	constructor(props){
		super(props);
		 this.div1 = React.createRef();
		 this.div2 = React.createRef();
		 
		
	}
	componentDidMount(){
		
	}
	moveDiv =(op)=>{
		if(op === 1){ 
			/*this.div1.current.style.opacity ='1';
			this.div1.current.style.transition = 'opacity .5s linear';
			this.div1.current.style.transitionDuration = '0.5s';*/
			this.div1.current.style.display = "none";
			this.div2.current.style.display = "block";
		}
		else if(op === 2){
			this.div2.current.style.display = "none";
			this.div1.current.style.display = "block";
		}
	}
	render(){
		return(
			<div className="informacoes">
				<Row>
				<Col xs={12} md={6} className="lado1" style={{textAlign: 'center'}} align="center">
					<div ref={this.div1} onClick={()=>this.moveDiv(1)}>
						<img src="https://cdn.pixabay.com/photo/2016/08/11/23/55/redwood-national-park-1587301_960_720.jpg" style={{width:'100%', height: '100%'}}/>
					</div>
					<div ref={this.div2} onClick={()=>this.moveDiv(2)} style={{display:'none'}}>
						<img src="https://cdn.pixabay.com/photo/2014/10/10/10/49/forest-483207_960_720.jpg" style={{width:'100%', height: '100%'}}/>
					</div>
					{/*<img src={require("./pessoa.jpg")} style={{width:'60%', height: '200px'}}/>
					<br/>
					<small>Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</small>*/}
				</Col>
				<Col xs={12} md={6} className="lado2" style={{textAlign: 'center'}}>
					<br/><br/>
					<h1>Lateral</h1>
					<h3>Ullamcorper malesuada proin libero nunc. Sed risus pretium quam vulputate dignissim suspendisse. Velit dignissim sodales ut eu sem integer. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Sapien faucibus et molestie ac. Maecenas sed enim ut sem viverra aliquet. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Id neque aliquam vestibulum morbi blandit cursus. Sed velit dignissim sodales ut eu sem integer.</h3>
				</Col>
				</Row>
			</div>
		)
	}
}

class Meio extends Component{
	constructor(props){
		super(props);
		 this.refDiv1 = React.createRef();
	}
	render(){
		return(
			<div className="meio">
				
			</div>
		)
	}
	
}
export default class Home extends Component{
	
	
	render(){
		return(
			<>
			<div className="HomeConteudo">
				<Cabecalho/>
				<br/>
				<div className="textoConteudo" align="center">
					<h1>Cadastro de pessoas</h1>
					<div className="ui inverted divider" style={{width: '30%'}}></div>
					<h3>Site voltado para o cadastro de pessoas produzido com React e backend em PHP!</h3>
					
				</div>
			</div>
			<Inferior/>
			{/*<Meio/>*/}
			<Informacoes/>
			</>
		)
	}
}