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

class ProcessoSeletivoEdit extends Component {
    constructor (props) {
      super(props);

      this.state = {
        descricao: '',
        dataInicio: null,
        dataFim: null,
        schemas: {}
      };

      this.theurl='https://jcapi-225112.appspot.com/';
    }

    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }

    handleSubmitButton(e) {
      e.preventDefault();
      var x = {
        descricao: this.state.descricao,
        dataInicio: this.state.dataInicio,
        dataFim: this.state.dataFim
      };
        axios
        .post(this.theurl + "processoseletivo/", x)
        .then((response) => { 
          console.log(response);
          if(response.status === 204) { document.getElementById('successPanel').style.display = "block"; };
        })
        .catch(error => {
          document.getElementById('errorPanel').style.display = "block";
          console.log(error.response);
        });
    };

    render() {
        return (
          <div>
            <div className="row">
              <div className="col-lg-12">
                <PageHeader>Criação de Processo Seletivo {this.state.id}: {this.state.schemas.descricao}</PageHeader>
              </div>
            </div>
              <div className="row">
                <div id='successPanel' style={{'display':'none'}}>
                  <Panel header={<span>Processo Seletivo CRIADO com Sucesso!</span>} className="panel-success">
                  </Panel>
                </div>
                <div id='errorPanel' style={{'display':'none'}}>
                  <Panel header={<span>Houve erro ao criar o Processo Seletivo</span>} className="panel-danger">
                  </Panel>
                </div>
               <div className="col-lg-12">
                <Panel header={<span>Criar</span>} >
                  <div className="row">
                    <Form>
                      <div className="col-lg-12">
                        <FormGroup controlId="descricao">
                          <ControlLabel>Descrição</ControlLabel>
                          <FormControl
                            type="text"
                            value={this.state.descricao}
                            placeholder={this.state.schemas.descricao}
                            onChange={this.handleChange} 
                          />
                        </FormGroup>
                      </div>
                      <div className="col-lg-6">
                      <FormGroup controlId="dataInicio">
                          <ControlLabel>Data Ínicio</ControlLabel>
                          <FormControl
                            type="text"
                            value={this.state.dataInicio}
                            placeholder={this.state.schemas.dataInicio}
                            onChange={this.handleChange} 
                          />
                        </FormGroup>
                      </div>
                      <div className="col-lg-6">
                      <FormGroup controlId="dataFim">
                          <ControlLabel>Data Fim</ControlLabel>
                          <FormControl
                            type="text"
                            value={this.state.dataFim}
                            placeholder={this.state.schemas.dataFim}
                            onChange={this.handleChange} 
                          />
                        </FormGroup>
                      </div>
                    </Form>
                  </div>
                  <Button onClick={(e) => this.handleSubmitButton(e)}>Editar</Button>
                </Panel>
              </div>
            </div>
          </div>
        )
    }
}

export default ProcessoSeletivoEdit