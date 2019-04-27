import React, { Component } from "react";
import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar";
import MainPage from "./components/MainPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <ButtonAppBar />
        <Route exact path="/" component={MainPage} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Contact} />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
