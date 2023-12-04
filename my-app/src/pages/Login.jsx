import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

function Login() {
  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
  };
  async function login(params) {
    console.log(params);
    const a = await axios
      .get(`http://localhost:5000/signin?name=${params}`)
      .catch((error) => {
        localStorage.setItem("bank", Number(0));
        localStorage.setItem("money", Number(0));
        localStorage.setItem("name", "이름이 없네");
        window.location.href = "setting";
      });
    let b = Number(a["data"]);
    if (a === 9999) {
      console.log("실패!");
      window.location.href = "login";
    } else {
      localStorage.setItem("bank", b);
      localStorage.setItem("money", Number(0));
      localStorage.setItem("name", text);
      window.location.href = "setting";
    }
  }
  return (
    <Layout>
      <InputBox>
        <LoginInput
          onChange={onChange}
          type="text"
          name="name"
          placeholder="name"
        ></LoginInput>
        <LoginInput
          type="password"
          name="password"
          placeholder="password"
        ></LoginInput>
        <SendButton
          onClick={() => {
            login(text);
          }}
        >
          submit
        </SendButton>
      </InputBox>
    </Layout>
  );
}
const Layout = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #423030;
`;

const LoginForm = styled.form`
  display: flex;
  width: 80%;
  height: 90%;
  flex-direction: column;
  gap: 1rem;
`;

const InputBox = styled.div`
  background-color: #5c4444;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10%;
  gap: 2rem;
`;

const LoginInput = styled.input`
  height: 3rem;
  width: 100%;
  border-radius: 100rem;
  font-size: 2rem;
  padding: 1rem;
`;

const SendButton = styled.button`
  height: 8rem;
  width: 100%;
  border-radius: 100rem;
  font-size: 2rem;
  padding: 1rem;
`;

export default Login;
