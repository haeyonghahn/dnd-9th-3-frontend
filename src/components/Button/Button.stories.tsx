import Background from "@/foundations/Background";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const AllTypes = () => (
  <>
    <Background theme="dark">
      <h1>Primary Dark</h1>
      <Button width="200px" text="기록 완료" />
      <br />
      <Button width="200px" text="기록 완료" disabled={true} />
      <br />
      <Button width="200px" isloading="true" />
      <br />
    </Background>
  </>
);
