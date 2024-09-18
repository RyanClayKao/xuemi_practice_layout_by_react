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
              <button className="sign-in-btn">Sign In</button>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 110,
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 600,
            }}
          >
            Let's Get Cooking!
          </div>
          <div
            style={{
              marginTop: 55,
              fontSize: 16,
              lineHeight: 2,
            }}
          >
            <div>Explore the best recipes from around thr world.</div>
            <div>Make cooking enjoyable again.</div>
          </div>
          <button
            style={{
              marginTop: 65,
              padding: "10px 25px",
              backgroundColor: "#3B7844",
              border: "none",
              color: "white",
              borderRadius: 2,
              outline: "none",
              cursor: "pointer",
            }}
          >
            Explore Recipes
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
