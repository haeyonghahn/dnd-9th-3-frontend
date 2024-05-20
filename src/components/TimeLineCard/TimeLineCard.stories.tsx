import Background from "@/foundations/Background";
import RecordCard from "./TimeLineCard";
import styled from "styled-components";
import TimeLineCard from "./TimeLineCard";

export default {
  title: "Components/TimeLineCard",
  component: TimeLineCard,
};

export const AllTypes = () => (
  <>
    <Background theme="dark">
      <RecordCardBox>      
        <RecordCard 
          date="1월 24일(수)" 
          src="/images/ocean.jpg" 
          placeName="피피섬" 
          title="여행" 
          description="바다 배경 화면" 
          images={["puppy.jpg", 'desert.jpg']}
          theme="dark" />
        <RecordCard 
          date="1월 23일(화)" 
          src="/images/desert.jpg" 
          placeName="사하라 사막" 
          title="해질녘" 
          description="오늘은 나의 첫 굳이데이를 즐겼다. 처음으로 사막에 왔다. 날씨가 너무 더워 힘들었지만 저녁이 되니 멋진 풍경이 눈에 띄여 
          너무 예뻤다." 
          images={["puppy.jpg", 'desert.jpg', 'ocean.jpg']}
          theme="dark" />
      </RecordCardBox>
    </Background>
    <Background theme="light">
      <RecordCardBox>
        <RecordCard 
          date="1월 24일(수)" 
          src="/images/ocean.jpg" 
          placeName="피피섬" 
          title="여행" 
          description="바다 배경 화면" 
          images={["puppy.jpg", 'desert.jpg']}
          theme="light" />
        <RecordCard 
          date="1월 23일(화)" 
          src="/images/desert.jpg" 
          placeName="사하라 사막" 
          title="해질녘" 
          description="오늘은 나의 첫 굳이데이를 즐겼다. 처음으로 사막에 왔다. 날씨가 너무 더워 힘들었지만 저녁이 되니 멋진 풍경이 눈에 띄여 
          너무 예뻤다." 
          images={["puppy.jpg", 'desert.jpg']}
          theme="light" />
      </RecordCardBox>
    </Background>
  </>
);

const RecordCardBox = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;