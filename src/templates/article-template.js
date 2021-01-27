import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import React from "react";
import CodeBlock from "../components/codeBlock";

const components = {
  pre: CodeBlock,
};

const ArticleTemplate = ({ data }) => {
  const {
    frontmatter: { title, date },
    body,
    excerpt,
  } = data.mdx;
  return (
    <Layout>
      <SEO description={excerpt} title={title} />
      <div className="xs:px-10 lg:px-10">
        <div className="mb-6">
          <h1 className="text-2xl">{title}</h1>
          <p>{date}</p>
        </div>
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </div>

      <div className="flex justify-center mt-10 mb-10 ">
        <Link
          to="/articles"
          className="p-3  cursor-pointer border-gray-600 border-2 rounded"
        >
          {" "}
          GO BACK{" "}
        </Link>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD - YYYY")
      }
    }
  }
`;

export default ArticleTemplate;
