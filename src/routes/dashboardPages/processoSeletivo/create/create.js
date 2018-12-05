import React, { PropTypes } from 'react';
import {
    PageHeader,
     } from 'react-bootstrap';

const title = 'Criação de Processo Seletivo';

function displayProcessoSeletivoCreate(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Criação de Processo Seletivo</PageHeader>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
        </div>
      </div>
    </div>
  );
}


displayProcessoSeletivoCreate.contextTypes = { setTitle: PropTypes.func.isRequired };
export default displayProcessoSeletivoCreate;
