
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from "react-router-dom";
import { removeToken } from '../../authentication/authUtility';

const AdminMenu = () => {
  const navigate = useNavigate();
  return (
    <>

      <nav className="navbar navbar-expand-sm bg-primary p-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="/admin/adminDashBoard"  style={{ width: '220px' }}> <b>SK Tech-Hub</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-start" id="navbarSupportedContent" >
           
            <ul className="navbar-nav ">

            <li className="nav-item dropdown fs-5 fw-bold">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Configuration
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/admin/addShop">Add Shop</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                </ul>
              </li>


              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /> </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>

          
          </div>
          <button type="button" class="btn btn-danger btn-sm  rounded"  onClick={ ()=> {  removeToken(()=>{alert("logout successfully.."); navigate('/')});} }><FontAwesomeIcon icon={faSignOutAlt} /> Logout </button>

        </div>
      </nav>


    </>
  );
}

export default AdminMenu;