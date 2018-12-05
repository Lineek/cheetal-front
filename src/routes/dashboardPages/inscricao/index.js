import React from 'react';
import ComoConheceu from './ComoConheceu';
import DadosPessoais from './DadosPessoais';
import Endereco from './Endereco';
import CriarSenha from './CriarSenha';

const Inscricao = () => (
  <div>
    <div className="row">
      <div className="col-md-6">
        <DadosPessoais />
      </div>
      <div className="col-md-6">
        <ComoConheceu />
      </div>
      <div className="col-md-6">
        <Endereco />
      </div>
      <div className="col-md-6">
        <CriarSenha />
      </div>
    </div>
  </div>
);

export default Inscricao;
