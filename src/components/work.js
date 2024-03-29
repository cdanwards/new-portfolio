import React from "react"

import styled from "styled-components"

import Rendezvous from "./rendezvous"
import NSImage from "./nsimage"
import Apollos from "./apollos"

const Container = styled.div`
  width: 100%;
  padding: 3%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const WhiteH1 = styled.h2`
  color: #fff;
`

const StyledA = styled.a`
  text-decoration: none;
  text-align: center;
  overflow: hidden;
  flex-grow: 1;
  width: 350px;
  padding: 10px;
  background: #b68d6d;

  &:hover {
    background: #f8633e;
  }
`

const Work = () => (
  <Container>
    <StyledA href="https://newspring.cc/newspring/apps">
      <WhiteH1>NewSpring Apollos</WhiteH1>
      <NSImage />
    </StyledA>
    <StyledA href="https://apollosapp.io/">
      <WhiteH1>Apollos Project</WhiteH1>
      <Apollos />
    </StyledA>
    <StyledA href="https://github.com/cdanwards/rendezvous">
      <WhiteH1>rendezvous</WhiteH1>
      <Rendezvous />
    </StyledA>
  </Container>
)

export default Work
