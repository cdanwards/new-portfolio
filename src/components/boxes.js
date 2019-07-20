import PropTypes from "prop-types"
import React from "react"

import styles from "./boxes.module.css"

console.log(styles)

const Boxes = () => (
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
          background: "#2e68d3",
          padding: "10px",
        }}
      >
        <h1>hello!</h1>
        <p className={styles.bodytext}>Thanks for stopping by!</p>
        <p>
          My name is Dan Edwards and I'm a full-stack developer based out of
          Greenville, SC.
        </p>
        <p>
          I'm passionate about building great user experiences, created fun and
          clean designs, and solving difficult problems.
        </p>
      </div>
      <div
        style={{
          flexGrow: 1,
          minHeight: "300px",
          padding: "10px",
        }}
      >
        <h1>Hi people</h1>
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
          padding: "10px",
          overflowWrap: "break-word",
        }}
      >
        <h1>Hi people</h1>
      </div>
      <div
        style={{
          flexGrow: 1,
          minHeight: "300px",
          background: "#f8633e",
          padding: "10px",
        }}
      >
        <h1 style={{ color: "white" }}> about me </h1>
        <p style={{ color: "white", maxWidth: "400px" }}>
          When I'm not developing, I enjoy improving our fixer-upper of a house,
          going on adventures with my wonderful wife, and playing slightly above
          average Magic The Gathering.
        </p>
      </div>
    </div>
    <div
      style={{
        flexGrow: 1,
        minHeight: "300px",
        background: "#b68d6d",
        padding: "10px",
      }}
    >
      <h1 className="bodyText">my work</h1>
      <p className="bodyText">
        Check out some of the things I've worked on and where else you can find
        me!
      </p>
    </div>
  </div>
)

Boxes.propTypes = {
  siteTitle: PropTypes.string,
}

Boxes.defaultProps = {
  siteTitle: ``,
}

export default Boxes
