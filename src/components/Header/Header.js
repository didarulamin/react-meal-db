import React from "react";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div className=" bg-info py-2 rounded">
      <Link className="m-2 btn btn-primary" to="/restaurant">
        Restaurant
      </Link>
      <Link className="m-2 btn btn-primary" to="/home">
        Home
      </Link>
      <Link className="m-2 btn btn-primary" to="/about">
        About
      </Link>
    </div>
  );
};

export default Header;
