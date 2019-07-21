import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const WhiteHeader = styled.header`
  background_color: #fff;
`

const Header = () => (
  <WhiteHeader>
    <div
      style={{
        margin: `0 auto`,
        padding: `3%`,
      }}
    >
      <h1 style={{ margin: 0, color: "#f8633e" }}>dan edwards</h1>
    </div>
  </WhiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
