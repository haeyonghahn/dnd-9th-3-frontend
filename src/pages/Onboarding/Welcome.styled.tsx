import { fontSize, fontWeight } from "@/_shared/typography";
import styled from "styled-components";

export const WelcomeWrapper = styled.div`
  height: 100vh;
`;

export const WelcomeMessageWrapper = styled.div`
  margin-top: 10%;
`;

export const WelcomeMessage = styled.p`
  display: inline;
  font-weight: ${fontWeight.semiBold};
  font-size: ${fontSize.h2};
`;

export const WelcomeSvgWrapper = styled.div`
  text-align: center;
`;

export const WelcomeButtonWrapper = styled.div`
  margin: 20px 20px 0px 20px;
`;
