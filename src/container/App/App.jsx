import { useState } from "react";
import Logo from "./logo.png";
import {
  StyledAppHeader,
  StyledAppHeaderNavigationBar,
  StyledSignInButton,
  StyledAppHeaderContent,
  StyledExploerButton
 } from "./App.styled";

function App() {
  const [searchStart, setSearchStart] = useState(false);

  return (
    <div>
      <StyledAppHeader>
        <StyledAppHeaderNavigationBar>
          <div>
            <img src={Logo} alt="Logo" />
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
                <li>Recipes</li>
                <li>Dinner TV</li>
                <li>Cooking School</li>
                <li>About</li>
              </ul>
            </div>
            <div>
              <StyledSignInButton>Sign In</StyledSignInButton>
            </div>
          </div>
        </StyledAppHeaderNavigationBar>
        <StyledAppHeaderContent>
          <div className="content-title">Let's Get Cooking!</div>
          <div className="content-text">
            <div>Explore the best recipes from around thr world.</div>
            <div>Make cooking enjoyable again.</div>
          </div>
          <StyledExploerButton>Explore Recipes</StyledExploerButton>
        </StyledAppHeaderContent>
      </StyledAppHeader>
    </div>
  );
}

export default App;


