import React from 'react';
import './App.css';
import {Header, Hero, Skills, Contacts, Faq, Footer} from "./components";


function App() {
  return (
    <div className="App bg-black">
        <div className={"container mx-auto px-5"}>
            <Header/>
            <Hero/>
            <Skills/>
            <Contacts/>
            <Faq/>
            <Footer/>
        </div>
    </div>
  )
}

export default App;
