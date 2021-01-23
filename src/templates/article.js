import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Markdown from "react-markdown";
import CodeBlock from "../components/codeBlock";
import SEO from "../components/seo";

export const query = graphql`
  query Article($title: String!) {
    strapiArticles(title: { eq: $title }) {
      title
      content
    }
  }
`;

const Category = ({ data }) => {
  const article = data.strapiArticles;

  return (
    <Layout>
      <SEO description={article.desc} title={article.title}/>
      <div className="xs:pr-5 xs:pl-5 md:pr-10 md:pl-10">
        <section>
          <h1>{article.title}</h1>
          <Markdown
            source={article.content}
            renderers={{ code: CodeBlock }}
            escapeHtml={false}
          />
        </section>
        <div className="flex justify-center mt-10 mb-10">
          <Link
            to="/"
            className="bg-leather-light p-3  cursor-pointer border-gray-600 border-2"
          >
            {" "}
            GO BACK{" "}
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Category;
