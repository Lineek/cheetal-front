import React, { Component } from 'react';
import {
  FormControl,
  FormGroup,
  ControlLabel
   } from 'react-bootstrap';
import axios from 'axios';

class EtapaForm extends Component {
    constructor () {
      super()
      this.state = {
        schemas: []
      }
      this.theurl='https://jcapi.azurewebsites.net/'
    }

    componentDidMount() {
      axios
        .get(this.theurl + "etapa/")
        .then(response =>
            this.setState({
              schemas: response.data
            })
          )
        .catch(error => console.log(error.response));
    }

    render() {
        return (
          <div>
            <FormGroup controlId="etapaControlsSelect">
              <ControlLabel>Etapa</ControlLabel>
              <FormControl componentClass="select" placeholder="Selecione uma Opção">
                {this.state.schemas.map((e, key) => {
                return <option key={key} value={e.id}>{e.descricao}</option> 
                })}
              </FormControl>
            </FormGroup>
          </div>
        )
    }
}

export default EtapaForm