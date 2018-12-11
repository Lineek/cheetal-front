import React, { PropTypes } from 'react';
import history from '../../../core/history';
// import reduxForm from 'redux-form';
import {
  Radio,
  FormControl,
  Col,
  ControlLabel,
  Button,
  Panel,
} from 'react-bootstrap';
// const validate = values => {
//   const errors = {};
//   if (!values.rg) {
//     errors.rg = 'RG Inválido';
//   } else if (values.rg.lenght > 9) {
//     errors.rg = 'Digite seu RG sem pontos ou traços';
//   }
//   if (!values.cpf) {
//     errors.cpf = 'CPF Inválido';
//   } else if (values.cpf.lenght > 11) {
//     errors.cpf = 'Digite seu CPF sem pontos ou traços';
//   }
//   if (values.email !== undefined) {
//     errors.email = 'Email is required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }
//   return errors;
// };

const title = 'Dados Pessoais';

function DadosPessoais(props, context) {
  context.setTitle(title);

  return (
    <div className="col-md-4 col-md-offset-4">
      <div className="text-center">
        <h1 className="login-brand-text">Inscrição Vestibular</h1>
      </div>

      <Panel header={<h3>Dados Pessoais</h3>}>
        <form role="form">
          <div className="form-group">
            <ControlLabel>Nome Completo *</ControlLabel>
            <FormControl
              name="nome"
              type="text"
            />
          </div>
          <div className="form-group">
            <ControlLabel>Email *</ControlLabel>
            <FormControl
              name="email"
              type="email"
            />
          </div>
          <div className="form-group">
            <ControlLabel>Data de Nascimento*</ControlLabel>
            <FormControl
              name="date"
              type="date"
            />
          </div>
          <div className="form-group">
            <ControlLabel>RG *</ControlLabel>
            <FormControl
              name="rg"
              type="text"
            />
          </div>
          <div className="form-group">
            <ControlLabel>CPF *</ControlLabel>
            <FormControl
              name="cpf"
              type="text"
            />
          </div>
          <div className="form-group">
            <ControlLabel col-md-3>Sexo *</ControlLabel>
            <Col>
              <Radio inline name='sexo'>
                Masculino
              </Radio>
              {' '}
              <Radio inline name='sexo'>
                Feminino
              </Radio>
              {' '}
              <Radio inline name='sexo'>
                Não declarado
              </Radio>
            </Col>
          </div>
          <div className="form-group">
            <ControlLabel>Nome da Mãe *</ControlLabel>
            <FormControl
              name="mae"
              type="text"
            />
            <Col>
              <Radio inline>
                Não declarado
                </Radio>
            </Col>
          </div>
          <div className="form-group">
            <ControlLabel>Nome do Pai *</ControlLabel>
            <FormControl
              name="pai"
              type="text"
            />
            <Col>
              <Radio inline>
                Não declarado
                </Radio>
            </Col>
          </div>
          <div className="form-group">
            <ControlLabel>Telefone *</ControlLabel>
            <FormControl
              name="telefone"
              type="text"
            />
          </div>
          <div className="form-group">
            <ControlLabel>Celular *</ControlLabel>
            <FormControl
              name="celular"
              type="text"
            />
          </div>
          <Button
            type="submit" className="btn btn-info"
            onClick={(event) => { history.push('/vestibular/endereco'); }}
          >Próximo</Button>
        </form>
      </Panel>
    </div>
  );
}

DadosPessoais.contextTypes = { setTitle: PropTypes.func.isRequired };
export default DadosPessoais;
// export default reduxForm({
//   form: 'dadosPessoais',
//   validate,
// })(dadosPessoais);
