import { colors } from "@/_shared/colors";
import styled from "styled-components";

export const RecordCardWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 5%;
`;

export const RecordCardLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-left: 3%;
`;

export const RecordContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const RecordContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 3%;
`;

export const RecordPlace = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  color: ${colors.green50};
`;

export const RecordImageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  color: ${colors.gray500};
`;

export const RecordImageBox = styled.div`
  width: 300px;
  height: 400px;
  background-color: red;
`;

export const RecordDescription = styled.div`
  width: 268px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RecordDescriptionMore = styled.div`
  cursor: pointer;
  color: ${colors.gray500};
`;
