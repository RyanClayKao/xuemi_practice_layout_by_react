import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  StyledAppHeader,
  StyledAppHeaderNavigationBar,
  StyledSignInButton,
  StyledAppHeaderContent,
} from "./App.styled";

import Logo from "./logo.png";



export default function RootLayout() {
  const [searchStart, setSearchStart] = useState(false);


  return (
    <div>
      <StyledAppHeader>
        <StyledAppHeaderNavigationBar>
          <div>
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
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
                  <Link to="/recipes">Recipes</Link>
                </li>
                <li>
                  <Link to="/dinner">Dinner TV</Link>
                </li>
                <li>
                  <Link to="/cooking">Cooking School</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
            <div>
              <StyledSignInButton>Sign In</StyledSignInButton>
            </div>
          </div>
        </StyledAppHeaderNavigationBar>
        <StyledAppHeaderContent>
          <Outlet />
        </StyledAppHeaderContent>
      </StyledAppHeader>
    </div>
  )
}
