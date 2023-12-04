import React, { useEffect, useState } from "react";
import styled from "styled-components";

import c2 from "../assets/clover/Clover Card 2.png";
import c3 from "../assets/clover/Clover Card 3.png";
import c4 from "../assets/clover/Clover Card 4.png";
import c5 from "../assets/clover/Clover Card 5.png";
import c6 from "../assets/clover/Clover Card 6.png";
import c7 from "../assets/clover/Clover Card 7.png";
import c8 from "../assets/clover/Clover Card 8.png";
import c9 from "../assets/clover/Clover Card 9.png";
import cA from "../assets/clover/Clover Card A.png";
import cJ from "../assets/clover/Clover Card J.png";
import cK from "../assets/clover/Clover Card K.png";
import cQ from "../assets/clover/Clover Card Q.png";

import d2 from "../assets/diamond/Diamond Card 2.png";
import d3 from "../assets/diamond/Diamond Card 3.png";
import d4 from "../assets/diamond/Diamond Card 4.png";
import d5 from "../assets/diamond/Diamond Card 5.png";
import d6 from "../assets/diamond/Diamond Card 6.png";
import d7 from "../assets/diamond/Diamond Card 7.png";
import d8 from "../assets/diamond/Diamond Card 8.png";
import d9 from "../assets/diamond/Diamond Card 9.png";
import dA from "../assets/diamond/Diamond Card A.png";
import dJ from "../assets/diamond/Diamond Card J.png";
import dK from "../assets/diamond/Diamond Card K.png";
import dQ from "../assets/diamond/Diamond Card Q.png";

