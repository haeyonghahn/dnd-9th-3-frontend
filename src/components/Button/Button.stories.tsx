import Background from "@/foundations/Background";
import Button from "./Button";
import Typography from "@/foundations/Typography/Typography";

export default {
  title: "Components/Button",
  component: Button,
};

export const AllTypes = () => (
  <>
    <Background theme="dark">
      <Typography text="Secondary Brand Color" type="h0" />
      <br />
      <Button width="200px" text="기록 완료" />
      <br />
      <Button width="200px" text="기록 완료" disabled={true} />
      <br />
      <Button width="200px" isloading="true" theme="dark" />
      <br />
      <Button width="200px" text="취소" cancel="true" />
      <br />
    </Background>
    <Background theme="white">
      <Typography text="Secondary Brand Color" type="h0" />
      <br />
      <Button width="200px" text="기록 완료" />
      <br />
      <Button width="200px" text="기록 완료" disabled={true} />
      <br />
      <Button width="200px" isloading="true" theme="white" />
      <br />
      <Button width="200px" text="취소" cancel="true" />
      <br />
    </Background>
  </>
);
