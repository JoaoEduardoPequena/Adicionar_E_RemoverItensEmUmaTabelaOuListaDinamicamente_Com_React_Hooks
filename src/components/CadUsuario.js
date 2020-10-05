import React,{useState} from "react";
import TabelaListaUsuarios from "./listaDeUsuarios";
import uuid from 'react-uuid'; // modulo npm que tem uma função que permite gerar um id automaticamente


export const CadUsuario=()=>{

    let [usuario, setUsuario]= useState({});   // Variavel de estado para os campos do formulario
    let [listUsuarios,setListUsuarios]= useState([]); // Variavel de estado  para gerenciar ou guardar a tabela - lista de usuarios
    
    // Funcão que será utilizado para o evento onChange quando um campo do formulario for alterado
    const handleInputChangeUsuarios=(event)=>{
       setUsuario({...usuario,[event.target.name]: event.target.value}); // Obter o valor dos campos do formulario
    }
    
    // Funcão que ira permitir inserir os dados na tabela ou componenete listUsuario
    const adicionarUsuarios=(inputsUsuario)=>{
        setListUsuarios( [...listUsuarios, { id: uuid(), ...inputsUsuario } ] ); // Adiciona dentro da listUsuarios todos os valores do campos do formulario, Nota: id:uuid(), esta instrução significa coloca dentro do campo id, um id automatico com a forma uuid(). A função uuid() ira gerar um id automatico sempre que nos adicionar os dados no componenete listUsuario.
    }

    // Esta função será chamdo no Evento onClick no botão Inserir
    const hanleClickAdicionarUsuario=(event)=>{
       event.preventDefault();
       adicionarUsuarios(usuario);
    }

    // Função Para Deletar um usuario na Tabela Lista de Usuarios ou componenete listUsuarios
    const removerUsuario=(Id)=>{
        setListUsuarios(listUsuarios.filter( (deleUsuario)=> deleUsuario.id !== Id ) ); // Faz o filtro ou remove todos aqueles usuarios que são diferentes do Id que está sendo passado como parametro na função.
    }

    
return(

<div className="card">

<div className="card-header text-center">Cadastro De Usuários</div>

<div className="card-body">

<form> 

<div className="container-fluid">

<div className="row">
  <div className="col-md-4">
      <label htmFor="nome_Usuario" >Nome do Usuário</label>
     <input type="text" className="form-control" name="nomeUsuario" value={usuario.nomeUsuario || ""}  onChange={e=>handleInputChangeUsuarios(e)} />
  </div>

  <div className="col-md-4">
     <label htmFor="numerotelefone" >Numero de Telefone</label>
     <input type="number" className="form-control" name="numeroTelefone" value={usuario.numeroTelefone || ""}  onChange={e=>handleInputChangeUsuarios(e)}/>
  </div>

</div>

<div className="row">
  <div className="col-md-4">
     <label htmFor="funcaoUsuario" >Função do Usuario</label>
     <select className="form-control" name="funcaoUsuario" value={usuario.funcaoUsuario || ""}  onChange={e=>handleInputChangeUsuarios(e)}>
        <option value="Supervisor">Supervisor</option>
        <option value="Gerente">Gerente</option>
        <option value="Caixa">Caixa</option>
     </select>
  </div>
</div>

<div className="row mt-1 mb-1">
  <div className="col-sm-9">
      <button type="button" className="btn btn-success" onClick={event=>hanleClickAdicionarUsuario(event)}> Inserir </button>
  </div>
</div>

<div className="row">
   <div className="col-md-12 col-xs-12">
       <TabelaListaUsuarios listUsuarios={listUsuarios} onRemove={removerUsuario} />
   </div>
</div>

</div>

</form> 


</div>


</div>


)

}