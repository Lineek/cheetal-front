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

      this.theurl='https://jcapi-225112.appspot.com/';
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
          };
    }

    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }

    handleSubmitButton(e) {
      e.preventDefault();
      console.log(x);
      if (this.state.id !== null) {
        var x = { 
          id: this.state.id,
          descricao: this.state.descricao,
          dataInicio: this.state.dataInicio,
          dataFim: this.state.dataFim
        };
        
        if (x !== this.state.schemas) {
          axios
          .put(this.theurl + "processoseletivo/" + x.id, x)
          .then((response) => { 
            console.log(response);
            if(response.status === 204) { document.getElementById('successPanel').style.display = "block"; };
          })
          .catch(error => {
            document.getElementById('errorPanel').style.display = "block";
            console.log(error.response);
          });
        }
      } else {
        document.getElementById('errorPanel').style.display = "block";
      }
    };

    render() {
        return (
          <div>
            <div className="row">
              <div className="col-lg-12">
                <PageHeader>Editar Processo Seletivo {this.state.id}: {this.state.schemas.descricao}</PageHeader>
              </div>
            </div>
              <div className="row">
                <div id='successPanel' style={{'display':'none'}}>
                  <Panel header={<span>Processo Seletivo Editado com Sucesso!</span>} className="panel-success">
                  </Panel>
                </div>
                <div id='errorPanel' style={{'display':'none'}}>
                  <Panel header={<span>Houve erro ao criar o Processo Seletivo</span>} className="panel-danger">
                  </Panel>
                </div>
               <div className="col-lg-12">
                <Panel header={<span>Editar</span>} >
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