import React from 'react';
import { Field, reduxForm } from 'redux-form';
import ControlLabel from 'react-bootstrap';

const validate = values => {
  const errors = {};
  if (!values.password) {
    errors.password = 'Senha é necessária';
  } else if (values.password.length < 6) {
    errors.password = 'Sua senha deve conter 6 caracteres ou mais';
  }
  return errors;
};

const CriarSenha = (
  <div className="card">
    <div className="header">
      <h4>Criar senha</h4>
    </div>
    <div className="content">
      <form onSubmit>
        <div className="form-group">
          <ControlLabel>Senha *</ControlLabel>
          <Field
            name="password"
            type="password"
          />
        </div>
        <button type="submit" className="btn btn-fill btn-info">Próximo</button>
      </form>
    </div>
  </div>
);

export default reduxForm({
  form: 'criarsenha',
  validate,
})(CriarSenha);
