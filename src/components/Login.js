import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Wrapper>
      <Content>
        <LogoOne src="images/cta-logo-one.svg" />
        <SignUp>Sign Up</SignUp>
        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          rerum laboriosam ad culpa porro nihil adipisci labore quos quasi alias
          et aliquid, dolore magni provident voluptas repellat?
        </Description>
        <LogoTwo src="images/cta-logo-two.png" />
      </Content>
    </Wrapper>
  );
}

export default Login;

const Wrapper = styled.div`
  height: calc(100vh - 75px);
  background: url("images/login-background.jpg") no-repeat top;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

const Content = styled.section`
  width: clamp(300px, 80%, 550px);
  height: 10rem;
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoOne = styled.img`
  width: 100%;
`;
const LogoTwo = styled.img`
  width: 90%;
`;

const SignUp = styled.button`
  cursor: pointer;
  background: #0063e5;
  width: 100%;
  text-align: center;
  color: white;
  padding: 1.3rem 0;
  border: none;
  border-radius: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin: 1rem 0;
  transition: var(--ease-quick);
  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.div`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 2rem;
`;
