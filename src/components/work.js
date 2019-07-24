import PropTypes from "prop-types"
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
  justifycontent: space-between;
`

const BoxContainer = styled.div`
  overflow: hidden;
  flex-grow: 1;
  min-height: 350px;
  width: 350px;
  padding: 40px;
`

const BrownH1 = styled.h1`
  color: #b68d6d;
`

const Work = () => (
  <Container>
    <BoxContainer>
      <BrownH1>Apollos Project</BrownH1>
      <Apollos />
    </BoxContainer>
    <BoxContainer>
      <BrownH1>NewSpring Apollos</BrownH1>
      <NSImage />
    </BoxContainer>
    <BoxContainer>
      <BrownH1>rendezvous</BrownH1>
      <Rendezvous />
    </BoxContainer>
  </Container>
)

export default Work
