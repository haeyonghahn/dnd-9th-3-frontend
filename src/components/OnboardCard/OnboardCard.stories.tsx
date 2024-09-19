import Background from "@/foundations/Background";
import styled from "styled-components";
import Typography from "@/foundations/Typography/Typography";
import OnboardCard from "./OnboardCard";
export default {
  title: "Components/OnboardCard",
  component: OnboardCard,
};

export const AllTypes = () => (
  <>
    <Background theme="dark">
      <TypeBox>
        <CardBox>
          <OnboardCard icon="shopping" interestCode="1" interestName="쇼핑" />
          <Typography text="Default" type="h0" />
        </CardBox>
        <CardBox>
          <OnboardCard icon="travel" interestCode="2" interestName="여행" />
        </CardBox>
      </TypeBox>
    </Background>
  </>
);

const TypeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 1rem;
`;

const CardBox = styled.div`
  display: flex;
  gap: 2rem;
  width: 50%;
  height: 200px;
`;
