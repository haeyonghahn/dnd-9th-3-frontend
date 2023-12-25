import Background from "@/foundations/Background";
import Typography from "@/foundations/Typography/Typography";
import Input from "./Input";
import styled from "styled-components";

export default {
  title: "Components/Input",
  component: Input,
};

export const AllTypes = () => (
  <>
    <Background theme="dark">
      <TypeBox>
        <Typography type="h3" text="Default" />
        <Input
          status="default"
          placeholder="닉네임 입력 (15자 이내)"
          theme="dark"
        />
        <Input
          status="default"
          title="라벨"
          theme="dark"
          placeholder="닉네임 입력 (15자 이내)"
          message="This is a hint text to help user."
        />
        <Input
          status="error"
          title="라벨"
          theme="dark"
          placeholder="닉네임 입력 (15자 이내)"
          message="This is error message."
        />
        <Input
          status="default"
          title="이메일"
          theme="dark"
          placeholder="이메일"
          message="가입한 이메일 주소를 입력해주세요."
          icon="email"
        />
      </TypeBox>
    </Background>
    <Background theme="white">
      <TypeBox>
        <Typography type="h3" text="Default" />
        <Input status="default" placeholder="닉네임 입력 (15자 이내)" />
        <Input
          status="default"
          placeholder="닉네임 입력 (15자 이내)"
          title="라벨"
          message="This is a hint text to help user."
        />
        <Input
          status="error"
          placeholder="닉네임 입력 (15자 이내)"
          title="라벨"
          message="This is error message."
        />
        <Input
          status="default"
          title="이메일"
          theme="white"
          placeholder="이메일"
          message="가입한 이메일 주소를 입력해주세요."
          icon="email"
        />
      </TypeBox>
    </Background>
  </>
);

const TypeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;
