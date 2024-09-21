export interface IUser {
  id?: string;
  name: string;
  password?: string;
  emails?: string[];
  interests?: IInterest[];
  oAuthId?: string;
  imageUrl?: string;
}

export interface IInterest {
  interestCode: string;
  interestName: string;
}
