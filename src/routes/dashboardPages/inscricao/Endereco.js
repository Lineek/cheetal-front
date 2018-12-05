import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Select from 'react-select';
import ControlLabel from 'react-bootstrap';

const validate = values => {
  const errors = {};
  if (!values.cep) {
    errors.cep = 'CEP é necessário';
  } else if (values.cep.lenght !== 8) {
    errors.cep = 'CEP inválido';
  }
  return errors;
};

const options = [
    { value: 'AC', label: 'Acre' },
    { value: 'AL', label: 'Alagoas' },
    { value: 'AP', label: 'Amapá' },
    { value: 'AM', label: 'Amazonas' },
    { value: 'BA', label: 'Bahia' },
    { value: 'CE', label: 'Ceará' },
    { value: 'DF', label: 'Distrito Federal' },
    { value: 'ES', label: 'Espírito Santo' },
    { value: 'GO', label: 'Goiás' },
    { value: 'MA', label: 'Maranhão' },
    { value: 'MT', label: 'Mato Grosso' },
    { value: 'MS', label: 'Mato Grosso do Sul' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'PA', label: 'Pará' },
    { value: 'PB', label: 'Paraíba' },
    { value: 'PR', label: 'Paraná' },
    { value: 'PE', label: 'Pernambuco' },
    { value: 'PI', label: 'Piauí' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'RN', label: 'Rio Grande do Norte' },
    { value: 'RS', label: 'Rio Grande do Sul' },
    { value: 'RO', label: 'Rondônia' },
    { value: 'RR', label: 'Roraima' },
    { value: 'SC', label: 'Santa Catarina' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'SE', label: 'Sergipe' },
    { value: 'TO', label: 'Tocantins' },
    { value: 'ES', label: 'Estrangeiro' },
];

const Endereco = (

  <div className="card">
    <div className="header">
      <h4>Endereço</h4>
    </div>
    <div className="content">
      <form onSubmit>
        <div className="form-group">
          <ControlLabel>Logradouro *</ControlLabel>
          <Field
            name="logradouro"
            type="text"
          />
        </div>
        <div className="form-group">
          <ControlLabel>Número *</ControlLabel>
          <Field
            name="numero"
            type="text"
          />
        </div>
        <div className="form-group">
          <ControlLabel>Complemento</ControlLabel>
          <Field
            name="complemento"
            type="text"
          />
        </div>
        <div className="form-group">
          <ControlLabel>Cidade*</ControlLabel>
          <Field
            name="complemento "
            type="text"
          />
        </div>
        <div className="form-group">
          <ControlLabel>Estado *</ControlLabel>
          <Select options={options} />
        </div>
        <div className="form-group">
          <ControlLabel>CEP*</ControlLabel>
          <Field
            name="cep"
            type="text"
          />
        </div>
        <button type="submit" className="btn btn-fill btn-info">Concluir</button>
      </form>
    </div>
  </div>
);

export default reduxForm({
  form: 'endereco',
  validate,
})(Endereco);
