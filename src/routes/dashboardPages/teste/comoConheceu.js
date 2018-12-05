import React, { PropTypes } from 'react';
import { 
    FormGroup,
    ControlLabel,
    FormControl,
  } from 'react-bootstrap';

const title = 'Teste';

function ComoConheceu(props, context) {
    context.setTitle(title);
    return (
        <div className="card">
            <div className="header">
            <h4>Como Conheceu o projeto Geração Futura?</h4>
            </div>
            <div className="content">
            <form onSubmit>
                <div className="form-group">
                {/* <Field
                    name="comoconheceu"
                    type="text"
                /> */}
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Select</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </FormControl>
                </FormGroup>
                <select name="**SELECIONE**">
                    <option value="**SELECIONE**">**SELECIONE**</option>
                    <option value="id">VALOR BANCO</option>
                </select>
                </div>
                <button type="submit" className="btn btn-fill btn-info btn-label-right">Próximo</button>
            </form>
            </div>
        </div>
    );
}

ComoConheceu.contextTypes = { setTitle: PropTypes.func.isRequired };
export default ComoConheceu;

