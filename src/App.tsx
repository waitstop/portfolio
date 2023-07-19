import React from 'react';
import './App.css';
import {Header, Hero, Skills, Contacts, Faq, Footer} from "./components";
import {Element} from "react-scroll"
function App() {
  return (
    <div className="App bg-black">
        <div className={"container mx-auto px-5 md:px-10 lg:max-w-[1200px]"}>
            <Header/>
            <Hero/>
            <Element name={"skills"}/>
            <Skills/>
            <Element name={"contacts"}/>
            <Contacts/>
            <Faq/>
            <Footer/>
        </div>
    </div>
  )
}

export default App;
