import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ComoConheceu = (
  <div className="card">
    <div className="header">
      <h4>Como Conheceu o projeto Geração Futura?</h4>
    </div>
    <div className="content">
      <form onSubmit>
        <div className="form-group">
          <Field
            name="comoconheceu"
            type="text"
          />
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

export default reduxForm({
  form: 'comoconheceu',
})(ComoConheceu);

