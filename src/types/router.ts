interface RouterElement {
  id: number; // 페이지 아이디 (반복문용 고유값)
  path: string; // 페이지 경로
  label: string; // 사이드바에 표시할 페이지 이름
  image?: JSX.Element; // 사이드바에 표시할 이미지
  element: React.ReactNode; // 페이지 엘리먼트
  withAuth?: boolean; // 인증이 필요한 페이지 여부
  withSidebar?: boolean; // 사이드바 필요한 페이지 여부
}
