import React from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/accordion";
import { HeaderContainer } from "../containers/header";

function Home() {
  return (
    <>
      <HeaderContainer>
        <p>Hello World</p>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
