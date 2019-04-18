import React, { Component } from "react";
import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar";
import MainPage from "./components/MainPage";

class App extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <MainPage />
      </div>
    );
  }
}

export default App;
