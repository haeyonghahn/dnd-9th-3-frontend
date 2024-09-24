import { useState } from "react";
import {
  Container,
  ButtonBox,
  Description,
  FileWrapper,
  Indicator,
  InputBox,
  StateBox,
  StateMessageBox,
  Wrapper,
} from "./Record.styled";
import Typography from "@/foundations/Typography";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Switch from "@/components/Switch";
import Button from "@/components/Button";
import { colors } from "@/_shared/colors";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  categoryPopUpAtom,
  recordDayPopUpAtom,
  recordPlacePopUpAtom,
  scorePopUpAtom,
} from "@/atoms/popup";
import Calendar from "./Calendar/Calendar";
import {
  recordCategoriesAtom,
  recordDateAtom,
  recordDescriptAtom,
  recordImageAtom,
  recordPlaceAtom,
  recordStateAtom,
  recordTitleAtom,
} from "@/atoms/record";
import { format } from "date-fns";
import Category from "./Category/Category";
import RecordPlace from "./Place/RecordPlace";
import Score from "./Score/Score";
import { PopUp } from "@/components/PopUp";
import File from "./File/File";

type Status = "default" | "error" | "success";

const Record = () => {
  const recordImage = useRecoilValue(recordImageAtom);
  const [title, setTitle] = useRecoilState(recordTitleAtom);
  const [titleStatus, setStatus] = useState<Status>("default");
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    if (0 < value.length && value.length > 20) {
      setStatus("error");
    } else {
      setStatus("default");
    }
    setTitle(value);
  };

  const [descript, setDescript] = useRecoilState(recordDescriptAtom);
  const [descriptStatus, setDescriptStatus] = useState<Status>("default");
  const handleDescriptChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const {
      currentTarget: { value },
    } = event;
    if (0 < value.length && value.length > 100) {
      setDescriptStatus("error");
    } else {
      setDescriptStatus("default");
    }
    setDescript(value);
  };

  const [recordDayPopUp, setRecordDayPopUp] =
    useRecoilState(recordDayPopUpAtom);
  const recordDay = useRecoilValue(recordDateAtom);
  const handleDayChange = () => {};
  const handleDayClick = () => {
    setRecordDayPopUp((prev) => !prev);
  };

  const [recordPlacePopUp, setRecordPlacePopUp] =
    useRecoilState(recordPlacePopUpAtom);
  const recordPlace = useRecoilValue(recordPlaceAtom);
  const handlePlaceChange = () => {};
  const handlePlaceClick = () => {
    setRecordPlacePopUp((prev) => !prev);
  };

  const [categoryPopUp, setCategoryPopUp] = useRecoilState(categoryPopUpAtom);
  const categories = useRecoilValue(recordCategoriesAtom);
  const handleCategoryChange = () => {};
  const handleCategoryClick = () => {
    setCategoryPopUp((prev) => !prev);
  };

  const setRecordState = useSetRecoilState(recordStateAtom);
  const handleSateClick = () => {
    setRecordState((prev) => {
      if (prev === "PRIVATE") {
        return "PUBLIC";
      } else {
        return "PRIVATE";
      }
    });
  };

  const [scorePopUp, setScorePopUp] = useRecoilState(scorePopUpAtom);
  const handleScoreClick = () => {
    setScorePopUp((prev) => !prev);
  };

  return (
    <Container>
      <Indicator />
      <FileWrapper>
        {recordImage.map((file, index) => (
          <File key={file.id} id={index} file={file.file} />
        ))}
      </FileWrapper>
      <Wrapper>
        <Typography text="어떤 굳이데이를 보내셨나요?" type="h3" />
        <InputBox>
          <Input
            status={titleStatus}
            placeholder="제목을 입력해주세요."
            handleChange={(event) => handleTitleChange(event)}
            theme="dark"
            value={title}
            messageBoxShow={false}
          />
        </InputBox>
        <Description>
          <TextArea
            status={descriptStatus}
            placeholder="굳이데이 활동과 계기에 대해 작성해주세요."
            handleChange={(event) => handleDescriptChange(event)}
            theme="dark"
            value={descript}
            messageBoxShow={false}
          />
        </Description>
        <Typography text="활동 날짜" type="h3" />
        <InputBox>
          <Input
            status="default"
            placeholder="YY / MM / DD"
            theme="dark"
            value={recordDay ? format(recordDay, "yy / MM / dd") : ""}
            messageBoxShow={false}
            rightIcon="rightArrow"
            rightminX="-15"
            rightminY="-8"
            rightwidth="30"
            rightheight="35"
            handleChange={handleDayChange}
            handleClick={handleDayClick}
            disabled={true}
          />
        </InputBox>
        <Typography text="활동 장소" type="h3" />
        <InputBox>
          <Input
            status="default"
            placeholder="장소를 설정해주세요.(선택)"
            handleChange={handlePlaceChange}
            theme="dark"
            value={recordPlace.placeName}
            messageBoxShow={false}
            leftIcon="locationOn"
            leftminX="0"
            leftminY="0"
            leftviewBoxHeight="12"
            leftviewBoxWidth="12"
            leftwidth="25"
            leftheight="30"
            leftfill={recordPlace.placeName ? "#3CEFA3" : "#75777B"}
            rightIcon="rightArrow"
            rightminX="-15"
            rightminY="-8"
            rightwidth="30"
            rightheight="35"
            handleClick={handlePlaceClick}
            disabled={true}
          />
        </InputBox>
        <Typography text="활동 카테고리" type="h3" />
        <InputBox>
          <Input
            status="default"
            placeholder="카테고리를 설정해주세요.(선택)"
            handleChange={handleCategoryChange}
            theme="dark"
            value={
              categories && categories.length > 0
                ? categories.map((category) => category.interestName).join(" ")
                : ""
            }
            messageBoxShow={false}
            rightIcon="rightArrow"
            rightminX="-15"
            rightminY="-8"
            rightwidth="30"
            rightheight="35"
            handleClick={handleCategoryClick}
            disabled={true}
          />
        </InputBox>
        <StateBox>
          <Typography text="공개 여부 설정" type="h3" />
          <Switch
            handleHeight="25px"
            handleWidth="25px"
            height="25px"
            width="50px"
            padding="0px"
            callback={handleSateClick}
          />
        </StateBox>
        <StateMessageBox>
          <Typography
            text="기록을 공개하면, 다른 사람들도 나의 기록을 볼 수 있습니다."
            type="body3"
          />
        </StateMessageBox>
        <ButtonBox>
          <Button
            text="다음"
            width="100%"
            color={colors.white}
            bordercolor={colors.inputTextClor}
            backgroundcolor={colors.gray850}
            onClick={handleScoreClick}
          />
        </ButtonBox>
      </Wrapper>
      {recordDayPopUp ? (
        <>
          <PopUp
            state={recordDayPopUpAtom}
            height="50%"
            children={<Calendar date={recordDay} />}
          />
        </>
      ) : null}
      {recordPlacePopUp ? (
        <>
          <PopUp
            state={recordPlacePopUpAtom}
            height="100%"
            children={<RecordPlace />}
          ></PopUp>
        </>
      ) : null}
      {categoryPopUp ? (
        <>
          <PopUp
            state={categoryPopUpAtom}
            height="50%"
            children={<Category categories={categories ? categories : []} />}
          />
        </>
      ) : null}
      {scorePopUp ? (
        <>
          <PopUp state={scorePopUpAtom} height="100%" children={<Score />} />
        </>
      ) : null}
    </Container>
  );
};

export default Record;
