import React, { Component } from 'react';
import {
  FormControl,
  FormGroup,
  ControlLabel
   } from 'react-bootstrap';
import axios from 'axios';
import PropTypes from 'prop-types'
import { isNullOrUndefined } from 'util';

class EtapaForm extends Component {
    constructor (props) {
      super(props)
      this.state = {
        id: 1,
        idEtapa: null,
        inverted: "",
        schemas: {},
        avaliacao: [],
        calendarioEtapa: null
      }
      this.theurl='https://jcapi-225112.appspot.com/'
    }

    handleClick(e) {
        
    }

    render() {
        const IdEtapa = this.props.IdEtapa;
        if (IdEtapa !== null) {
            axios
            .get(this.theurl + "etapa/" + this.props.IdEtapa)
            .then(response =>
                this.setState({
                schemas: response.data
                })
            )
            .catch(error => console.log(error.response));

            // Informações da avaliação
            axios
            .get(this.theurl + "avaliacao/etapa/" + this.props.IdEtapa)
            .then(response =>
                this.setState({
                avaliacao: response.data
                })
            )
            .catch(error => console.log(error.response));
        }

        const calendarioEtapa = this.props.calendarioEtapaId;
        if (calendarioEtapa === isNullOrUndefined) {
            axios
            .get(this.theurl + "calendarioetapa/" + this.props.IdEtapa)
            .then(response =>
                this.setState({
                calendarioEtapa: response.data
                })
            )
            .catch(error => console.log(error.response));
        }

        return (
          <li className={this.props.inverted}>
            <div className={"timeline-badge" + this.props.color}><i className={this.props.icone} /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title">{this.state.schemas.descricao}</h4>
              </div>
              <div className="timeline-body">
                <h5>Nesta etapa você terá as seguintes avaliações:</h5>
                    <ol>
                        {this.state.avaliacao.map((e, key) => {
                            return <div key={key}>
                                <h4 value={e.id}>{e.titulo}</h4>
                                <p>{e.descricao}</p>
                                </div> 
                        })}
                    </ol>
              </div>
            </div>
          </li>
        )
    }
}

export default EtapaForm