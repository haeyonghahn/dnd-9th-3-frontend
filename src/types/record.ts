import { IImage } from "./image";

export interface IRecord {
  recordNumber: string;
  recordDate: string;
  placeTitle: string;
  placeLatitude: number;
  placeLongitude: number;
  recorderId: string;
  recorderName: string;
  title: string;
  description: string;
  images: IImage[];
}

export interface IFile {
  id: number;
  file: File | null;
}

export interface IRecordPlace {
  placeName: string;
  addressName: string;
  placeLatitude: number;
  placeLongitude: number;
}

export interface PaginatedRecordPlace {
  data: IRecordPlace[]; // 실제 데이터 배열
  totalPages: number; // 전체 페이지 수
  currentPage: number; // 현재 페이지 번호
  end: boolean; // 마지막 페이지 여부
}
