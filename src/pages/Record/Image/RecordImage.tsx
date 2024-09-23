import Icon from "@/foundations/Icon";
import Typography from "@/foundations/Typography";
import { Box, FileImage, FileInput, Preview } from "./RecordImage.styled";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { recordImageAtom } from "@/atoms/record";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

export interface RecordImageProps {
  id: number;
  fileId: number;
  file: File | null;
}

const RecordImage = React.memo(({ id, fileId, file }: RecordImageProps) => {
  const previewRef = useRef<HTMLImageElement | null>(null);
  const [isActive, setActive] = useState(false);
  const [uploadFile, setUploadFile] = useRecoilState(recordImageAtom);
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
            setUploadFile((oldFiles) => {
              const newFiles = [...oldFiles];
              const targetIndex = oldFiles.findIndex((file) => file.id === id);
              if (targetIndex !== -1) {
                newFiles[targetIndex] = {
                  ...newFiles[targetIndex],
                  file: files[0],
                };
              }
              return newFiles;
            });
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
            setUploadFile((oldFiles) => {
              const newFiles = [...oldFiles];
              const targetIndex = oldFiles.findIndex((file) => file.id === id);
              if (targetIndex !== -1) {
                newFiles[targetIndex] = {
                  ...newFiles[targetIndex],
                  file: files[0],
                };
              }
              return newFiles;
            });
            previewRef.current.src = target?.result as string;
          }
        };
        reader.readAsDataURL(files[0]);
      }
    }
  };
  return (
    <Box>
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
          accept=".svg, .jpg, .jpeg, .mp4"
        />

        {uploadFile[id].file ? (
          <></>
        ) : (
          <>
            <Icon icon="plusCircle" />
            <Typography text="사진 추가" type="h3" color="#575860" />
          </>
        )}
        <FileImage
          ref={previewRef}
          src={file ? URL.createObjectURL(file) : ""}
          className={`${uploadFile[id].file ? "" : "hide"}`}
        />
      </Preview>
    </Box>
  );
});

export default RecordImage;
