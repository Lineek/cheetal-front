import React, { PropTypes } from 'react';
import {
  FormControl,
  FormGroup,
  ControlLabel,
  Button,
  Panel,
} from 'react-bootstrap';

// const validate = values => {
//   const errors = {};
//   if (!values.cep) {
//     errors.cep = 'CEP é necessário';
//   } else if (values.cep.lenght !== 8) {
//     errors.cep = 'CEP inválido';
//   }
//   return errors;
// };

const title = 'Inscrição Vestibular - Bandtec';

function Endereco(props, context) {
  context.setTitle(title);
  return (
    <div className="col-md-4 col-md-offset-4">
      <div className="text-center">
        <h1 className="login-brand-text">Inscrição Vestibular</h1>
      </div>

      <Panel className="panel-orange" header={<h3>Endereço</h3>}>

        <form role="form">
          <div className="form-group">
            <ControlLabel>Logradouro *</ControlLabel>
            <FormControl
              name="logradouro"
              type="text"
            />
          </div>
          <div className="form-group">
            <ControlLabel>Número *</ControlLabel>
            <FormControl
              name="numero"
              type="text"
            />
          </div>
          <div className="form-group">
            <ControlLabel>Complemento</ControlLabel>
            <FormControl
              name="complemento"
              type="text"
            />
          </div>
          <div className="form-group">
            <ControlLabel>Cidade*</ControlLabel>
            <FormControl
              name="complemento "
              type="text"
            />
          </div>
          <div className="form-group">
          <ControlLabel>Estado *</ControlLabel>
            <FormGroup controlId="formControlsEstado">
              <FormControl componentClass="select">
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
                <option value="ES">Estrangeiro</option>
              </FormControl>
            </FormGroup>
          </div>
          <div className="form-group">
            <ControlLabel>CEP*</ControlLabel>
            <FormControl
              name="cep"
              type="text"
            />
          </div>
          <Button type="submit" className="btn btn-cheetal" href="/vestibular/criarSenha">
                Próximo
          </Button>
        </form>
      </Panel>
    </div>
  );
}

Endereco.contextTypes = { setTitle: PropTypes.func.isRequired };
export default Endereco;

// export default reduxForm({
//   form: 'endereco',
//   validate,
// })(Endereco);
