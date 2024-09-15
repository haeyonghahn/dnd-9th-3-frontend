import Typography from "@/foundations/Typography";
import {
  RecordCardIndicator,
  RecordPlaceBox,
  RecordPlaceCard,
  RecordPlaceCardDescription,
  RecordPlaceContainer,
  RecordPlaceContent,
  RecordPlaceHeaderWrapper,
  RecordPlaceIndicator,
  RecordPlaceInputBox,
} from "./RecordPlace.styled";
import Input from "@/components/Input";
import { useMemo, useState } from "react";
import { colors } from "@/_shared/colors";
import { useFetchRecordPlaces } from "@/hooks/api/useFetchRecordPlaces";
import { useIntersect } from "@/hooks/useIntersect";
import { recordPlacePopUpAtom } from "@/atoms/popup";
import { useSetRecoilState } from "recoil";
import { recordPlaceAtom } from "@/atoms/record";
import Icon from "@/foundations/Icon";

interface RecordPlace {
  placeName: string;
  addressName: string;
  placeLatitude: number;
  placeLongitude: number;
}

const RecordPlace = () => {
  const [keyword, setKeyword] = useState("");
  const handlePlaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setKeyword(value);
  };

  const { data, hasNextPage, isFetching, fetchNextPage } = useFetchRecordPlaces(
    { keyword: keyword, size: 15 }
  );

  const places = useMemo(
    () => (data ? data.pages.flatMap(({ data }) => data) : []),
    [data]
  );

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  const haandleGoBack = () => {
    setRecordPlacePopUp((prev) => !prev);
  };

  const setRecordPlace = useSetRecoilState(recordPlaceAtom);
  const setRecordPlacePopUp = useSetRecoilState(recordPlacePopUpAtom);
  const handleClick = (place: RecordPlace) => {
    setRecordPlace(place);
    setRecordPlacePopUp((prev) => !prev);
  };
  return (
    <>
      <RecordPlaceContainer>
        <RecordPlaceHeaderWrapper>
          <div style={{ position: "absolute", left: "5%" }}>
            <Icon
              icon="leftArrow"
              minX="0"
              minY="-5"
              viewBoxHeight="18"
              viewBoxWidth="18"
              width="30"
              height="35"
              onClick={haandleGoBack}
            />
          </div>
          <div style={{ margin: "0 auto" }}>
            <Typography text="장소 선택" type="h1" />
          </div>
        </RecordPlaceHeaderWrapper>
        <RecordPlaceIndicator />
        <RecordPlaceInputBox>
          <Input
            status="default"
            placeholder="지역,장소 검색"
            handleChange={(event) => handlePlaceChange(event)}
            theme="dark"
            value={keyword}
            messageBoxShow={false}
            rightIcon="search"
            rightfill="currentColor"
            rightviewBoxWidth="20"
            rightviewBoxHeight="20"
          />
        </RecordPlaceInputBox>
        <RecordPlaceBox>
          {places && places.length > 0 ? (
            places.map((place, index) => (
              <RecordPlaceCard
                key={index}
                ref={ref}
                onClick={() => handleClick(place)}
              >
                <Typography text={place.placeName} type="body0" />
                <RecordPlaceCardDescription>
                  <Typography
                    text={place.addressName}
                    type="body2"
                    color={colors.gray500}
                  />
                </RecordPlaceCardDescription>
                <RecordCardIndicator />
              </RecordPlaceCard>
            ))
          ) : (
            <RecordPlaceContent>
              <Typography
                text="굳이데이를 즐긴 장소를 검색해주세요."
                type="body2"
              />
            </RecordPlaceContent>
          )}
        </RecordPlaceBox>
      </RecordPlaceContainer>
    </>
  );
};

export default RecordPlace;
