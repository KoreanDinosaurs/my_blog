import React from "react";
import styled from "styled-components";

import Light from "@/images/light_mode.svg";
import Dark from "@/images/dark_mode.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrap>
        <h1>BLOG</h1>
        <GNB>
          <LightButton src={Light} alt="light mode" />
        </GNB>
      </HeaderWrap>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: center;
  background-color: var(--colors-blue500);
`;

const HeaderWrap = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;

  h1 {
    height: 100%;
    color: white;
    background-color: transparent;
  }
`;

const GNB = styled.div``;
const LightButton = styled.img`
  width: 30px;
  fill: white;
`;
export default Header;
