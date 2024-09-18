import { useEffect, useState } from "react";
import Logo from "./logo.png";
import {
  StyledAppHeader,
  StyledAppHeaderNavigationBar,
  StyledSignInButton,
  StyledAppHeaderContent,
  StyledExploerButton,
} from "./App.styled";
import About from "../About/About";
import Cooking from "../Cooking/Cooking";
import Recipes from "../Recipes/Recipes";
import Dinner from "../Dinner/Dinner";

function App() {
  const [searchStart, setSearchStart] = useState(false);
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    const pn = window.location.pathname;
    setPathname(pn);
  }, []);

  return (
    <div>
      <StyledAppHeader>
        <StyledAppHeaderNavigationBar>
          <div>
            <a href="/">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="navigation-list">
            <div className="search">
              <i
                className="fa-solid fa-magnifying-glass"
                onClick={() => setSearchStart(!searchStart)}
              ></i>
              <input
                type="text"
                className={searchStart ? "open" : ""}
                placeholder="搜尋網站目標"
              />
            </div>
            <div className="navigation">
              <ul>
                <li>
                  <a href="/recipes">Recipes</a>
                </li>
                <li>
                  <a href="/dinner">Dinner TV</a>
                </li>
                <li>
                  <a href="/cooking">Cooking School</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
              </ul>
            </div>
            <div>
              <StyledSignInButton>Sign In</StyledSignInButton>
            </div>
          </div>
        </StyledAppHeaderNavigationBar>
        <StyledAppHeaderContent>
          {pathname === "/" && (
            <>
              <div className="content-title">Let's Get Cooking!</div>
              <div className="content-text">
                <div>Explore the best recipes from around thr world.</div>
                <div>Make cooking enjoyable again.</div>
              </div>
              <StyledExploerButton>Explore Recipes</StyledExploerButton>
            </>
          )}
          {pathname === "/about" && <About />}
          {pathname === "/cooking" && <Cooking />}
          {pathname === "/recipes" && <Recipes />}
          {pathname === "/dinner" && <Dinner />}
        </StyledAppHeaderContent>
      </StyledAppHeader>
    </div>
  );
}

export default App;
