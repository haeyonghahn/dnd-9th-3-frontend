export interface User {
  id?: string;
  name: string;
  password?: string;
  emails?: string[];
  interests?: InterestElement[];
}

export interface InterestElement {
  interestCode: string;
  interestName: string;
}
