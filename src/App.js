// 경로 : src/App.js

import React from "react";
import InputBox from "./components/InputBox/InputBox.js";
import PhoneList from "./components/PhoneList/PhoneList.js";
import "./App.css";

function App() {
  return (
    <div className="container">
      <InputBox/>
      <PhoneList/>
    </div>
  );
}

export default App;