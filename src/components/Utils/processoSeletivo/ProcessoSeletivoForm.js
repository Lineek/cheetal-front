import React, { Component } from 'react';
import {
  FormControl,
  Button
   } from 'react-bootstrap';
import axios from 'axios';
import history from '../../../core/history';

class ProcessoSeletivoForm extends Component {
    constructor () {
      super()
      this.state = {
        schemas: []
      }
      this.theurl='https://jcapi-225112.appspot.com/'
    }

    componentDidMount() {
      axios
        .get(this.theurl + "processoseletivo/")
        .then(response =>
            this.setState({
              schemas: response.data
            })
          )
        .catch(error => console.log(error.response));
    }

    render() {
        return (
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th># </th>
                  <th>Processo Seletivo </th>
                  <th>Data Início </th>
                  <th>Data Fim </th>
                  <th>Editar</th>
                </tr>
              </thead>
              <tbody>
                {this.state.schemas.map((e, key) => {
                  if(e.dataInicio !== null && e.dataFim !== null) {
                    return ( 
                      <tr key={key}>
                        <td>{e.id}</td>
                        <td>{e.descricao}</td>
                        <td>{e.dataInicio}</td>
                        <td>{e.dataFim}</td>
                        <td><Button href="" onClick={(k) => { k.preventDefault(); history.push({pathname: '/psedit', search: '?id=' + e.id}); }}><i className="fa fa-pencil" /> Editar</Button></td>
                      </tr>)
                  } else {
                    return ( 
                    <tr key={key}>
                      <td>{e.id}</td>
                      <td>{e.descricao}</td>
                      <td>{}</td>
                      <td>{}</td>
                      <td><Button href="" onClick={(k) => { k.preventDefault(); history.push({pathname: '/psedit', search: '?id=' + e.id}); }}><i className="fa fa-pencil" /> Editar</Button></td>
                    </tr>)
                  }
                })}
              </tbody>
            </table>
          </div>
        )
    }
}

export default ProcessoSeletivoForm