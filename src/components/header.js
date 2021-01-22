import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <div className="mt-10 mb-10 flex justify-center underline">
    <Link to='articles'>
    <h1 className="font-thin text-6xl"> {siteTitle} </h1>
    </Link>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
