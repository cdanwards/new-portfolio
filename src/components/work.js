import React from "react"

import styled from "styled-components"
import { FaGithub, FaTwitter, FaLinkedinIn, FaPaperPlane } from "react-icons/fa"

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

const BoxContainer = styled.div`
  overflow: hidden;
  text-align: center;
  min-height: 350px;
  width: 350px;
`

const BrownH1 = styled.h1`
  color: #b68d6d;
`

const PaddedDiv = styled.div`
  padding: 30px;
  color: blue;

  &:hover {
    color: salmon;
  }
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
    <PaddedDiv>
      <FaGithub />
      <FaLinkedinIn />
      <FaTwitter />
      <FaPaperPlane />
    </PaddedDiv>
  </Container>
)

export default Work
