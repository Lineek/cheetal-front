import React, { Component } from 'react';
import {
  FormControl,
  FormGroup,
  ControlLabel,
  Button
   } from 'react-bootstrap';
import Modal, { Footer, Header, Title, Body } from 'react-bootstrap/lib/Modal';
import axios from 'axios';

class ModalMudancaEtapa extends Component {
    constructor () {
      super()
      this.state = {
        id: 1,
        schemas: []
      }
      this.theurl='https://jcapi-225112.appspot.com/'
    }

    componentDidMount() {
      axios
        .get(this.theurl + "etapa/1")
        .then(response =>
            this.setState({
              schemas: response.data
            })
          )
        .catch(error => console.log(error.response));
    }

    close() {
        this.setState({ showModal: false });
      }

    render() {
        return (
          <Modal
            {...this.props}
          >
            <Header closeButton>
              <Title className="text-center">Parabéns! Você mudou de Etapa!</Title>
            </Header>
            <Body>
              <p> Continue assim, falta só mais um pouco.
              </p>
            </Body>
            <Footer>
              <Button onClick={this.props.onHide}>Fechar</Button>
            </Footer>
          </Modal>
        )
    }
}

export default ModalMudancaEtapa