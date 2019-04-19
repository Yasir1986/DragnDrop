import React, { Component } from "react";
import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <MainPage />
        <Footer />
      </div>
    );
  }
}

export default App;
