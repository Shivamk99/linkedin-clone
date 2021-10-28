import React from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import "./App.css";
import LeftSideBar from "./components/leftSideBar/leftSideBar";
import RightSideBar from "./components/rightSideBar/rightSideBar";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <LeftSideBar />
        <Main />
        <RightSideBar />
      </div>
    </>
  );
};

export default App;
