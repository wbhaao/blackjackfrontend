import React, { useEffect, useState } from "react";
import styled from "styled-components";
import c50 from "../assets/50c.png";
import c100 from "../assets/100c.png";
import c500 from "../assets/500c.png";
import c1000 from "../assets/1000c.png";
import c2500 from "../assets/2500c.png";
import c5000 from "../assets/5000c.png";

function Setting() {
  const array = [c50, c100, c500, c1000, c2500, c5000];
  const array2 = [50, 100, 500, 1000, 2500, 5000];
  const [bank, setBank] = useState(5000);
  const [money, setMoney] = useState(0);
  const [chipFake, setChipFake] = useState(null);
  const username = "추성우";
  var c = "";
  return (
    <Layout>
      <InfoBox>
        <UserInfoBox>
          <UserName>USER.{username}</UserName>
          <Bank>BANK. {bank.toLocaleString()}</Bank>
        </UserInfoBox>
        <Coins>{chipFake && <ChipFake src={chipFake} />}</Coins>
        <Money>{money.toLocaleString()}$</Money>
      </InfoBox>
      <ActiveBox>
        <ChipBox>
          {array.map((item, index) => {
            if (array2[index] <= bank) {
              return (
                <Chip
                  src={item}
                  onClick={() => {
                    if (bank - array2[index] >= 0) {
                      setMoney(money + array2[index]);
                      setBank(bank - array2[index]);
                      setChipFake(array[index]);
                    } else {
                      alert("돈이 엄서여");
                    }
                  }}
                />
              );
            }
          })}
        </ChipBox>
        <ButtonBox>
          <AllIn
            onClick={() => {
              setMoney(money + bank);
              setBank(0);
            }}
          >
            ALL IN
          </AllIn>
          <Reset
            onClick={() => {
              setBank(money + bank);
              setMoney(0);
              setChipFake();
            }}
          >
            RESET
          </Reset>
          <Deal>DEAL</Deal>
          <Leave>LEAVE</Leave>
        </ButtonBox>
      </ActiveBox>
    </Layout>
  );
}
const Layout = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #25710a;
  flex-direction: column;
  box-shadow: 0 0 30px 20px rgba(0, 0, 0, 0.5) inset;
`;
const InfoBox = styled.div`
  display: flex;
  height: 40%;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

const Coins = styled.div`
  width: 0rem;
`;

const UserInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0.2% 0.7% 0.2% 1.2%;
`;

const UserName = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: white;
`;

const Bank = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: white;
`;

const Money = styled.div`
  width: 10rem;
  padding-top: 3.8rem;
  padding-right: 1rem;
  font-size: 3rem;
  font-weight: 900;
  color: white;
`;

const ActiveBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60%;
  justify-content: space-between;
`;

const ChipBox = styled.div`
  display: flex;
  width: 70%;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 0px 10px 0 0;
  flex-wrap: wrap;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5) inset;
`;

const Chip = styled.img`
  margin: 1.5rem 0rem 1.5rem 1.5rem;
  height: 6rem;
  width: 6rem;
`;

const ChipFake = styled.img`
  margin: 1.5rem 0rem 1.5rem -4rem;
  height: 6rem;
  width: 6rem;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  * {
    flex: 1;
    margin: 0.5rem;
    font-size: 1.5rem;
    font-weight: 900;
    border: none;
  }
`;
const Reset = styled.button``;

const AllIn = styled.button`
  background-color: pink;
`;

const Deal = styled.button`
  background-color: #8cf0b2;
`;

const Leave = styled.button`
  background-color: red;
`;

export default Setting;
