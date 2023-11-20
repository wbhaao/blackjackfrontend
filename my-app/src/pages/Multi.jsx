import React from "react";
import styled from "styled-components";

function Multi() {
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
        <SendButton></SendButton>
      </LoginForm>
    </Layout>
  );
}
const Layout = styled.div``;

const LoginForm = styled.form``;

const InputBox = styled.div``;

const LoginInput = styled.input``;

const SendButton = styled.input``;

export default Multi;
