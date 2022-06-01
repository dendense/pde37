import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/Seo";
import Layout from "../components/Layout";
import PostsCard from "../components/PostsCard";
import Jumbotron from "../components/Jumbotron";

import "../styles/index.scss";

export default function Home({ data }) {
  return (
    <Layout>
      <Seo title="DENDENSE" />
      <Jumbotron
        headline="DENDENSE"
        punchline="Proudly Indonesian Airforce"
        jumbcolor="dark"
      />
      <div className="container-fluid">
        <h4>Latest Posts</h4>
        <PostsCard data={data.allMarkdownRemark.nodes} col={4} />
      </div>
    </Layout>
  );
}

export const IndexQuery = graphql`
  query Boilerplate {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
          description
          author
          tags
          path
          image
        }
      }
    }
  }
`;
