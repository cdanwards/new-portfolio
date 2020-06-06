import React from "react"
import styled, { keyframes } from "styled-components"

const drip = keyframes`
  0% {
    height: 0px;
    opacity: 1;
  }
  5% {
    height: 0px;
    opacity: 1;
  }
  20% {
    height: 62px;
    opacity: 1;
  }
  95% {
    height: 62px;
    opacity: 1;
  }
  100% {
    height: 62px;
    opacity: 0;
  }
`

const smokeFirst = keyframes`
  0% {
    bottom: 20px;
    opacity: 0;
  }
  40% {
    bottom: 50px;
    opacity: .5;
  }
  80% {
    bottom: 80px;
    opacity: .3;
  }
  100% {
    bottom: 80px;
    opacity: 0;
  }
`

const smokeSecond = keyframes`
  0% {
    bottom: 40px;
    opacity: 0;
  }
  40% {
    bottom: 70px;
    opacity: .5;
  }
  80% {
    bottom: 80px;
    opacity: .3;
  }
  100% {
    bottom: 80px;
    opacity: 0;
  }
`

const CoffeeHeader = styled.div`
  width: 300px;
  height: 80px;
  position: relative;
  top: 0;
  background-color: #ddcfcc;
  border-radius: 10px;
  left: 18%;
`

const Button = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 25px;
  background-color: #282323;
  border-radius: 50%;

  &:after {
    content: "";
    width: 8px;
    height: 8px;
    position: absolute;
    bottom: -8px;
    left: calc(50% - 4px);
    background-color: #615e5e;
  }
`

const ButtonOne = styled(Button)`
  left: 15px;
`

const ButtonTwo = styled(Button)`
  left: 50px;
`

const Display = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  border-radius: 50%;
  background-color: rgba(248, 99, 62, 0.5);
  border: 5px solid #f8633e;
  box-sizing: border-box;
`

const Details = styled.div`
  width: 8px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #9b9091;
  box-shadow: -12px 0 0 #9b9091, -24px 0 0 #9b9091;
`

const Medium = styled.div`
  width: 270px;
  height: 160px;
  position: relative;
  left: 15px;
  background-color: #bcb0af;

  left: calc(18% + 15px);

  &:before {
    content: "";
    width: 245px;
    height: 100px;
    background-color: #776f6e;
    position: absolute;
    bottom: 0;
    left: calc(50% - 45%);
    border-radius: 20px 20px 0 0;
  }
`

const Exit = styled.div`
  width: 60px;
  height: 20px;
  position: absolute;
  top: 0;
  left: calc(50% - 30px);
  background-color: #231f20;

  &:before {
    content: "";
    width: 50px;
    height: 20px;
    border-radius: 0 0 50% 50%;
    position: absolute;
    bottom: -20px;
    left: calc(50% - 25px);
    background-color: #231f20;
  }

  &:after {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    bottom: -30px;
    left: calc(50% - 5px);
    background-color: #231f20;
  }
`

const Arm = styled.div`
  width: 70px;
  height: 20px;
  position: absolute;
  top: 15px;
  right: 25px;
  background-color: #231f20;

  &:before {
    content: "";
    width: 15px;
    height: 5px;
    position: absolute;
    top: 7px;
    left: -15px;
    background-color: #9e9495;
  }
`

const Cup = styled.div`
  width: 80px;
  height: 47px;
  position: absolute;
  bottom: 0;
  left: calc(50% - 40px);
  background-color: #fff;
  border-radius: 0 0 70px 70px / 0 0 110px 110px;

  &:after {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    top: 6px;
    right: -13px;
    border: 5px solid #fff;
    border-radius: 50%;
  }
`

const Liquid = styled.div`
  width: 6px;
  height: 63px;
  opacity: 0;
  position: absolute;
  top: 50px;
  left: calc(50% - 3px);
  background-color: #74372b;
  animation: ${drip} 4s 4s linear infinite;
`

const SmokeOne = styled.div`
  width: 8px;
  height: 20px;
  position: absolute;
  border-radius: 5px;
  background-color: #b3aeae;
  opacity: 0;
  bottom: 50px;
  left: 102px;
  animation: ${smokeFirst} 3s 4s linear infinite;
`

const SmokeTwo = styled.div`
  width: 8px;
  height: 20px;
  position: absolute;
  border-radius: 5px;
  background-color: #b3aeae;
  opacity: 0;
  bottom: 70px;
  left: 118px;
  animation: ${smokeSecond} 3s 5s linear infinite;
`

const SmokeThree = styled.div`
  width: 8px;
  height: 20px;
  position: absolute;
  border-radius: 5px;
  background-color: #b3aeae;
  opacity: 0;
  bottom: 65px;
  right: 118px;
  animation: ${smokeSecond} 3s 6s linear infinite;
`

const SmokeFour = styled.div`
  width: 8px;
  height: 20px;
  position: absolute;
  border-radius: 5px;
  background-color: #b3aeae;
  opacity: 0;
  bottom: 50px;
  right: 102px;
  animation: ${smokeFirst} 3s 5s linear infinite;
`

const Footer = styled.div`
  width: 300px;
  height: 15px;
  position: relative;
  background-color: #f8633e;
  border-radius: 10px;
  left: 18%;

  &:after {
    content: "";
    width: 300px;
    height: 26px;
    position: absolute;
    bottom: -25px;
    background-color: #000;
  }
`

const Espresso = () => (
  <>
    <CoffeeHeader>
      <ButtonOne />
      <ButtonTwo />
      <Display />
      <Details />
    </CoffeeHeader>
    <Medium>
      <Exit />
      <Arm />
      <Liquid />
      <SmokeOne />
      <SmokeTwo />
      <SmokeThree />
      <SmokeFour />
      <Cup />
    </Medium>
    <Footer />
  </>
)

export default Espresso
