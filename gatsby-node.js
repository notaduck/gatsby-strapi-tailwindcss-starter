/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");
exports.createPages = async ({ graphql, actions }) => {
  // const { createRedirect } = actions

  // createRedirect({
  //     fromPath: `/`,
  //     toPath: `/articles`,
  //     redirectInBrowser: true,
  //     isPermanent: true,
  //   })

  const { createPage } = actions;
  const result = await graphql(`
    {
      articles: allStrapiArticle {
        nodes {
          title
          content
          created_at(formatString: "MMMM dddd yyyy")
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog articles pages.
  const articles = result.data.articles.nodes;
  const articlePerPage = 5;

  const numPages = Math.ceil(articles.length / articlePerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/articles` : `/articles/${i + 1}`,
      component: path.resolve("./src/templates/article-list-template.js"),
      context: {
        limit: articlePerPage,
        skip: i * articlePerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  const ArticleTemplate = require.resolve("./src/templates/article.js");

  articles.forEach((article, index) => {
    createPage({
      path: `/article/${article.title.toLowerCase()}`,
      component: ArticleTemplate,
      context: {
        title: article.title,
      },
    });
  });
};
