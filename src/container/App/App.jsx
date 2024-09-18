import Logo from "./logo.png";


function App() {

  return (
    <div>
      <header style={{
        padding: 60,
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
        }}>
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <div>搜尋</div>
            <div>
              <ul style={{
                display: "flex",
                listStyle: "none",
              }}>
                <li>Recipes</li>
                <li>Dinner TV</li>
                <li>Cooking School</li>
                <li>About</li>
              </ul>
            </div>
            <div>
              <button style={{
                color: "white",
                border: "none",
                padding: "10px 25px",
                backgroundColor: "#3B7844",
                borderRadius: 3,
                outline: "none",
                cursor: "pointer",
              }}>Sign In</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
