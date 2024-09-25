import Icon from "@/foundations/Icon";
import Typography from "@/foundations/Typography";
import { Box, Image, Input, Preview, Vide } from "./File.styled";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { recordImageAtom } from "@/atoms/record";
import React from "react";
import { IFile } from "@/types/record";

const File = React.memo(({ id, file }: IFile) => {
  const [uploadFile, setUploadFile] = useRecoilState(recordImageAtom);
  const [fileUrl, setFileUrl] = useState<string | null>(
    file ? URL.createObjectURL(file) : null
  );

  const [isActive, setActive] = useState(false);
  const handleDragStart = () => setActive(true);
  const handleDragEnd = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setActive(false);
  };
  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const selectedFile = event.dataTransfer.files?.[0];
    if (selectedFile) {
      setUploadFile((oldFiles) => {
        const newFiles = [...oldFiles];
        const targetIndex = oldFiles.findIndex((file) => file.id === id);
        if (targetIndex !== -1) {
          newFiles[targetIndex] = {
            ...newFiles[targetIndex],
            file: selectedFile,
          };
        }
        return newFiles;
      });
      setFileUrl(URL.createObjectURL(selectedFile));
    }
    setActive(false);
  };
  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setActive(true);
  };
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setUploadFile((oldFiles) => {
        const newFiles = [...oldFiles];
        const targetIndex = oldFiles.findIndex((file) => file.id === id);
        if (targetIndex !== -1) {
          newFiles[targetIndex] = {
            ...newFiles[targetIndex],
            file: selectedFile,
          };
        }
        return newFiles;
      });
      setFileUrl(URL.createObjectURL(selectedFile));
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
        <Input
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
        {file?.type.startsWith("video") ? (
          <Vide
            autoPlay
            src={fileUrl ? fileUrl : ""}
            className={`${uploadFile[id].file ? "" : "hide"}`}
          />
        ) : (
          <Image
            src={fileUrl ? fileUrl : ""}
            className={`${uploadFile[id].file ? "" : "hide"}`}
          />
        )}
      </Preview>
    </Box>
  );
});

export default File;
