import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

const WhiteText = styled.p`
  color: #fff;
  max-width: 400px;
`

const Whiteh1 = styled.h1`
  color: #fff;
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
const BoxContainer = styled.div`
  flex-grow: 1;
  min-height: 300px;
  padding: 20px;
`

const OrangeBox = styled.div`
  flex-grow: 1;
  min-height: 300px;
  padding: 20px;
  background: #2e68d3;
`
const BlueBox = styled.div`
  flex-grow: 1;
  min-height: 300px;
  padding: 20px;
  background: #f8633e;
`
const BrownBox = styled.div`
  flex-grow: 1;
  min-height: 300px;
  padding: 20px;
  background: #b68d6d;
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
          clean designs, and solving difficult problems.
        </WhiteText>
      </OrangeBox>
      <BoxContainer>
        <h1>Hi people</h1>
      </BoxContainer>
    </RowContainer>
    <RowContainer>
      <BoxContainer>
        <h1>Hi people</h1>
      </BoxContainer>
      <BlueBox>
        <Whiteh1> about me </Whiteh1>
        <WhiteText>
          When I'm not developing, I enjoy improving our fixer-upper of a house,
          going on adventures with my wonderful wife, and playing slightly above
          average Magic The Gathering.
        </WhiteText>
      </BlueBox>
    </RowContainer>
    <BrownBox>
      <Whiteh1>my work</Whiteh1>
      <WhiteText>
        Check out some of the things I've worked on and where else you can find
        me!
      </WhiteText>
    </BrownBox>
  </Container>
)

Boxes.propTypes = {
  siteTitle: PropTypes.string,
}

Boxes.defaultProps = {
  siteTitle: ``,
}

export default Boxes
