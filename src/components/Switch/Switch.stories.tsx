import Background from "@/foundations/Background";
import Switch from "./Switch";

export default {
  title: "Components/Switch",
  component: Switch,
};

const handleSwith = () => {};

export const AllTypes = () => (
  <>
    <Background theme="dark">
      <Switch
        callback={handleSwith}
        width="110px"
        handleHeight="50px"
        handleWidth="50px"
      />
    </Background>
  </>
);
