import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        padding: "3%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
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
            flexGrow: 1,
            minHeight: "300px",
            background: "salmon",
          }}
        >
          <h1>hello!</h1>
          <p>I'm a full-stack developer based out of Greenville, SC.</p>
          <p>Now go build something great.</p>
        </div>
        <div
          style={{
            flexGrow: 1,
            minHeight: "300px",
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
            flexGrow: 1,
            minHeight: "300px",
          }}
        >
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
        </div>
        <div
          style={{
            flexGrow: 1,
            minHeight: "300px",
            background: "blue",
          }}
        >
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
        </div>
      </div>
      <div
        style={{
          flexGrow: 1,
          minHeight: "300px",
          background: "salmon",
        }}
      >
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
