import Icon from "@/foundations/Icon";
import Typography from "@/foundations/Typography";
import { FileInput, Preview } from "./RecordImage.styled";
import { useState } from "react";

const RecordImage = () => {
  const [isActive, setActive] = useState(false);
  const handleDragStart = () => setActive(true);
  const handleDragEnd = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setActive(false);
  };
  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setActive(false);
    const files = event.dataTransfer.files;
    console.log(files);
  };
  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setActive(true);
  };

  const [uploadFile, setUploadFile] = useState(null);
  return (
    <>
      <Preview
        className={`${isActive ? " active" : ""}`}
        onDragEnter={handleDragStart}
        onDragLeave={handleDragEnd}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <FileInput type="file" />

        {uploadFile ? (
          <></>
        ) : (
          <>
            <Icon icon="plusCircle" />
            <Typography text="사진 추가" type="h3" color="#575860" />
          </>
        )}
      </Preview>
    </>
  );
};

export default RecordImage;
