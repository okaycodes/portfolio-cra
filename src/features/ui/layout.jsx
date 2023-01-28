import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../header/header.component";

export default function PageLayout({ switchTheme, themeMode }) {
  const { pathname, hash, key, state } = useLocation();

  //manage hash link scroll effect
  useEffect(() => {
    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          // Set smooth behavior if on home page
          const scrollOptions = {
            block: "end",
            ...(state?.from === "/" && { behavior: "smooth" }),
          };

          element.scrollIntoView(scrollOptions);
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  //
  return (
    <Main>
      <Header switchTheme={switchTheme} themeMode={themeMode} />
      <Outlet />
    </Main>
  );
}

const Main = styled.main`
  //   &:before {
  //     content: "";
  //     position: fixed;
  //     width: 500px;
  //     height: 500px;
  //     bottom: 0;
  //     left: 0;
  //     z-index: -1;
  //     background: url("/images/backgrounds/Polygon Luminary (1).svg") 0 0
  //       no-repeat;
  //     transform: rotate(0deg);
  //   }
`;
