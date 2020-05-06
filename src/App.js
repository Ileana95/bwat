import React, { Component } from 'react';
import Slider from "./components/Slider";
import Projects from "./components/Projects";
import Jobs from "./components/Jobs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/app.scss";

class App extends Component {

  render() {
    return (
        <div className="App">
          <Header/>
          <Slider/>
          <Projects/>
          <Jobs/>
          <Footer/>
        </div>
    );
  }
}

export default App;
