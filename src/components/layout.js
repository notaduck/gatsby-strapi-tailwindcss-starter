/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";
import NavBar from "./Nav/navbar";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div
        className=" dark dark:bg-gray-700
                      flex 
                      flex-col  
                      sm:pl-20 sm:pr-20
                      lg:pl-30 lg:pr-30
                      xl:pl-60 xl:pr-60
                      pt-10
                    bg-gray-light"
      >
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <NavBar />
        <main className="mt-10 min-h-screen ">{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
