import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconPersonBadgeFill } from "bootstrap-icons/icons/person-badge-fill.svg";
import { ReactComponent as IconDoorClosedFill } from "bootstrap-icons/icons/door-closed-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <React.Fragment>
      <header className="p-3 border-bottom bg-dark">
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-12 col-md-10 text-center">
              <Link to="/">
              <div id="omoss">
                <img class="sublogotyp" alt="logo" src="../../images/banner/logoneg_LL-healthclub.png"/></div>
              </Link>
            </div>
            <div className="col-6 col-md-2">
              {/* <div className="position-relative d-inline me-3">
                <Link to="/cart" className="btn btn-primary">
                  <IconCart3 className="i-va" />
                  <div className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
                    2
                  </div>
                </Link>
              </div> */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-secondary rounded-circle border me-3"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  aria-label="Profile"
                  data-bs-toggle="dropdown"
                >
                  <FontAwesomeIcon icon={faUser} className="text-light" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/account/profile">
                      <IconPersonBadgeFill /> My Profile
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      <IconDoorClosedFill className="text-danger" /> Logout
                    </Link>
                  </li>
                </ul>
              </div>

              <Link to="/account/signin">Sign In</Link> {" "}
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
export default Header;
