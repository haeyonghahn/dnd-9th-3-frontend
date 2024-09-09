import Typography from "@/foundations/Typography";
import { RecordPlaceBox, RecordPlaceContent, RecordPlaceHeaderWrapper, RecordPlaceIndicator, RecordPlaceWrapper } from "./RecordPlace.styled";
import Input from "@/components/Input";
import { useState } from "react";

const RecordPlace = () => {
  const [recordPlace, setRecordPlace] = useState("");
  const handlePlaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setRecordPlace(value);
  };
  return (
    <>
      <div>
        <RecordPlaceHeaderWrapper>
          <Typography text="장소 선택" type="h1" />
          <RecordPlaceIndicator />
        </RecordPlaceHeaderWrapper>
        <RecordPlaceWrapper>
          <RecordPlaceBox>
            <Input
              status="default"
              placeholder="지역,장소 검색"
              handleChange={(event) => handlePlaceChange(event)}
              theme="dark"
              value={recordPlace}
              messageBoxShow={false}
              icon="search"
              fill="currentColor"
              viewBoxWidth="20"
              viewBoxHeight="20"
              icondirection="right"
            />
          </RecordPlaceBox>
          <RecordPlaceBox>
            <RecordPlaceContent>
              <Typography
                text="굳이데이를 즐긴 장소를 검색해주세요."
                type="body2"
              />
            </RecordPlaceContent>
          </RecordPlaceBox>
        </RecordPlaceWrapper>
      </div>
    </>
  );
}

export default RecordPlace;