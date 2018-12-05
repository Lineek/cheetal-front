import React, { Component } from 'react';
import {
  PageHeader,
  Button,
  FormControl,
  FormGroup,
  Form,
  ControlLabel,
  Panel
   } from 'react-bootstrap';
import axios from 'axios';


function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

class ProcessoSeletivoEdit extends Component {
    constructor (props) {
      super(props);
      this.state = {
        id: getParameterByName('id'),
        descricao: '',
        dataInicio: null,
        dataFim: null,
        schemas: {}
      };
      this.theurl='https://jcapi.azurewebsites.net/';
    }

    componentDidMount() {
      console.log(this.state.id);
      if (this.state.id !== null) {
        axios
          .get(this.theurl + "processoseletivo/" + this.state.id)
          .then(response =>
              this.setState({
                schemas: response.data
              })
            )
          .catch(error => console.log(error.response));
          }
    }

    handleChangeDescricao(e) {
      this.setState({ descricao: e.target.value });
    }

    render() {
        return (
          <div>
            <div className="row">
              <div className="col-lg-12">
                <PageHeader>Editar Processo Seletivo {this.state.id}: {this.state.schemas.descricao}</PageHeader>
              </div>
            </div>
              <div className="row">
               <div className="col-lg-12">
                <Panel header={<span>Editar</span>} >
                  <div className="row">
                    <Form>
                      <div className="col-lg-6">
                        <FormGroup controlId="inputId">
                          <ControlLabel>Descrição</ControlLabel>
                          <FormControl
                            type="text"
                            value={this.state.descricao}
                            placeholder={this.state.schemas.descricao}
                            onChange={this.handleChangeDescricao} 
                          />
                        </FormGroup>
                      </div>
                      <div className="col-lg-6">
                        <FormGroup controlId="testes">
                          <ControlLabel>Descrição</ControlLabel>
                          <FormControl
                            type="text"
                            value={this.state.descricao}
                            placeholder={this.state.schemas.descricao}
                            onChange={this.handleChangeDescricao} 
                          />
                        </FormGroup>
                      </div>
                    </Form>
                  </div>
                  <Button onClick={() => console.log(this.state.id)}>Click Me</Button>
                </Panel>
              </div>
            </div>
          </div>
        )
    }
}

export default ProcessoSeletivoEdit