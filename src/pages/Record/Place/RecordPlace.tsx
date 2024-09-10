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
import { useEffect, useMemo, useState } from "react";
import { colors } from "@/_shared/colors";
import { useDebounce } from "@/hooks/useDebounce";
import { getRecordPlace } from "@/api/record";
import { useFetchRecordPlaces } from "@/hooks/api/useFetchRecordPlaces";
import { useIntersect } from "@/hooks/useIntersect";

interface IRecordPlace {
  placeName: string;
  addressName: string;
  placeLatitude: number;
  placeLongitude: number;
}

const RecordPlace = () => {
  const [keyword, setKeyword] = useState("");
  const [places, setPlaces] = useState<IRecordPlace[] | null>(null);
  // const debouncedKeyword = useDebounce(keyword, 500);
  const handlePlaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setKeyword(value);
  };

  const { data, hasNextPage, isFetching, fetchNextPage } = useFetchRecordPlaces(
    { keyword: keyword, size: 15 }
  );
  // const ref = useIntersect(async (entry, observer) => {
  //   observer.unobserve(entry.target);
  //   if (hasNextPage && !isFetching) {
  //     fetchNextPage();
  //   }
  // });

  // const fetchRecordPlace = () => {
  // };

  // useEffect(() => {
  //   if (debouncedKeyword && keyword) {
  //     fetchRecordPlace();
  //   }
  // }, [debouncedKeyword]);
  return (
    <>
      <RecordPlaceContainer>
        <RecordPlaceHeaderWrapper>
          <Typography text="장소 선택" type="h1" />
          <RecordPlaceIndicator />
        </RecordPlaceHeaderWrapper>
        <RecordPlaceInputBox>
          <Input
            status="default"
            placeholder="지역,장소 검색"
            handleChange={(event) => handlePlaceChange(event)}
            theme="dark"
            value={keyword}
            messageBoxShow={false}
            icon="search"
            fill="currentColor"
            viewBoxWidth="20"
            viewBoxHeight="20"
            icondirection="right"
          />
        </RecordPlaceInputBox>
        <RecordPlaceBox>
          {places && places.length > 0 ? (
            places.map((place, index) => (
              <RecordPlaceCard key={index}>
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
