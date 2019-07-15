import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: `100%`,
        }}
      >
        <div
          style={{
            width: `50%`,
            height: "500px",
            background: "salmon",
          }}
        >
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
        </div>
        <div
          style={{
            width: `50%`,
            height: "500px",
            background: "cyan",
          }}
        >
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: `100%`,
        }}
      >
        <div
          style={{
            width: `50%`,
            height: "500px",
            background: "goldenrod",
          }}
        >
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
        </div>
        <div
          style={{
            width: `50%`,
            height: "500px",
            background: "blue",
          }}
        >
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
        </div>
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
