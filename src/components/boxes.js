import { FaGithub, FaLinkedinIn, FaPaperPlane, FaTwitter } from "react-icons/fa"

import Espresso from "./espresso"
import Planet from "./planet"
import PropTypes from "prop-types"
import React from "react"
import Work from "./work"
import styled from "styled-components"

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
  padding-bottom: 2%;
`

const BoxContainer = styled.div`
  overflow: hidden;
  flex-grow: 1;
  min-height: 350px;
  min-width: 350px;
  padding: 3%;
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
  flex: 1;
  padding: 1%;
  text-align: center;
`

const PaddedDiv = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
`

const StyledA = styled.a`
  text-decoration: none;
  padding: 4%;
  color: #2e68d3;

  &:hover {
    color: #f8633e;
  }
`

const StyledA2 = styled.a`
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #2e68d3;
  }
`

const Boxes = () => (
  <Container>
    <RowContainer>
      <OrangeBox>
        <Whiteh1>hello!</Whiteh1>
        <WhiteText>Thanks for stopping by!</WhiteText>
        <WhiteText>
          My name is Dan Edwards and I'm a full-stack developer based out of
          Greenville, SC currently working as a Software Engineer @{" "}
          <StyledA2 href="https://orangebees.com">Orange Bees</StyledA2>.
        </WhiteText>
        <WhiteText>
          I'm passionate about providing great user experiences, creating fun
          and clean designs, and solving difficult problems. I'm currently
          learning Angular, Docker and Flutter.
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
          When I'm not developing, you can find me going on adventures with my
          wonderful wife and our dog, improving our fixer-upper of a house, and
          playing slightly above average Magic The Gathering.
        </WhiteText>
        <WhiteText>
          Since graduating from the Iron Yard Academy, I've strived to
          continuously learn and improve my skills to create modern web and
          mobile apps.
        </WhiteText>
      </BlueBox>
    </RowReverseContainer>
    <WorkContainer>
      <Blueh1>my work</Blueh1>
      <BlueText style={{ margin: "0 auto" }}>
        Check out some of the things I've worked on and where else you can find
        me!
      </BlueText>
    </WorkContainer>
    <Work />
    <PaddedDiv>
      <StyledA href="https://github.com/cdanwards">
        <FaGithub />
      </StyledA>
      <StyledA href="https://www.linkedin.com/in/dan-edwards-64776642/">
        <FaLinkedinIn />
      </StyledA>
      <StyledA href="https://twitter.com/cdanwards">
        <FaTwitter />
      </StyledA>
      <StyledA href="mailto:cdaniel.edwards@gmail.com">
        <FaPaperPlane />
      </StyledA>
    </PaddedDiv>
  </Container>
)

Boxes.propTypes = {
  siteTitle: PropTypes.string,
}

Boxes.defaultProps = {
  siteTitle: ``,
}

export default Boxes
