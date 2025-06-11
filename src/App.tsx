import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Main } from "./Components/Main";
import { Navbar } from "./Components/Navbar";
import { PageContainer } from "./Components/PageContainer";
import { FooterSection } from "./Components/Footer/FooterSection";
export const App: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <PageContainer>
      <Navbar />
      <Main />
      <FooterSection/>
    </PageContainer>
  );
};
