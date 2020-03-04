<?php
include("ClassConexao.php");

class ClassPessoa extends ClassConexao{

    public function cadastroPessoa($nome)
    {
		
		$BFetch=$this->conectaDB()->prepare("INSERT INTO cadastro (nome) values ('$nome');");
        $BFetch->execute();
		
        header("Access-Control-Allow-Origin: *");
        header("Content-type: application/json");
		
      
    }
}