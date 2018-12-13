import React, { PropTypes } from 'react';
import { 
    PageHeader,
    NavDropdown,
    MenuItem
  } from 'react-bootstrap';
  import Navbar, {Brand} from 'react-bootstrap/lib/Navbar';
import Jornada from '../../../components/Utils/jornadaCandidato/Jornada';
import history from '../../../core/history';
// import image from '../../../components/Header'


const title = 'Jornada do Candidato';
const image = require('../../../components/Header/icon.png');

function displayJornadaCandidato(props, context) {
  context.setTitle(title);
  try {
      if(localStorage.getItem("userType") !== "user") {
          history.push('/login');
      }
  } catch (error) {
    history.push('/login');
  }
  return (
    <div>
        <div id="wrapper" className="content">
            <Navbar fluid={true}  style={ {margin: 0} }>
            <ul className="nav navbar-top-links navbar-right">
            <NavDropdown title={<i className="fa fa-user fa-fw"></i> } id = 'navDropdown4'>
                <MenuItem eventKey = "1" onClick = {(event) => {
                    event.preventDefault();
                    localStorage.removeItem("userId");
                    localStorage.removeItem("userName");
                    localStorage.removeItem("userType");
                    history.push('/');}}>
                    <span> <i className="fa fa-sign-out fa-fw" /> Logout </span>
                </MenuItem>
            </NavDropdown>
            </ul>
            </Navbar>
        </div>
      <div className="row" >
            <div className="col-lg-12 row-margin">
            <div className="img-box">
                <img src={image} alt={localStorage.getItem("userName")} />
            </div>
                <PageHeader>Olá {localStorage.getItem("userName")}, bem vindo!</PageHeader>
            </div>
      </div>
        <Jornada />
    </div>
  );
}


displayJornadaCandidato.contextTypes = { setTitle: PropTypes.func.isRequired };
export default displayJornadaCandidato;
