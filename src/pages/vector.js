import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/Seo";
import Layout from "../components/Layout";
import PostCard from "../components/PostsCard";
import Jumbotron from "../components/Jumbotron";

export default function vectorart({ data }) {
  return (
    <Layout>
      <Seo title="Vector Art" />
      <Jumbotron
        headline="Vector Art"
        punchline="Moodly Created Vectors."
        jumbcolor="warning"
      />
      <div className="container">
        <h4>Latest Art</h4>
        <PostCard data={data.allMarkdownRemark.nodes} col={4} />
      </div>
    </Layout>
  );
}

export const IndexQuery = graphql`
  query VectorArt {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "vectorart" } } }
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
