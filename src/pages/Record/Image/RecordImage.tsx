import Icon from "@/foundations/Icon";
import Typography from "@/foundations/Typography";
import { FileImage, FileInput, Preview } from "./RecordImage.styled";
import { useRef, useState } from "react";

const RecordImage = () => {
  const previewRef = useRef<HTMLImageElement | null>(null);
  const [isActive, setActive] = useState(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const handleDragStart = () => setActive(true);
  const handleDragEnd = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setActive(false);
  };
  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      const reader = new FileReader();
      if (previewRef.current) {
        reader.onload = ({ target }) => {
          if (previewRef.current) {
            setUploadFile(files[0]);
            previewRef.current.src = target?.result as string;
          }
        };
        reader.readAsDataURL(files[0]);
      }
    }
    setActive(false);
  };
  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setActive(true);
  };
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      const reader = new FileReader();
      if (previewRef.current) {
        reader.onload = ({ target }) => {
          if (previewRef.current) {
            setUploadFile(files[0]);
            previewRef.current.src = target?.result as string;
          }
        };
        reader.readAsDataURL(files[0]);
      }
    }
  };

  return (
    <>
      <Preview
        className={`${isActive ? " active" : ""}`}
        onDragEnter={handleDragStart}
        onDragLeave={handleDragEnd}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <FileInput
          type="file"
          onChange={handleUpload}
          accept=".svg, .jpg .jpeg .mp4"
        />

        {uploadFile ? (
          <></>
        ) : (
          <>
            <Icon icon="plusCircle" />
            <Typography text="사진 추가" type="h3" color="#575860" />
          </>
        )}
        <FileImage
          ref={previewRef}
          src=""
          className={`${uploadFile ? "" : "hide"}`}
        />
      </Preview>
    </>
  );
};

export default RecordImage;
