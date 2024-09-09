export interface Record {
  recordNumber: string;
  placeTitle: string;
  placeLatitude: number;
  placeLongitude: number;
  recorderId: string;
  recorderName: string;
  title: string;
  description: string;
}

export interface RecordPlace {
  placeName: string;
  addressName: string;
  placeLatitude: number;
  placeLongitude: number;
}
