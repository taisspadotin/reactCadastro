export const cpfMask = value => {
  return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

export const telefoneMask = value => {
	return value
	.replace(/\D/g, '')          //Remove tudo o que não é dígito
    .replace(/(\d{2})(\d)/, '($1) $2') //Coloca parênteses em volta dos dois primeiros dígitos
    .replace(/(\d)(\d{4})$/, '$1-$2')   //Coloca hífen entre o quarto e o quinto dígitos
    /*.replace(/\D/g, '').replace(/(\d{2})(\d)(\d{4})(\d{4})$/, '($1) $2 $3-$4')*/
}
/* export function telefoneMask(telefone) {
    
   return textoAjustado;
	
}*/
/*
export function validaEmail = (email) =>{
	let usuario = email.value.substring(0, email.value.indexOf("@"));
    let dominio = email.value.substring(email.value.indexOf("@")+ 1, email.value.length);
 
if ((usuario.length >=1) &&
    (dominio.length >=3) && 
    (usuario.search("@")==-1) && 
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) && 
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&      
    (dominio.indexOf(".") >=1)&& 
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
rturn
}
else{
document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
alert("E-mail invalido");
}
	return true;
}*/