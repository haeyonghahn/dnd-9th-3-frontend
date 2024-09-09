import { useRef, useState } from "react";
import {
  RecordButtonBox,
  RecordDescription,
  RecordImageBox,
  RecordImageWrapper,
  RecordIndicator,
  RecordInputBox,
  RecordStateBox,
  RecordStateMessageBox,
  RecordWrapper,
  RecrodContainer,
} from "./Record.styled";
import Typography from "@/foundations/Typography";
import Input from "@/components/Input";
import { Status } from "@/types/status";
import TextArea from "@/components/TextArea";
import Switch from "@/components/Switch";
import Button from "@/components/Button";
import { colors } from "@/_shared/colors";
import RecordImage from "./Image/RecordImage";
import { useRouter } from "@/hooks/useRouter";

const Record = () => {
  const { routeTo } = useRouter();
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (scrollRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1; // 드래그 속도 조정 (2는 배율)
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const [title, setTitle] = useState("");
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

  const [descript, setDescript] = useState("");
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

  const [recordDay, setRecordDay] = useState("");
  const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setRecordDay(value);
  };
  const handleDayClick = () => {
    console.log("day test");
  }

  const [recordPlace, setRecordPlace] = useState("");
  const handlePlaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setRecordPlace(value);
  };
  const handlePlaceClick = () => {
    routeTo("/record/place");
  }

  const handleCategoryChange = () => {
    console.log("category test");
  }
  const handleCategoryClick = () => {
    console.log("category test");
  };

  return (
    <RecrodContainer>
      <RecordIndicator />
      <RecordImageWrapper
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        <RecordImageBox>
          <RecordImage></RecordImage>
        </RecordImageBox>
        <RecordImageBox>
          <RecordImage></RecordImage>
        </RecordImageBox>
        <RecordImageBox>
          <RecordImage></RecordImage>
        </RecordImageBox>
        <RecordImageBox>
          <RecordImage></RecordImage>
        </RecordImageBox>
        <RecordImageBox>
          <RecordImage></RecordImage>
        </RecordImageBox>
      </RecordImageWrapper>
      <RecordWrapper>
        <Typography text="어떤 굳이데이를 보내셨나요?" type="h3" />
        <RecordInputBox>
          <Input
            status={titleStatus}
            placeholder="제목을 입력해주세요."
            handleChange={(event) => handleTitleChange(event)}
            theme="dark"
            value={title}
            messageBoxShow={false}
          />
        </RecordInputBox>
        <RecordDescription>
          <TextArea
            status={descriptStatus}
            placeholder="굳이데이 활동과 계기에 대해 작성해주세요."
            handleChange={(event) => handleDescriptChange(event)}
            theme="dark"
            value={descript}
            messageBoxShow={false}
          />
        </RecordDescription>
        <Typography text="활동 날짜" type="h3" />
        <RecordInputBox>
          <Input
            status="default"
            placeholder="YY / MM / DD"
            handleChange={(event) => handleDayChange(event)}
            theme="dark"
            value={recordDay}
            messageBoxShow={false}
            icon="rightArrow"
            icondirection="right"
            minX="-15"
            minY="-8"
            width="30"
            height="35"
            handleClick={handleDayClick}
          />
        </RecordInputBox>
        <Typography text="활동 장소" type="h3" />
        <RecordInputBox>
          <Input
            status="default"
            placeholder="장소를 설정해주세요.(선택)"
            handleChange={(event) => handlePlaceChange(event)}
            theme="dark"
            value={recordPlace}
            messageBoxShow={false}
            icon="rightArrow"
            icondirection="right"
            minX="-15"
            minY="-8"
            width="30"
            height="35"
            handleClick={() => routeTo("/place")}
          />
        </RecordInputBox>
        <Typography text="활동 카테고리" type="h3" />
        <RecordInputBox>
          <Input
            status="default"
            placeholder="카테고리를 설정해주세요.(선택)"
            handleChange={handleCategoryChange}
            theme="dark"
            value={recordPlace}
            messageBoxShow={false}
            icon="rightArrow"
            icondirection="right"
            minX="-15"
            minY="-8"
            width="30"
            height="35"
            handleClick={handleCategoryClick}
          />
        </RecordInputBox>
        <RecordStateBox>
          <Typography text="공개 여부 설정" type="h3" />
          <Switch
            handleHeight="25px"
            handleWidth="25px"
            height="25px"
            width="50px"
            padding="0px"
          />
        </RecordStateBox>
        <RecordStateMessageBox>
          <Typography
            text="기록을 공개하면, 다른 사람들도 나의 기록을 볼 수 있습니다."
            type="body3"
          />
        </RecordStateMessageBox>
        <RecordButtonBox>
          <Button
            text="다음"
            width="100%"
            color={colors.white}
            bordercolor={colors.inputTextClor}
            backgroundcolor={colors.gray850}
          />
        </RecordButtonBox>
      </RecordWrapper>
    </RecrodContainer>
  );
};

export default Record;
