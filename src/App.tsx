import React from "react";
import Header from "./components/header";
import SignInPage from "./components/signin";
import backgroundImage from "./assets/dnd_creator.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{ 
      backgroundImage: `url("https://via.placeholder.com/500")` 
    }}>
        <Header />
        <SignInPage />
      </div>
    </div>
  );
}

export default App;
