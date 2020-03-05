import React, {Component} from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import {Container} from 'react-bootstrap';

const options = [
  { key: 'm', text: 'Masculino', value: 'masculino' },
  { key: 'f', text: 'Feminino', value: 'feminino' },
  { key: 'o', text: 'Outro', value: 'outro' },
]

class Cadastro extends Component{
	constructor(props){
		super(props);
		this.state ={
			value: '',
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
			  nome: 'tais'
			};	
			
			/*axios.post(`http://localhost/apiReact/Pessoa.php`, JSON.stringify(user))
			  .then(res => {
				console.log(res);
				console.log(res.data);
			  })*/
		}
		//alert('yee');
	}
	render(){
			return(
			<>
			<Container>
				 <Form>
					<br/>
					<Form.Field>
					  <label>Nome Completo</label>
					  <input placeholder='Nome Completo' onCChange={} ref={this.setRefNome}/>
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
			</Container>	  
			</>
			)
	}
}
export default Cadastro;