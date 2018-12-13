import React, { Component } from 'react';
import {
  Panel
   } from 'react-bootstrap';
import axios from 'axios';
import Etapa from './Etapa';
import Modal from './Modal';
import { isNullOrUndefined } from 'util';

class EtapaForm extends Component {
    constructor () {
      super()
      this.state = {
        schemas: {},
        showModal: false,
        etapaId: null,
        calendarioEtapaId: null
      };
      this.theurl='https://jcapi-225112.appspot.com/';
    }

    componentDidMount() {
      axios
        .get(this.theurl + "pessoa/" + localStorage.getItem('userId'))
        .then(response => {
            this.setState({schemas: response.data});
            if (response.data.mudancaEtapa) {
                try {
                    if (parseInt(localStorage.getItem('ultimaEtapa')) !== response.data.etapa.id) {
                        this.setState({showModal: true});
                    }
                } catch (error){
                    localStorage.setItem('ultimaEtapa', response.data.etapa.id);
                    this.setState({showModal: true});
                }
            };
            console.log(this.state.showModal);
            this.setState({etapaId: response.data.etapa.id});
            console.log(this.state.etapaId);
            localStorage.setItem('ultimaEtapa', response.data.etapa.id);
            }
          )
        .catch(error => console.log(error.response));
    }

    

    render() {
        let close = () => this.setState({ showModal: false });
        let etapas = [];

        if (this.state.etapaId !== null) {
            for (let i = this.state.etapaId; i >= 1; i--) {
                etapas.push(i);
            }
            etapas = etapas.map((x, i, arr) => {
                let calendario = null;
                let icone = "fa fa-check";
                let inverted = "";
                let color = "";
                let timeline = "";
                if(arr.length - 1 === i && this.state.calendarioEtapaId !== isNullOrUndefined ) {
                    calendario=this.state.calendarioEtapaId;
                    icone = "fa fa-book";
                    color = " warning";
                    timeline = "warning";
                }
                if (i % 2 === 1) { inverted="timeline-inverted"; }
                
                return <Etapa key={i} inverted={inverted} icone={icone} calendarioEtapaId={calendario} color={color} IdEtapa={i + 1} timeline={timeline} />;
                })
        }

        return (
                <Panel className="row-margin panel-orange2" header={<span><i className="fa fa-clock-o fa-fw" /> Jornada de {localStorage.getItem('userName')}</span>}>
                    <div>
                        <ul className="timeline">
                            {etapas}
                        </ul>
                    </div>
                    <Modal show={this.state.showModal} onHide={close} />
                </Panel>
        )
    }
}

export default EtapaForm