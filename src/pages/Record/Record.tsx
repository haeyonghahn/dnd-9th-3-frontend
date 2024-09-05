import { useRef, useState } from "react";
import {
  RecordDescription,
  RecordImage,
  RecordImageWrapper,
  RecordIndicator,
  RecordInputBox,
  RecordWrapper,
} from "./Record.styled";
import Typography from "@/foundations/Typography";
import Input from "@/components/Input";
import { Status } from "@/types/status";

const Record = () => {
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
  const [titleErrorMessage, setErrorMessage] = useState("");
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    if (0 < value.length && value.length > 20) {
      setStatus("error");
      setErrorMessage("20자 이내로 입력해주세요.");
    } else {
      setStatus("default");
      setErrorMessage("");
    }
    setTitle(value);
  };

  const [descript, setDescript] = useState("");
  const [descriptStatus, setDescriptStatus] = useState<Status>("default");
  const [descriptErrorMessage, setDescriptErrorMessage] = useState("");
  const handleDescriptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    if (0 < value.length && value.length > 100) {
      setDescriptStatus("error");
      setDescriptErrorMessage("100자 이내로 입력해주세요.");
    } else {
      setDescriptStatus("default");
      setDescriptErrorMessage("");
    }
    setDescript(value);
  };
  return (
    <>
      <RecordIndicator />
      <RecordImageWrapper
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        <RecordImage></RecordImage>
        <RecordImage></RecordImage>
        <RecordImage></RecordImage>
        <RecordImage></RecordImage>
        <RecordImage></RecordImage>
      </RecordImageWrapper>
      <RecordWrapper>
        <Typography text="어떤 굳이데이를 보내셨나요?" type="h3" />
        <RecordInputBox>
          <Input
            status={titleStatus}
            message={titleErrorMessage}
            placeholder="제목을 입력해주세요."
            handleChange={(event) => handleTitleChange(event)}
            theme="dark"
            value={title}
          />
        </RecordInputBox>
        <RecordDescription>
          <Input
            status={descriptStatus}
            message={descriptErrorMessage}
            placeholder="굳이데이 활동과 계기에 대해 작성해주세요."
            handleChange={(event) => handleDescriptChange(event)}
            theme="dark"
            value={descript}
          />
        </RecordDescription>
      </RecordWrapper>
    </>
  );
};

export default Record;
