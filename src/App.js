import React from "react";
import './App.css'

import { Footer, Blog, Possibility, Features, WhatOKOK, Header } from "./containers";
import { CTA, Brand, Navbar} from "./components";

const App = () => {
    return (

        <div className = "App" >

          <div className="gradient_bg">
            <Navbar/>
            <Header/>
          </div>
          <Brand/>
          <WhatOKOK/>
          <Features/>
          <Possibility/>
          <CTA/>
          <Blog/>
          <Footer/>

        </div>
    );
}

export default App;