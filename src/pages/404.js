import React from "react";

import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Jumbotron from "../components/Jumbotron";
import "../styles/index.scss";

export default function vectorart() {
  return (
    <Layout>
      <Seo title="404 Not Found" />
      <Jumbotron
        headline="404 Page Not Found"
        punchline="Lost in Space"
        jumbcolor="danger"
      />
    </Layout>
  );
}
