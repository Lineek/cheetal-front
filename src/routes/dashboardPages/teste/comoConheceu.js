import React, { PropTypes } from 'react';
import { 
    PageHeader,
    FormGroup,
    ControlLabel,
    FormControl,
    Panel,
  } from 'react-bootstrap';
import OrigemForm from "../../../components/Utils/origem/OrigemForm";
import EtapaForm from "../../../components/Utils/etapa/EtapaForm";

const title = 'Teste';
const origem = <OrigemForm />
const etapa = <EtapaForm />
function ComoConheceu(props, context) {
    context.setTitle(title);
    return (
        <div>
          <div className="row">
            <div className="col-lg-12">
              <PageHeader>Como Conheceu</PageHeader>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Panel header={<span>Consulta</span> } >
              {/* <Button type="submit" onClick={(e) => ProcessoOptions()}>Reload</Button> */}
                {etapa}
                {origem}
                {/* <Button type="button" className="col-lg-3" onClick={() => history.push('/pscriar')}>Criar Novo Processo Seletivo</Button> */}
              </ Panel>
            </div>
          </div>
        </div>
    );
}

ComoConheceu.contextTypes = { setTitle: PropTypes.func.isRequired };
export default ComoConheceu;

