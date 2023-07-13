import React from 'react';
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="App bg-black">
        <div className={"container mx-auto px-5"}>
            <Header/>
            <Hero/>
            <Skills/>
            <Contacts/>
        </div>
    </div>
  )
}

export default App;
