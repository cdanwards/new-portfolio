import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

import Planet from "./planet"
import Espresso from "./espresso"
import Work from "./work"

const WhiteText = styled.p`
  color: #fff;
  max-width: 400px;
`

const BlueText = styled.p`
  color: #2e68d3;
  max-width: 400px;
`

const Whiteh1 = styled.h1`
  color: #fff;
`

const Blueh1 = styled.h1`
  color: #2e68d3;
`

const Container = styled.div`
  padding: 3%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const RowReverseContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  width: 100%;
`

const BoxContainer = styled.div`
  overflow: hidden;
  flex-grow: 1;
  min-height: 350px;
  padding: 5%;
`

const OrangeBox = styled.div`
  flex-grow: 1;
  min-height: 300px;
  padding: 20px;
  background: #f8633e;
`
const BlueBox = styled.div`
  flex-grow: 1;
  min-height: 300px;
  padding: 20px;
  background: #2e68d3;
`

const WorkContainer = styled.div`
  overflow: hidden;
  flex-grow: 1;
  padding: 3%;
`

const Boxes = () => (
  <Container>
    <RowContainer>
      <OrangeBox>
        <Whiteh1>hello!</Whiteh1>
        <WhiteText>Thanks for stopping by!</WhiteText>
        <WhiteText>
          My name is Dan Edwards and I'm a full-stack developer based out of
          Greenville, SC.
        </WhiteText>
        <WhiteText>
          I'm passionate about building great user experiences, created fun and
          clean designs, and solving difficult problems. I'm currently digging
          more into Gatsby.js and CSS Animations.
        </WhiteText>
      </OrangeBox>
      <BoxContainer>
        <Planet />
      </BoxContainer>
    </RowContainer>
    <RowReverseContainer>
      <BoxContainer>
        <Espresso />
      </BoxContainer>
      <BlueBox>
        <Whiteh1> about me </Whiteh1>
        <WhiteText>
          When I'm not developing, you can find me improving our fixer-upper of
          a house, going on adventures with my wonderful wife, and playing
          slightly above average Magic The Gathering.
        </WhiteText>
      </BlueBox>
    </RowReverseContainer>
    <WorkContainer>
      <Blueh1>my work</Blueh1>
      <BlueText>
        Check out some of the things I've worked on and where else you can find
        me!
      </BlueText>
    </WorkContainer>
    <Work />
  </Container>
)

Boxes.propTypes = {
  siteTitle: PropTypes.string,
}

Boxes.defaultProps = {
  siteTitle: ``,
}

export default Boxes
