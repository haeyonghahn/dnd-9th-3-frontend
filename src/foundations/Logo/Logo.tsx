import { Svg } from "./Logo.styled";

const logoVariants = {
  normal: {
    opacity: 1,
  },
  active: {
    opacity: [1, 0, 1],
    transition: {
      repeat: Infinity,
    },
  },
};

const Logo = () => {
  return (
    <Svg
      variants={logoVariants}
      whileHover="active"
      width="159"
      height="178"
      viewBox="0 0 159 178"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M127.897 124.528C126.151 124.528 124.735 127.764 124.735 131.757C124.735 135.749 126.151 138.986 127.897 138.986C129.644 138.986 131.06 135.749 131.06 131.757C131.06 127.764 129.644 124.528 127.897 124.528ZM111.632 108.262C111.632 106.515 108.395 105.099 104.402 105.099C100.41 105.099 97.1733 106.515 97.1733 108.262C97.1733 110.009 100.41 111.425 104.402 111.425C108.395 111.425 111.632 110.009 111.632 108.262ZM124.735 84.7675C124.735 80.7749 126.151 77.5384 127.897 77.5384C129.644 77.5384 131.06 80.7749 131.06 84.7675C131.06 88.76 129.644 91.9966 127.897 91.9966C126.151 91.9966 124.735 88.76 124.735 84.7675ZM158.621 108.262C158.621 106.515 155.385 105.099 151.392 105.099C147.399 105.099 144.163 106.515 144.163 108.262C144.163 110.009 147.399 111.425 151.392 111.425C155.385 111.425 158.621 110.009 158.621 108.262Z"
        fill="url(#paint0_linear_1937_50405)"
      />
      <path
        d="M129.469 97.8863C128.86 96.5153 126.917 96.5075 126.296 97.8736L123.808 103.352C123.634 103.737 123.325 104.045 122.941 104.218L117.495 106.677C116.131 107.293 116.131 109.231 117.495 109.847L122.941 112.305C123.325 112.479 123.634 112.787 123.808 113.171L126.296 118.65C126.917 120.016 128.86 120.008 129.469 118.637L131.893 113.184C132.067 112.792 132.38 112.478 132.772 112.302L138.259 109.849C139.631 109.236 139.631 107.288 138.259 106.674L132.772 104.221C132.38 104.046 132.067 103.732 131.893 103.34L129.469 97.8863Z"
        fill="url(#paint1_angular_1937_50405)"
      />
      <path
        d="M80.7431 173.552C81.4693 175.186 83.7848 175.195 84.5241 173.567L87.922 166.085C88.13 165.626 88.4976 165.26 88.9563 165.053L96.3945 161.695C98.0208 160.96 98.0208 158.651 96.3945 157.917L88.9563 154.559C88.4976 154.352 88.13 153.985 87.922 153.527L84.5241 146.044C83.7848 144.416 81.4693 144.425 80.7431 146.059L77.431 153.511C77.2233 153.979 76.85 154.353 76.3831 154.562L68.8864 157.914C67.251 158.645 67.251 160.966 68.8864 161.698L76.3831 165.05C76.85 165.258 77.2233 165.632 77.431 166.1L80.7431 173.552Z"
        fill="url(#paint2_angular_1937_50405)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M74.3095 60.3902C74.3095 63.1525 79.4278 65.3918 85.7417 65.3918C92.0555 65.3918 97.1738 63.1525 97.1738 60.3902C97.1738 57.6279 92.0555 55.3886 85.7417 55.3886C79.4278 55.3886 74.3095 57.6279 74.3095 60.3902ZM66.7758 78.5786C64.8226 80.5319 66.8584 85.7345 71.3229 90.199C75.7875 94.6636 80.9901 96.6994 82.9433 94.7462C84.8966 92.7929 82.8608 87.5903 78.3962 83.1257C73.9317 78.6612 68.729 76.6254 66.7758 78.5786ZM43.5853 97.5449C43.5853 91.231 45.8246 86.1127 48.5869 86.1127C51.3492 86.1127 53.5885 91.231 53.5885 97.5449C53.5885 103.859 51.3492 108.977 48.5869 108.977C45.8246 108.977 43.5853 103.859 43.5853 97.5449ZM30.3991 78.5784C28.4458 76.6252 23.2432 78.661 18.7786 83.1256C14.3141 87.5901 12.2783 92.7927 14.2315 94.746C16.1848 96.6992 21.3874 94.6634 25.8519 90.1989C30.3165 85.7343 32.3523 80.5317 30.3991 78.5784ZM11.4327 65.3918C5.11887 65.3918 0.000508925 63.1525 0.000509046 60.3902C0.000509166 57.6279 5.11887 55.3886 11.4327 55.3886C17.7465 55.3886 22.8649 57.6279 22.8649 60.3902C22.8649 63.1525 17.7465 65.3918 11.4327 65.3918ZM14.2313 26.0335C12.278 27.9868 14.3139 33.1894 18.7784 37.6539C23.2429 42.1185 28.4456 44.1543 30.3988 42.2011C32.352 40.2478 30.3162 35.0452 25.8517 30.5806C21.3872 26.1161 16.1845 24.0803 14.2313 26.0335ZM43.5853 23.2359C43.5853 16.9221 45.8246 11.8037 48.5869 11.8037C51.3492 11.8037 53.5885 16.9221 53.5885 23.2359C53.5885 29.5497 51.3492 34.6681 48.5869 34.6681C45.8246 34.6681 43.5853 29.5497 43.5853 23.2359ZM82.9436 26.0345C80.9904 24.0812 75.7877 26.1171 71.3232 30.5816C66.8586 35.0461 64.8228 40.2488 66.7761 42.202C68.7293 44.1552 73.9319 42.1194 78.3965 37.6549C82.861 33.1903 84.8968 27.9877 82.9436 26.0345Z"
        fill="url(#paint3_linear_1937_50405)"
      />
      <path
        d="M46.1008 76.7974C47.0644 78.9654 50.1371 78.9778 51.1181 76.8175L55.0525 68.1534C55.3286 67.5455 55.8164 67.0587 56.425 66.7839L65.0363 62.8963C67.1944 61.922 67.1944 58.8574 65.0363 57.8831L56.425 53.9955C55.8164 53.7207 55.3286 53.234 55.0525 52.626L51.1181 43.9619C50.1371 41.8017 47.0644 41.814 46.1008 43.9821L42.268 52.6059C41.9924 53.2261 41.4971 53.7225 40.8774 53.9996L32.2007 57.8791C30.0305 58.8494 30.0305 61.9301 32.2007 62.9004L40.8774 66.7799C41.4971 67.0569 41.9924 67.5533 42.268 68.1736L46.1008 76.7974Z"
        fill="url(#paint4_angular_1937_50405)"
      />
      <circle
        cx="150.047"
        cy="68.964"
        r="2.85803"
        fill="url(#paint5_radial_1937_50405)"
      />
      <circle
        cx="54.3027"
        cy="140.414"
        r="4.28704"
        fill="url(#paint6_radial_1937_50405)"
      />
      <circle
        cx="8.57434"
        cy="3.22961"
        r="2.85803"
        fill="url(#paint7_radial_1937_50405)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1937_50405"
          x1="97.1733"
          y1="138.986"
          x2="148.229"
          y2="87.9299"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.368658" stopColor="#FF91DD" />
          <stop offset="0.780533" stopColor="#3CEFA3" />
        </linearGradient>
        <radialGradient
          id="paint1_angular_1937_50405"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(127.897 108.262) rotate(90) scale(13.9127)"
        >
          <stop stopColor="#FF59D0" />
          <stop offset="0.510417" stopColor="white" />
          <stop offset="1" stopColor="#3CEFA3" />
        </radialGradient>
        <radialGradient
          id="paint2_angular_1937_50405"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(82.6167 159.806) rotate(90) scale(17.9619 17.9619)"
        >
          <stop stopColor="#FF59D0" />
          <stop offset="0.510417" stopColor="white" />
          <stop offset="1" stopColor="#3CEFA3" />
        </radialGradient>
        <linearGradient
          id="paint3_linear_1937_50405"
          x1="48.5872"
          y1="117.228"
          x2="48.5872"
          y2="1.71968"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.21875" stopColor="#FF91DD" />
          <stop offset="0.817708" stopColor="#3DEFA3" />
        </linearGradient>
        <radialGradient
          id="paint4_angular_1937_50405"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(48.587 60.3897) rotate(90) scale(22.0015)"
        >
          <stop stopColor="#FF59D0" />
          <stop offset="0.510417" stopColor="white" />
          <stop offset="1" stopColor="#3CEFA3" />
        </radialGradient>
        <radialGradient
          id="paint5_radial_1937_50405"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(150.047 68.964) rotate(90) scale(2.85803)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#F0F0F0" />
        </radialGradient>
        <radialGradient
          id="paint6_radial_1937_50405"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(54.3027 140.414) rotate(90) scale(4.28704)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#F0F0F0" />
        </radialGradient>
        <radialGradient
          id="paint7_radial_1937_50405"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8.57434 3.22961) rotate(90) scale(2.85803)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#F0F0F0" />
        </radialGradient>
      </defs>
    </Svg>
  );
};

export default Logo;
