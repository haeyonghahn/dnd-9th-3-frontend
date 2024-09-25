import { useQuery } from "@tanstack/react-query";
import { getMyRecord } from "@/api/record";
import { IRecord } from "@/types/record";
import { ImageBox, Wrapper } from "./BookMark.styled";

const BookMark = () => {
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
            <ImageBox>
              <img src="/images/desert.jpg" />
            </ImageBox>
            <ImageBox>
              <img src="/images/puppy.jpg" />
            </ImageBox>
            <ImageBox>
              <img src="/images/ocean.jpg" />
            </ImageBox>
          </Wrapper>
          <Wrapper>
            <ImageBox>
              <img src="/images/desert.jpg" />
            </ImageBox>
            <ImageBox>
              <img src="/images/puppy.jpg" />
            </ImageBox>
            <ImageBox>
              <img src="/images/ocean.jpg" />
            </ImageBox>
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

export default BookMark;
