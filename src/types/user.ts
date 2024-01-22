export interface User {
  id?: string;
  name: string;
  password?: string;
  emails?: string[];
  interests?: InterestElement[];
  oAuthId?: string;
  imageUrl?: string;
}

export interface InterestElement {
  interestCode: string;
  interestName: string;
}
