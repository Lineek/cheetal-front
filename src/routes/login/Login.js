/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes, Component } from 'react';
// import { Panel, Input, Button } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import { FormGroup, FormControl, Checkbox } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';
import history from '../../core/history';
import axios from 'axios'

const title = 'Portal do Candidato - BandTec';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      remember: false,
      submit: false,
      email: "",
      password: "",
      type: "",
      schema: {}
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submit: true });
      const req = axios
        .get('https://jcapi-225112.appspot.com/pessoa/validacao?email=' + this.state.email + '&senha=' + this.state.password)
        .then(response => {
          console.log(response.data)
          if (response.status === 200) {
            console.log(response.data.origem)
            if (response.data.origem === null || response.data.origem === undefined) {
              this.setState({type: "admin"});
              localStorage.setItem("userId", response.data.id);
              localStorage.setItem("userName", response.data.nome);
              localStorage.setItem("userCargo", response.data.cargo);
              localStorage.setItem("userType", "admin");
              history.push('/')
            } else {
              this.setState({type: "user"})
              localStorage.setItem("userId", response.data.id);
              localStorage.setItem("userName", response.data.nome);
              localStorage.setItem("userType", "user");
              history.push('/teste')
            }
            this.setState({schema: response.data})
          }
        })
        .catch(error => { 
          document.getElementById('errorPanel').style.display = "block";
         console.log(error.response)});
  }

  render() {
    const logo = require('../../components/Header/logo_bandtec_ds_azul.png');
    return (
        <div className="col-md-4 col-md-offset-4">
          <div className="hidden-sm-down">
            <div style={{'visibility':'hidden'}}>
              <Panel header={<h3></h3>} className="login-panel" />
            </ div>
            <div className="text-center">
              <img src={logo} alt="Bandtec" title="Bandtec" />
            </div>
          </div>
        <Panel header={<h3>Por favor, entre com sua conta</h3>} className="login-panel">
          <div id='errorPanel' style={{'display':'none'}}>
              <Panel header={<span>Email ou senha inválido</span>} className="panel-danger">
              </Panel>
          </div>
          <form role="form" disabled={this.state.submit} onSubmit={(e) => { this.handleSubmit(e); }}>
            <fieldset>
              <FormGroup controlId="email" bsSize="large">
                <FormControl
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="name"
                />
              </FormGroup>

              <FormGroup controlId="password" bsSize="large">
                <FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Senha"
                  type="password"
                  name="password"
                />
              </FormGroup>
              <Button type="submit" disabled={!this.validateForm()} bsSize="large" bsStyle="success" block>Entrar</Button>
            </fieldset>
          </form>

        </Panel>

      </div>
    )
  }
}

Login.contextTypes = { setTitle: PropTypes.func.isRequired };
export default withStyles(s)(Login)