import h2 from "../assets/hearts/Hearts Card 2.png";
import h3 from "../assets/hearts/Hearts Card 3.png";
import h4 from "../assets/hearts/Hearts Card 4.png";
import h5 from "../assets/hearts/Hearts Card 5.png";
import h6 from "../assets/hearts/Hearts Card 6.png";
import h7 from "../assets/hearts/Hearts Card 7.png";
import h8 from "../assets/hearts/Hearts Card 8.png";
import h9 from "../assets/hearts/Hearts Card 9.png";
import hA from "../assets/hearts/Hearts Card A.png";
import hJ from "../assets/hearts/Hearts Card J.png";
import hK from "../assets/hearts/Hearts Card K.png";
import hQ from "../assets/hearts/Hearts Card Q.png";
import s2 from "../assets/spade/Spade Card 2.png";
import s3 from "../assets/spade/Spade Card 3.png";
import s4 from "../assets/spade/Spade Card 4.png";
import s5 from "../assets/spade/Spade Card 5.png";
import s6 from "../assets/spade/Spade Card 6.png";
import s7 from "../assets/spade/Spade Card 7.png";
import s8 from "../assets/spade/Spade Card 8.png";
import s9 from "../assets/spade/Spade Card 9.png";
import sA from "../assets/spade/Spade Card A.png";
import sJ from "../assets/spade/Spade Card J.png";
import sK from "../assets/spade/Spade Card K.png";
import sQ from "../assets/spade/Spade Card Q.png";
function Single() {
  const [dealerScore, setDealerScore] = useState(0);
  const [myScore, setMyScore] = useState(0);
  const [myCards, setMyCards] = useState([1, 1]);
  const [youCards, setYouCards] = useState([1, 1]);
  const list = [
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9,
    cA,
    cJ,
    cK,
    cQ,
    d2,
    d3,
    d4,
    d5,
    d6,
    d7,
    d8,
    d9,
    dA,
    dJ,
    dK,
    dQ,
    h2,
    h3,
    h4,
    h5,
    h6,
    h7,
    h8,
    h9,
    hA,
    hJ,
    hK,
    hQ,
    s2,
    s3,
    s4,
    s5,
    s6,
    s7,
    s8,
    s9,
    sA,
    sJ,
    sK,
    sQ,
  ];
  const [state, setState] = useState("");
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    const a = Math.floor(Math.random() * 48);
    const b = Math.floor(Math.random() * 48);
    setYouCards([a, b]);
    setDealerScore((a % 12) + 2 + ((b % 12) + 2));

    const c = Math.floor(Math.random() * 48);
    const d = Math.floor(Math.random() * 48);
    setMyCards([c, d]);
    setMyScore((c % 12) + 2 + ((d % 12) + 2));
    localStorage.setItem("myscore", (c % 12) + 2 + ((d % 12) + 2));
    localStorage.setItem("youscore", (a % 12) + 2 + ((b % 12) + 2));
  }, []);
  function winAndLose() {
    let myScore = localStorage.getItem("myscore");
    let dealerScore = localStorage.getItem("youscore");
    console.log(myScore, dealerScore);
    // draw
    if (myScore == dealerScore || (myScore > 21 && dealerScore > 21)) {
      localStorage.setItem(
        "bank",
        Number(localStorage.getItem("bank")) +
          Number(localStorage.getItem("money"))
      );
      localStorage.setItem("money", 0);
      setState("draw");
      // Lose
    } else if (myScore > 21 || (myScore < dealerScore && dealerScore < 21)) {
      localStorage.setItem("bank", Number(localStorage.getItem("bank")));
      localStorage.setItem("money", 0);
      setState("lose");
    }
    // Win
    else if (dealerScore > 21 || (myScore > dealerScore && myScore < 21)) {
      localStorage.setItem(
        "bank",
        Number(localStorage.getItem("bank")) +
          Number(localStorage.getItem("money") * 2)
      );
      localStorage.setItem("money", 0);
      setState("win");
    }
  }
  useEffect(() => {
    if (state !== "") {
      const timer = setInterval(() => {
        setOpacity((prevCount) => {
          var newCount = prevCount + 0.005;
          if (newCount > 2) {
            clearInterval(timer); // count가 10이 되면 타이머를 정리
          }
          console.log(newCount);
          return newCount;
        });
      }, 1);
      return () => {
        clearInterval(timer);
      };
    }
    return () => {
      clearInterval(0);
    };
  }, [state]);

  return (
    <Layout>
      {state && (
        <Result href="/setting" style={{ opacity }}>
          {state}
          <br />
          click to Back
        </Result>
      )}
      <Board>
        <DealerBox>
          <CardBox>
            <Card src={list[youCards[0]]}></Card>
            <Card src={list[youCards[1]]}></Card>
          </CardBox>
          <InfoBox>
            <Score>{dealerScore}</Score>
            <Name>딜러</Name>
          </InfoBox>
        </DealerBox>
        <ActiveBox>
          <Hit
            onClick={() => {
              const a = Math.floor(Math.random() * 48);
              setMyCards([myCards[0], myCards[1], a]);
              const sum_ =
                (myCards[0] % 12) +
                2 +
                ((myCards[1] % 12) + 2) +
                ((a % 12) + 2);
              setMyScore(sum_);
              localStorage.setItem("myscore", sum_);
              // 21을 넘김
              winAndLose();
            }}
          >
            HIT
          </Hit>
          <Money>{localStorage.getItem("money")}</Money>
          <Stand
            onClick={() => {
              winAndLose();
            }}
          >
            STAND
          </Stand>
        </ActiveBox>
        <MyBox>
          <CardBox>
            <Card src={list[myCards[0]]}></Card>
            <Card src={list[myCards[1]]}></Card>
            <Card src={list[myCards[2]]}></Card>
          </CardBox>
          <InfoBox>
            <Score>{myScore}</Score>
            <Name>{localStorage.getItem("name")}</Name>
          </InfoBox>
        </MyBox>
      </Board>
    </Layout>
  );
}
const Result = styled.a`
  opacity: 0;
  transition: opacity 1s ease-in-out;
  font-size: 5rem;
  font-weight: 900;
  display: flex;
  color: red;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3;
  height: 100%;
  width: 100%;
`;
const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: red;
`;

const Board = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: #25710a;
  box-shadow: 0 0 30px 20px rgba(0, 0, 0, 0.5) inset;
`;
const Box = styled.div`
  width: 100%;
  height: 33.333%;
`;
const DealerBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const CardBox = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ActiveBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const MyBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-direction: row;
`;

const Card = styled.img`
  width: 100px;
`;

const Score = styled.div`
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 4rem;
  background-color: white;
  border-radius: 100rem;
  justify-content: center;
  padding: 2.5rem;
  width: 2rem;
  height: 2rem;
`;

const Name = styled.div`
  font-size: 2rem;
  font-weight: 900;
`;

const Hit = styled.button`
  width: 20%;
  font-size: 2rem;
  font-weight: 900;
  height: 50%;
  background-color: #00c608;
  color: white;
  border: none;
`;

const Money = styled.div`
  font-size: 4rem;
  font-weight: 900;
  color: white;
  background-color: black;
  padding: 0 20px;
`;

const Stand = styled.button`
  width: 20%;
  height: 50%;
  font-size: 2rem;
  font-weight: 900;
  background-color: #00c608;
  color: white;
  border: none;
`;

export default Single;
