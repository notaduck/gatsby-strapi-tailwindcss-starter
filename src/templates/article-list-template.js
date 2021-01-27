import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import { FiCoffee, FiCalendar } from "react-icons/fi";
import SEO from "../components/seo";

const ArticleList = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? "/articles" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();
  const {
    allMdx: { nodes },
  } = data;

  return (
    <Layout>
      <SEO title="Articles" />
      {nodes.map((node, index) => {
        return (
          <div
            key={node.id}
            className={`flex 
                        xs:flex-col-reverse
                        sm:flex-row
                        ${index + 1 !== nodes.length ? "border-b-2" : ""}  
                        space-x-14 
                        mb-12 
                        p-4 
                        md:pl-8 md:pr-8 
                        lg:pr-4 lg:pl-4 `}
          >
            {/* Published and time to read  */}
            <div className="flex sm:flex-col xs:ml-14 md:ml-0 xs:mt-2 md:mt-0 md:flex-row">
              <div className="">
                <div className="flex space-x-2 items-center m-0">
                  <FiCalendar />
                  <p className="m-0"> {node.frontmatter.date} </p>
                </div>
                <div className="flex space-x-2 items-center m-0">
                  <FiCoffee />
                  <p className="m-0"> {node.timeToRead} min read </p>
                </div>
              </div>
            </div>
            {/* Title and description */}
            <div className="xs:flex-1 flex-col ">
              <div className="flex items-center">
                <h3> {node.frontmatter.title} </h3>
              </div>
              <p> {node.excerpt} </p>
              <Link className="hover:underline" to={`${node.fields.slug}`}>
                {" "}
                Read More{" "}
              </Link>
            </div>
          </div>
        );
      })}
      <div className="flex justify-center">
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}
        {!isLast && (
          <Link to={nextPage} rel="next">
            Next Page →
          </Link>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query articleList($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        excerpt(truncate: true, pruneLength: 300)
        timeToRead
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM Dd - YYYY")
          title
        }
      }
    }
  }
`;
export default ArticleList;
