export interface User {
  id?: string;
  name: string;
  password?: string;
  emailSet?: string[];
  interestSet?: InterestElement[];
}

export interface InterestElement {
  interestCode: string;
  interestName: string;
}
