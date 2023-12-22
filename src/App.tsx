import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routers } from "./router";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms/theme";
import { darkTheme, lightTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
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
