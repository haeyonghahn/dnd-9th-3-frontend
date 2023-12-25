import styled from "styled-components";
import Icon from "./Icon";
import { icons } from "@/_shared/icons";

export default {
  title: "Foundations/Icon",
  component: Icon,
};

export const AllTypes = () => (
  <>
    <List>
      {Object.keys(icons).map((key) => (
        <Item key={key}>
          <Icon icon={key} aria-hidden />
          <Meta>{key}</Meta>
        </Item>
      ))}
    </List>
  </>
);

const Meta = styled.div`
  color: #666;
  font-size: 12px;
`;

const Item = styled.li`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 20%;
  min-width: 120px;

  svg {
    margin-right: 10px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`;
