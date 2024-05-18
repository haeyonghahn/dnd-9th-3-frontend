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
    padding: 40px 20px;
  }
  .general-layout {
    height: 100vh;
    display: flex;
    align-items: center;
  }

  .general-layout__body {
    margin: 0 auto;
    width: 800px;
  }

  @media (min-width: 500px) {
    body {
      background-color: #f0f0f0;
    }

    .non-logged-in-body {
      margin: 0 auto;
      width: 60%;
      height: 100vh;
      padding: 150px 20px;
      background-color: ${(props) => props.theme.bgColor};
    }

    .general-layout {
      margin: 0 auto;
      width: 60%;
      height: 100vh;
      background-color: ${(props) => props.theme.bgColor};
    }

    .general-layout__body {
      background-color: ${(props) => props.theme.bgColor};
    }
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
