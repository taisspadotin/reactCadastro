import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Row, Col, Carousel} from 'react-bootstrap';
import './style.scss';
import { Label } from 'semantic-ui-react'
import {Link} from 'react-router-dom';



class Cabecalho extends Component{
	constructor(props){
		super(props);
		this.state ={
			pagina: 0
		};
		this.cabecalhoRef = React.createRef(); //current
	}
	componentDidMount() {
		//window.onload = function() {
			window.addEventListener('scroll', this.handleScroll);
		//}
		
	}
	handleScroll =()=>{
		if(this.state.pagina == 0)
			{
				if(window.pageYOffset>100)
				{	if(this.cabecalhoRef.current != null)
					{
						this.cabecalhoRef.current.style.background = "#23261f";
						this.setState({pagina: 1});
					}
				}
			}
			else if(this.state.pagina ==1){
				if(window.pageYOffset == 0)
				{	
					if(this.cabecalhoRef.current != null)
							{this.cabecalhoRef.current.style.background = "none";
							this.setState({pagina: 0});
					}
				}
			}
	}
		render(){
			return(
			<>
				<Navbar className="cabecalho" id="cabecalho" expand="lg" ref={this.cabecalhoRef}>
				  <Navbar.Toggle aria-controls="basic-navbar-nav" />
				  <Navbar.Collapse id="basic-navbar-nav" >
					<Nav className="mr-auto" style={{width:'100%', justifyContent: 'center', alignItems: 'center'}}>
					 <Link to="home">Home</Link>
					 <Link to="cadastro">Cadastro</Link>
					 <Link to="buscar">Buscar</Link>
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
					<Col xs={12} md={3} >	
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
	
	
	render(){
		return(
			<div className="informacoes">
				<Row>
				<Col xs={12} md={6} className="lado1" style={{textAlign: 'center'}} align="center">
					<div style={{margin: '5%'}}>
						<small ><br/>Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.Ullamcorper malesuada proin libero nunc. Sed risus pretium quam vulputate dignissim suspendisse. Velit dignissim sodales ut eu sem integer. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Sapien faucibus et molestie ac. Maecenas sed enim ut sem viverra aliquet. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Id neque aliquam vestibulum morbi blandit cursus. Sed velit dignissim sodales ut eu sem integer.Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.Ullamcorper malesuada proin libero nunc. Sed risus pretium quam vulputate dignissim suspendisse. Velit dignissim sodales ut eu sem integer. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Sapien faucibus et molestie ac. Maecenas sed enim ut sem viverra aliquet. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Id neque aliquam vestibulum morbi blandit cursus. Sed velit dignissim sodales ut eu sem integer.</small>
					</div>
				</Col>
				<Col xs={12} md={6} className="lado2" style={{textAlign: 'center'}}>
					<br/><br/>
					<h1>Lateral</h1>
					<h3>Ullamcorper malesuada proin libero nunc. Sed risus pretium quam vulputate dignissim suspendisse. Velit dignissim sodales ut eu sem integer. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Sapien faucibus et molestie ac. Maecenas sed enim ut sem viverra aliquet. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Id neque aliquam vestibulum morbi blandit cursus. Sed velit dignissim sodales ut eu sem integer.</h3>
					<br/>
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
		<div style={{ width: '100%'}}>
			<Carousel style={{height:"400px"}}>
			  <Carousel.Item style={{height:"400px"}}>
				  
				  <img
				  className="imagem_car"
				  src={require('./gato2.jpg')}
				  alt="First slide"/>
				  
				  
				  
				<Carousel.Caption >
				  <h3>First slide label</h3>
				  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item style={{height:"400px"}}>
				<div className="slides">
					
				</div>
				<Carousel.Caption>
				  <h3>Second slide label</h3>
				  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item style={{height:"400px"}}>
				 <img
				  className="imagem_car"
				  src={require('./mato.jpg')}
				  alt="First slide"
				  
				  />
				

				<Carousel.Caption>
				  <h3>Third slide label</h3>
				  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			  </Carousel.Item>
			</Carousel>
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
			<Meio/>
			<Informacoes/>
			</>
		)
	}
}