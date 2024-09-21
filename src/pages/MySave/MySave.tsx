import { useQuery } from "@tanstack/react-query";
import { MySaveImage, Wrapper } from "./MySave.styled";
import { getMyRecord } from "@/api/record";
import { IRecord } from "@/types/record";

const MySave = () => {
  const { data: myRecordData } = useQuery<IRecord[] | null>({
    queryKey: ["myRecord"],
    queryFn: getMyRecord,
    throwOnError: true,
  });

  return (
    <>
      {myRecordData && myRecordData.length > 0 ? (
        <>
          <Wrapper>
            <MySaveImage>
              <img src="/images/desert.jpg" />
            </MySaveImage>
            <MySaveImage>
              <img src="/images/puppy.jpg" />
            </MySaveImage>
            <MySaveImage>
              <img src="/images/ocean.jpg" />
            </MySaveImage>
          </Wrapper>
          <Wrapper>
            <MySaveImage>
              <img src="/images/desert.jpg" />
            </MySaveImage>
            <MySaveImage>
              <img src="/images/puppy.jpg" />
            </MySaveImage>
            <MySaveImage>
              <img src="/images/ocean.jpg" />
            </MySaveImage>
          </Wrapper>
        </>
      ) : (
        <div
          style={{
            margin: "10% auto",
            textAlign: "center",
            color: "#75777b",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          내 취향의 굳이데이 기록을 모아보세요.
        </div>
      )}
    </>
  );
};

export default MySave;
