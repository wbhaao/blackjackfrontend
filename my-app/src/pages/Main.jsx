import React from "react";
import styled from "styled-components";

import single from "../assets/chip/Chip Button Green.png";
import rank from "../assets/chip/Chip Button Red.png";

function Main() {
  return (
    <Layout>
      <ButtonBox>
        <a href="login">
          <SinglePlay src={single} />
        </a>
        <a href="rank">
          <MyPoint src={rank} />
        </a>
      </ButtonBox>
    </Layout>
  );
}
const Layout = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #423030;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  gap: 5rem;
`;

const Chip = styled.img`
  height: 10rem;
  width: 10rem;
  border-radius: 100rem;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  font-weight: 900;
`;
const SinglePlay = styled(Chip)``;
const MyPoint = styled(Chip)``;

export default Main;
