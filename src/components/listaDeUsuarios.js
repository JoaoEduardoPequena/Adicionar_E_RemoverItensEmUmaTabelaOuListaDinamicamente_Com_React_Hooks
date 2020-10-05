import React,{Fragment} from "react";

export default function TabelaListaUsuarios ( { listUsuarios , onRemove } ) {


    return(
    <Fragment>
        {listUsuarios.length===0? null :
        <table className="table table-bordered">
            <thead className="table table-sm table-primary">
                <tr>
                   <th hidden={true}>Id</th>
                    <th>Nome do Usuario</th>
                    <th>Número do Telefone</th>
                    <th>Função</th>
                    <th width="10px"></th>
                 </tr>
              </thead>
               <tbody>
                   {listUsuarios.map( (itemUsuario)=>{
                   return (
                    <tr key={itemUsuario.id}>
                        <td hidden={true}>{itemUsuario.id}</td>
                        <td>{itemUsuario.nomeUsuario}</td>
                        <td>{itemUsuario.numeroTelefone}</td>
                        <td>{itemUsuario.funcaoUsuario}</td>
                        <td>
                          <button type="button" className="btn btn-danger" onClick={()=>onRemove(itemUsuario.id)}> Eliminar </button>
                        </td>
                     </tr>
                     )
                })
               }
            </tbody>
            </table>
        }
    </Fragment>
    );

}