interface IBasicProps {
  [key: string]: JSX.Element;
}

const basic: IBasicProps = {
  email: (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_17_17385)">
          <path
            d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19 18H5C4.45 18 4 17.55 4 17V8L10.94 12.34C11.59 12.75 12.41 12.75 13.06 12.34L20 8V17C20 17.55 19.55 18 19 18ZM12 11L4 6H20L12 11Z"
            fill="#323232"
          />
        </g>
        <defs>
          <clipPath id="clip0_17_17385">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  ),
  phone: (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_17_17403)">
          <path
            d="M4.51004 15.48L6.51004 13.89C6.99004 13.51 7.27003 12.93 7.27003 12.32V9.71999C10.29 8.73999 13.56 8.72999 16.59 9.71999V12.33C16.59 12.94 16.87 13.52 17.35 13.9L19.34 15.48C20.14 16.11 21.28 16.05 22 15.33L23.22 14.11C24.02 13.31 24.02 11.98 23.17 11.23C16.76 5.56999 7.10003 5.56999 0.690035 11.23C-0.159965 11.98 -0.159965 13.31 0.640035 14.11L1.86003 15.33C2.57003 16.05 3.71004 16.11 4.51004 15.48Z"
            fill="#323232"
          />
        </g>
        <defs>
          <clipPath id="clip0_17_17403">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  ),
  locationOn: (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_17_17399)">
          <path
            d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
            fill="#323232"
          />
        </g>
        <defs>
          <clipPath id="clip0_17_17399">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  ),
  keyboardOn: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 3H4C2.9 3 2.01 3.9 2.01 5L2 15C2 16.1 2.9 17 4 17H20C21.1 17 22 16.1 22 15V5C22 3.9 21.1 3 20 3ZM11 6H13V8H11V6ZM11 9H13V11H11V9ZM8 6H10V8H8V6ZM8 9H10V11H8V9ZM7 11H5V9H7V11ZM7 8H5V6H7V8ZM15 15H9C8.45 15 8 14.55 8 14C8 13.45 8.45 13 9 13H15C15.55 13 16 13.45 16 14C16 14.55 15.55 15 15 15ZM16 11H14V9H16V11ZM16 8H14V6H16V8ZM19 11H17V9H19V11ZM19 8H17V6H19V8ZM12.35 22.65L15.14 19.86C15.45 19.55 15.23 19.01 14.79 19.01H9.21C8.76 19.01 8.54 19.55 8.86 19.86L11.65 22.65C11.84 22.84 12.16 22.84 12.35 22.65Z"
        fill="#323232"
      />
    </svg>
  ),
  haedset: (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.4 1.01999C6.62 1.32999 3 5.51999 3 10.31V17C3 18.66 4.34 20 6 20H7C8.1 20 9 19.1 9 18V14C9 12.9 8.1 12 7 12H5V10.29C5 6.44999 7.96 3.10999 11.79 2.99999C15.76 2.88999 19 6.05999 19 9.99999V12H17C15.9 12 15 12.9 15 14V18C15 19.1 15.9 20 17 20H18C19.66 20 21 18.66 21 17V9.99999C21 4.82999 16.64 0.67999 11.4 1.01999Z"
          fill="#323232"
        />
      </svg>
    </>
  ),
};

export default basic;
