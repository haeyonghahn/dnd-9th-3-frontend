import styled from "styled-components";
import IconSocial from "./IconSocial";
import { social } from "@/_shared/icons";

export default {
  title: "Foundations/IconSocial",
  component: IconSocial,
};

export const AllTypes = () => (
  <>
    There are {Object.keys(social).length} social icons
    <List>
      <Item>
        <IconSocial icon={social.google} aria-hidden />
      </Item>
      <Item>
        <IconSocial icon={social.kakao} aria-hidden />
      </Item>
    </List>
  </>
);

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`;

const Item = styled.li`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 7.5px 20px;
`;
