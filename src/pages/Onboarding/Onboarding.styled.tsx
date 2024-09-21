import { fontSize, fontWeight } from "@/_shared/typography";
import styled from "styled-components";

export const Header = styled.div`
  margin: 0px 10px;
`;

export const Description = styled.p`
  font-size: ${fontSize.h2};
  font-weight: ${fontWeight.semiBold};
`;

export const Category = styled.p`
  font-size: ${fontSize.body1};
`;

export const Wrapper = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 5%;
`;

export const ButtonBox = styled.div`
  margin: 0px 15px;
`;
