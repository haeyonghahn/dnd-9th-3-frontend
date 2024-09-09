import Typography from "@/foundations/Typography";
import { RecordCardIndicator, RecordPlaceBox, RecordPlaceCard, RecordPlaceCardDescription, RecordPlaceHeaderWrapper, RecordPlaceIndicator, RecordPlaceWrapper } from "./RecordPlace.styled";
import Input from "@/components/Input";
import { useState } from "react";
import { colors } from "@/_shared/colors";

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
            {/* <RecordPlaceContent>
              <Typography
                text="굳이데이를 즐긴 장소를 검색해주세요."
                type="body2"
              />
            </RecordPlaceContent> */}
            <RecordPlaceCard>
              <Typography text="을왕리 해수욕장" type="body0" />
              <RecordPlaceCardDescription>
                <Typography
                  text="인천광역시 증구 을왕동"
                  type="body2"
                  color={colors.gray500}
                />
              </RecordPlaceCardDescription>
              <RecordCardIndicator />
            </RecordPlaceCard>
            <RecordPlaceCard>
              <Typography text="을왕리 바닷가" type="body0" />
              <RecordPlaceCardDescription>
                <Typography
                  text="인천광역시 증구 용유서로302번길 16-15"
                  type="body2"
                  color={colors.gray500}
                />
              </RecordPlaceCardDescription>
              <RecordCardIndicator />
            </RecordPlaceCard>
            <RecordPlaceCard>
              <Typography text="을왕리 조개구이집" type="body0" />
              <RecordPlaceCardDescription>
                <Typography
                  text="인천광역시 증구 을왕로 76"
                  type="body2"
                  color={colors.gray500}
                />
              </RecordPlaceCardDescription>
              <RecordCardIndicator />
            </RecordPlaceCard>
          </RecordPlaceBox>
        </RecordPlaceWrapper>
      </div>
    </>
  );
}

export default RecordPlace;