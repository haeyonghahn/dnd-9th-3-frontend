import styled from "styled-components";
import Icon from "./Icon";
import { icons } from "@/_shared/icons";
import Background from "../Background";
import { colors } from "@/_shared/colors";

const category = [
  "shopping",
  "travel",
  "delicacies",
  "reading",
  "cooking",
  "culture",
  "sports",
  "hobby",
  "study",
];

const locationOn = "locationOn";
const ellipse = "ellipse";
const arrow = ["rightArrow", "leftArrow"];
const search = "search";

export default {
  title: "Foundations/Icon",
  component: Icon,
};

export const AllTypes = () => (
  <Background theme="dark">
    <List>
      {Object.keys(icons).map((key) =>
        category.indexOf(key) !== -1 ? (
          <Item key={key}>
            <Icon
              icon={key}
              minX="0"
              minY="0"
              viewBoxHeight="48"
              viewBoxWidth="48"
              height="48"
              width="48"
              aria-hidden
            />
            <Meta>{key}</Meta>
          </Item>
        ) : locationOn === key ? (
          <Item key={key}>
            <Icon
              icon={key}
              minX="-5"
              minY="-5"
              viewBoxHeight="24"
              viewBoxWidth="24"
              height="24"
              width="24"
              fill={colors.green100}
              aria-hidden
            />
            <Meta>{key}</Meta>
          </Item>
        ) : ellipse === key ? (
          <Item key={key}>
            <Icon
              icon={key}
              minX="-10"
              minY="-10"
              viewBoxHeight="24"
              viewBoxWidth="24"
              height="24"
              width="24"
              fill={colors.white}
              aria-hidden
            />
            <Meta>{key}</Meta>
          </Item>
        ) : arrow.indexOf(key) !== -1 ? (
          <Item key={key}>
            <Icon
              icon={key}
              minX="-9"
              minY="-5"
              viewBoxHeight="24"
              viewBoxWidth="24"
              height="24"
              width="24"
              aria-hidden
            />
            <Meta>{key}</Meta>
          </Item>
        ) : search === key ? (
          <Item key={key}>
            <Icon
              icon={key}
              minX="0"
              minY="0"
              viewBoxHeight="24"
              viewBoxWidth="24"
              height="24"
              width="24"
              fill="white"
              aria-hidden
            />
            <Meta>{key}</Meta>
          </Item>
        ) : (
          <Item key={key}>
            <Icon
              icon={key}
              minX="0"
              minY="0"
              viewBoxHeight="24"
              viewBoxWidth="24"
              height="24"
              width="24"
              aria-hidden
            />
            <Meta>{key}</Meta>
          </Item>
        )
      )}
    </List>
  </Background>
);

const Meta = styled.div`
  color: white;
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
  gap: 15px;
`;
