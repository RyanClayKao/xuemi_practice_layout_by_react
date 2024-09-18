import { useState } from "react";
import Logo from "./logo.png";
import "./App.css";

function App() {
  const [searchStart, setSearchStart] = useState(false);


  return (
    <div>
      <header
        style={{
          padding: 60,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="search">
              <i className="fa-solid fa-magnifying-glass" onClick={() => setSearchStart(!searchStart)}></i>
              <input type="text" className={searchStart ? 'open' : ''} placeholder="搜尋網站目標" />
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
              <button className="sign-in-btn">Sign In</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
