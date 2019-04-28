import React, { Component } from "react";
import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar";
import MainPage from "./components/MainPage";
import Upload from "./components/Upload";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <ButtonAppBar />
        <Route exact path="/" component={MainPage} />
        <Route path="/upload" component={Upload} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
