import { Button } from "bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {

  const [id, setid] = useState([])
  const navigate = useNavigate();

  const getEmpId = () => {
    navigate(`/emp/${id}`)
  }

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Employee Management Service
            </a>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <form className="d-flex" onSubmit={(e) => getEmpId(e)}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search Emp ID"
                  aria-label="Search"
                  value={id}
                  onChange={(e) => setid(e.target.value)}
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
