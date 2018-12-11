import React, { PropTypes } from 'react';
import {
    FormGroup,
    FormControl,
    Panel,
    Button,
  } from 'react-bootstrap';
  import OrigemForm from "../../../components/Utils/origem/OrigemForm";

const title = 'Inscrição Vestibular - Bandtec';
const origem = <OrigemForm />

function Publico(props, context) {
  context.setTitle(title);
  return (
    <div className="col-md-4 col-md-offset-4">
      <div className="text-center">
        <h1 className="login-brand-text">Inscrição Vestibular</h1>
      </div>

      <Panel header={<h3>Como conheceu o projeto Geração Futura?</h3>}>
        <form role="form">
          <fieldset>
            <div className="form-group">
              {origem}
            </div>
            <Button type="submit" className="btn btn-info" href="/vestibular/DadosPessoais">
                  Próximo
            </Button>
          </fieldset>  
        </form>
      </Panel>
    </div>
  );
}

Publico.contextTypes = { setTitle: PropTypes.func.isRequired };
export default Publico;
