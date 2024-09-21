import { IImage } from "./image";

export interface IFeed {
  recordNumber: string;
  placeLatitude: number;
  placeLongitude: number;
  placeTitle: string;
  description: string;
  recordDate: string;
  recordScore: number;
  recorderId: string;
  recorderName: string;
  title: string;
  name: string;
  imageUrl: string;
  images: IImage[];
}
