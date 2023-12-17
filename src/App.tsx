import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routers } from "./router";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms/theme";
import { colors } from "@/_shared/colors";
import { darkTheme, lightTheme } from "./theme";
import { fontSize, fontWeight } from "./_shared/typography";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    height: 100vh;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
  input {
    font-size: 1.5em;
    padding: 0.25em;
    border: 1px solid #ccc;
    border-radius: 6px;
    width: 100%;
    margin-bottom: 24px;
  }
  button {
    color: ${(props) => props.theme.bgColor};
    font-size: ${fontSize.h0};
    font-weight: ${fontWeight.semiBold};
    padding: 0.5em;
    background-color: ${colors.secondaryGreen50};
    border-radius: 8px;
    border: none;
    width: 100%;
    cursor: pointer;
    &:hover {
      border-radius: 8px;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), #3CEFA3;
    }
  }
  ul {
    margin: 0;
    padding: 0;
  }
  .label {
    font-size: 1.5em;
    padding: 0.5em;
    width: 100%;
  }
  .non-logged-in-body {
    margin: 0 auto;
    width: 480px;
    padding: 150px 20px;
  }
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <RouterProvider router={routers} />
      </ThemeProvider>
    </>
  );
}

export default App;
