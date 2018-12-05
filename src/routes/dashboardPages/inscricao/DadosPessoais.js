import React from 'react';
// import { reduxForm } from 'redux-form';
// import {ControlLabel, FormControl} from 'react-bootstrap';

const validate = values => {
  const errors = {};
  if (!values.rg) {
    errors.rg = 'RG Inválido';
  } else if (values.rg.lenght > 9) {
    errors.rg = 'Digite seu RG sem pontos ou traços';
  }
  if (!values.cpf) {
    errors.cpf = 'CPF Inválido';
  } else if (values.cpf.lenght > 11) {
    errors.cpf = 'Digite seu CPF sem pontos ou traços';
  }
  if (values.email !== undefined) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

function DadosPessoais(props, context) {
  <div className="card">
    <div className="header">
      <h4>Dados Pessoais</h4>
    </div>
    <div className="content">
      {/* <form onSubmit>
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
          <div className="col-md-9 checkbox-group">
            <FormControl
              name="radioGroupSex"
              type="radio"
              label="Masculino"
              value="masculino"
            />
            <FormControl
              name="radioGroupSex"
              type="radio"
              label="Feminino"
              value="feminino"
            />
            <FormControl
              name="radioGroupSex"
              type="radio"
              label="Não declarado"
              value="sexonaodeclarado"
            />
          </div>
        </div>
        <div className="form-group">
          <ControlLabel>Nome da Mãe *</ControlLabel>
          <FormControl
            name="mae"
            type="text"
          />
          <FormControl
            name="radioMae"
            type="radio"
            label="Não declarado"
            value="maenaodeclarado"
          />
        </div>
        <div className="form-group">
          <ControlLabel>Nome do Pai *</ControlLabel>
          <FormControl
            name="pai"
            type="text"
          />
          <FormControl
            name="radioPai"
            type="radio"
            label="Não declarado"
            value="painaodeclarado"
          />
        </div>
        <div className="form-group">
          <ControlLabel>Telefone *</ControlLabel>
          <FormControl
            name="telefone"
            type="text"
          />
          <ControlLabel>Celular *</ControlLabel>
          <FormControl
            name="celular"
            type="text"
          />
        </div>
        <button type="submit" className="btn btn-info">Próximo</button>
      </form> */}
    </div>
  </div>
}

export default DadosPessoais;
