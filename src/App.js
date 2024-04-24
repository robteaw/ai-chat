import "./App.css";
import chatgptLogo from "./assets/chatgpt.svg";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSideTop">
          <img src={chatgptLogo} alt="" className="logo" />
          <span className="brand">AiChat</span>
          <button className="midBtn">
            <img src="" alt="" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src="" alt="" />
              What is programming?
            </button>
          </div>
        </div>
        <div className="lowerSide"></div>
      </div>
      <div className="main"></div>
    </div>
  );
}

export default App;
