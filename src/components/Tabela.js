import React from 'react';

export default class Tabela extends React.Component{
    render(){
        return(
          <div>
             <h1>{console.log(this.props.arraycarros)}</h1>
			 {this.props.arraycarros.map(
              row=>
<h1  key={row.Id}>{row.Id}</h1>
              )}
          </div>
        );
    }
}
/*import React from 'react';

export default class Tabela extends React.Component{
    render(){
        return(
          <div>
              {this.props.arrayCarros.map(
              row=>

              )}
              <table classname="TabelaCarros">
                  <thead>
                  <tr>
                      <td>Id</td>
                      <td>Marca</td>
                      <td>Modelo</td>
                      <td>Ano</td>
                  </tr>
                  </thead>

                  <tbody><tr key="{row.Id}">
                      <td>{row.Id}</td>
                      <td>{row.Marca}</td>
                      <td>{row.Modelo}</td>
                      <td>{row.Ano}</td>
                  </tr></tbody>
              </table>
          </div>
        );
    }
}*/