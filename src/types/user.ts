export interface OnboardResponse {
  id: number;
  interestCode: string;
  interestName: string;
}

export interface User {
  id: number;
  nickname: string;
  profileImgUrl: string;
  onboardYn: string;
  onboards: OnboardResponse[];
}
