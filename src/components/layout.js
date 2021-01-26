/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import ThemeToggle from "./themeToggle";

import Header from "./header";
import "./layout.css";
// import "../../static/styles/tailwind.css";
import "../styles/global.css";
import NavBar from "./Nav/navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(query);

  return (
    <>
      <div
        className=" transition-all duration-300
                    flex 
                    flex-col  
                    h-screen
                    overflow-scroll
                    sm:pl-20 sm:pr-20
                    lg:pl-30 lg:pr-30
                    xl:pl-60 xl:pr-60
                    pt-10
                    bg-gray-light
                    text-gray-600
                    dark:bg-gray-800 
                    dark:text-gray-300
                    "
      >
        {/* <ThemeToggle className="" /> */}
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <NavBar />
        <main className="mt-10 flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
