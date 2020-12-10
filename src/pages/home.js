import React from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/accordion";
import { HeaderContainer } from "../containers/header";
import { OptForm, Feature } from "../components";
import { Header } from "../components";
function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Watch unlimited for free</Feature.Title>
          <Feature.SubTitle>Watch Anytime. Cancel Anytime</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Enter your fullname" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch?Enter your email to create or restart your
              membership
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
