import React from "react"
import styled, { keyframes } from "styled-components"

const rotateElement = keyframes`
  0% {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  100% {
    -webkit-transform: translate(-200px, 0);
            transform: translate(-200px, 0);
  }
`

const rotateMoon = keyframes`
  0% {
    -webkit-transform: translate(-125px, 0);
            transform: translate(-125px, 0);
    z-index: 10;
  }
  20% {
    z-index: -1;
  }
  50% {
    -webkit-transform: translate(125px, 0);
            transform: translate(125px, 0);
  }
  100% {
    -webkit-transform: translate(-125px, 0);
            transform: translate(-125px, 0);
  }
`

const AnimationContainer = styled.div`
  background_color: #1b2b2f;
  min-width: 300px;
  display: flex;
  position: relative;
`

const Earth = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: #3380b5;
  position: relative;
  left: 50%;
  top: 130px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 2;
  box-shadow: inset -70px 0px rgba(0, 0, 0, 0.2),
    0 0 0 50px rgba(20, 106, 221, 0.1), 0 0 0 100px rgba(20, 106, 221, 0.1);

  &:before {
    content: "";
    position: absolute;
    background: #85c567;
    height: 15px;
    width: 37.5px;
    left: 0;
    top: 25px;
    display: block;
    border-radius: 20px;
    -webkit-animation: ${rotateElement} linear 25s infinite;
    animation: ${rotateElement} liner 25s infinite;
    box-shadow: 0px 37.5px 0 -2.5px #85c567, 2.5px 17.5px 0 -1.5px #85c567,
      17.5px 62.5px 0 -4.5px #85c567, 30px -7.5px 0 -3.5px #85c567,
      62.5px -27.5px 0 -4.5px #85c567, 75px 12.5px 0 3.5px #85c567,
      110px 35px 0 -1px #85c567, 117.5px -17.5px 0 -1.5px #85c567,
      140px 42.5px 0 1.5px #85c567, 160px 15px 0 0.5px #85c567,
      200px 0 0 0 #85c567, 200px 37.5px 0 -2.5px #85c567,
      202.5px 17.5px 0 -1.5px #85c567, 217.5px 67.5px 0 -4.5px #85c567,
      260px -7.5px 0 -3.5px #85c567, 267.5px -27.5px 0 -4.5px #85c567,
      275px 12.5px 0 3.5px #85c567, 310px 35px 0 -1px #85c567,
      317.5px -17.5px 0 -1.5px #85c567, 340px 42.5px 0 1.5px #85c567,
      360px 15px 0 0.5px #85c567;
  }

  &:after {
    content: "";
    position: absolute;
    background: white;
    height: 10px;
    width: 30px;
    left: 0px;
    top: 25px;
    display: block;
    border-radius: 20px;
    -webkit-animation: ${rotateElement} linear 15s infinite;
    animation: ${rotateElement} liner 15s infinite;
    box-shadow: 5px 25px 0 1.5px #ffffff, 25px -7.5px 0 1px #ffffff,
      35px 35px 0 -0.5px #ffffff, 50px 12.5px 0 0.5px #ffffff,
      55px 52.5px 0 -2px #ffffff, 70px 37.5px 0 -1.5px #ffffff,
      125px -12.5px 0 -0.5px #ffffff, 105px 25px 0 0.5px #ffffff,
      170px 65px 0 0.5px #ffffff, 200px 0px 0 0 #ffffff,
      205px 25px 0 1.5px #ffffff, 250px 12.5px 0 0.5px #ffffff,
      225px -7.5px 0 1px #ffffff, 235px 35px 0 -0.5px #ffffff,
      270px 37.5px 0 -1.5px #ffffff, 255px 52.5px 0 -2px #ffffff,
      325px -12.5px 0 -0.5px #ffffff, 305px 25px 0 0.5px #ffffff,
      370px 65px 0 0.5px #ffffff;
  }
`

const EarthShadow = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  position: absolute;
  background-color: transparent;
  z-index: 4;
  box-shadow: inset -70px 0 rgba(0, 0, 0, 0.1);
`

const Moon = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #a5a5a5;
  position: absolute;
  top: 130px;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  overflow: auto;
  z-index: 10;
  box-shadow: inset -1.5px 0 rgba(0, 0, 0, 0.2);
  -webkit-animation: ${rotateMoon} ease-in-out 15s infinite;
  animation: ${rotateMoon} ease-in-out 15s infinite;

  &:after {
    content: "";
    height: 2.5px;
    width: 2.5px;
    border-radius: 50%;
    background: gray;
    position: absolute;
    top: 4px;
    left: 5px;
    box-shadow: -2px 2.5px 0 -0.5px gray, 2px 3.5px 0 -0.5px gray,
      -1px -3px 0 -0.5px gray;
  }
`

const Planet = () => (
  <AnimationContainer>
    <Earth>
      <EarthShadow />
    </Earth>
    <Moon />
  </AnimationContainer>
)

export default Planet
