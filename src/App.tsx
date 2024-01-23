import { RouterProvider } from "react-router-dom";
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
    width: 60%;
    padding: 150px 20px;
  }
  .general-layout {
    height: 100vh;
    display: flex;
  }

  .general-layout__body {
    margin: 0 auto;
    width: 800px;
    padding: 20px 20px 0px 20px;
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
