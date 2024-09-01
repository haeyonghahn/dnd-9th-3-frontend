import { RecoilState, useSetRecoilState } from "recoil";

interface PopUpProps {
  children: React.ReactNode;
  height?: string;
  state: RecoilState<boolean>;
}

const PopUp: React.FC<PopUpProps> = ({ children, height, state }) => {
  const setPopUpOver = useSetRecoilState(state);
  const onPopUpOver = () => {
    setPopUpOver((prev) => !prev);
  };
  return (
    <>
      <div
        onClick={onPopUpOver}
        style={{
          position: "fixed",
          top: "0",
          width: "500px",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "24px 24px 0px 0px",
          textAlign: "center",
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "500px",
          height: height ? height : "20%",
          backgroundColor: "#282932",
          borderRadius: "24px 24px 0px 0px",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default PopUp;
