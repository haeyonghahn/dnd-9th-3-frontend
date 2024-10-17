import { useQuery } from "@tanstack/react-query";
import { getRecordByBookMark } from "@/api/record";
import { IRecord } from "@/types/record";
import { ImageBox, Wrapper } from "./BookMark.styled";

const BookMark = () => {
  const { data: myRecordData } = useQuery<IRecord[] | null>({
    queryKey: ["recordByBookMark"],
    queryFn: getRecordByBookMark,
    throwOnError: true,
  });

  return (
    <>
      {myRecordData && myRecordData.length > 0 ? (
        <>
          <Wrapper>
          {myRecordData.map((record, index) => (
            <ImageBox key={index}>
              <img src={record.images[0].path} />
            </ImageBox>
          ))}
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
