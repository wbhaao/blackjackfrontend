import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Layout>
      <LoginForm>
        <InputBox>
          <LoginInput type="text" name="name" placeholder="name"></LoginInput>
          <LoginInput
            type="password"
            name="password"
            placeholder="password"
          ></LoginInput>
        </InputBox>
        <SendButton type="submit"></SendButton>
      </LoginForm>
    </Layout>
  );
}
const Layout = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
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

const SendButton = styled.input`
  height: 8rem;
  width: 100%;
  border-radius: 100rem;
  font-size: 2rem;
  padding: 1rem;
`;

export default Login;
