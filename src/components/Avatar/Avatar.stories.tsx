import styled from "styled-components";
import Avatar from "./Avatar";
import Typography from "@/foundations/Typography/Typography";
import Background from "@/foundations/Background";

export default {
  title: "Components/Avatar",
  component: Avatar,
};

export const AllTypes = () => (
  <>
    <Background theme="dark">
      <AvatarBox>
        <Typography text="Default" type="h3" />
        <TypeBox>
          <Avatar size="large" theme="dark" />
          <Avatar size="medium" theme="dark" />
          <Avatar size="small" theme="dark" />
        </TypeBox>
      </AvatarBox>
      <AvatarBox>
        <Typography text="Images" type="h3" />
        <TypeBox>
          <Avatar size="large" theme="dark" src="/images/default.svg" />
          <Avatar size="medium" theme="dark" src="/images/default.svg" />
          <Avatar size="small" theme="dark" src="/images/default.svg" />
        </TypeBox>
        <TypeBox>
          <Avatar size="large" theme="dark" src="/images/puppy.jpg" />
          <Avatar size="medium" theme="dark" src="/images/puppy.jpg" />
          <Avatar size="small" theme="dark" src="/images/puppy.jpg" />
        </TypeBox>
      </AvatarBox>
      <AvatarBox>
        <Typography text="Lodings" type="h3" />
        <TypeBox>
          <Avatar size="large" isloading="true" theme="dark" />
          <Avatar size="medium" isloading="true" theme="dark" />
          <Avatar size="small" isloading="true" theme="dark" />
        </TypeBox>
      </AvatarBox>
      <AvatarBox>
        <Typography text="Initials" type="h3" />
        <TypeBox>
          <Avatar size="large" theme="dark" username="youg1322@naver.com" />
          <Avatar size="medium" theme="dark" username="youg1322@naver.com" />
          <Avatar size="small" theme="dark" username="youg1322@naver.com" />
        </TypeBox>
      </AvatarBox>
    </Background>
    <Background theme="light">
      <AvatarBox>
        <Typography text="Default" type="h3" />
        <TypeBox>
          <Avatar size="large" theme="light" />
          <Avatar size="medium" theme="light" />
          <Avatar size="small" theme="light" />
        </TypeBox>
      </AvatarBox>
      <AvatarBox>
        <Typography text="Images" type="h3" />
        <TypeBox>
          <Avatar size="large" theme="light" src="/images/default.svg" />
          <Avatar size="medium" theme="light" src="/images/default.svg" />
          <Avatar size="small" theme="light" src="/images/default.svg" />
        </TypeBox>
        <TypeBox>
          <Avatar size="large" theme="light" src="/images/puppy.jpg" />
          <Avatar size="medium" theme="light" src="/images/puppy.jpg" />
          <Avatar size="small" theme="light" src="/images/puppy.jpg" />
        </TypeBox>
      </AvatarBox>
      <AvatarBox>
        <Typography text="Lodings" type="h3" />
        <TypeBox>
          <Avatar size="large" isloading="true" theme="light" />
          <Avatar size="medium" isloading="true" theme="light" />
          <Avatar size="small" isloading="true" theme="light" />
        </TypeBox>
      </AvatarBox>
      <AvatarBox>
        <Typography text="Initials" type="h3" />
        <TypeBox>
          <Avatar size="large" theme="light" username="youg1322@naver.com" />
          <Avatar size="medium" theme="light" username="youg1322@naver.com" />
          <Avatar size="small" theme="light" username="youg1322@naver.com" />
        </TypeBox>
      </AvatarBox>
    </Background>
  </>
);

const TypeBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
`;

const AvatarBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
