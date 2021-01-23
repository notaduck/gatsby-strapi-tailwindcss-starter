import React from "react";
import { Link, graphql } from "gatsby";
import readingTime from "reading-time";
import Layout from "../components/layout";
import { FiCoffee, FiCalendar } from "react-icons/fi";
import SEO from "../components/seo";

const ArticleList = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = ( currentPage - 1 === 1 ) ? "/articles" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();
  const {
    allStrapiArticles: { nodes },
  } = data;

  console.log(nodes)

  return (
    <Layout>
        <SEO title='articles' />
      {nodes.map(node => {
        const { text: time } = readingTime(node.content);
        return (
          <div
            key={node.id}
            className="flex 
                                                    xs:flex-col-reverse
                                                    md:flex-row
                                                    border-b-2  
                                                    space-x-14 
                                                    mb-12 
                                                    p-4 
                                                    :pl-8 md:pr-8 
                                                    lg:pr-4 lg:pl-4"
          >
            {/* Published and time to read  */}
            <div className="flex sm:flex-col xs:ml-14 md:ml-0 xs:mt-2 md:mt-0 md:flex-row">
              <div className="">
                <div className="flex space-x-2 items-center m-0">
                  <FiCalendar />
                  <p className="m-0"> {node.published_at} </p>
                </div>
                <div className="flex space-x-2 items-center m-0">
                  <FiCoffee />
                  <p className="m-0"> {time} </p>
                </div>
              </div>
            </div>
            {/* Title and description */}
            <div className="xs:flex-1 flex-col ">
              <div className="flex items-center">
                <h3> {node.title} </h3>
              </div>
              <p> {node.description} </p>
              <Link
                className="hover:underline"
                to={`/article/${node.title.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {" "}
                Read More{" "}
              </Link>
            </div>
          </div>
        );
      })}
      <div></div>
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
    allStrapiArticles(
      sort: { fields: createdAt, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        content
        published_at(formatString: "MMMM DD - YYYY")
        title
        description
      }
    }
  }
`;
export default ArticleList;
