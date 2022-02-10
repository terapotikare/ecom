import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Ag from "./components/pages/Ag";
import Sezon from "./components/pages/Sezon";
import Sezson from "./components/pages/Sezson";
import Ug from "./components/pages/Ug";
import Contact from "./components/pages/Contact";
import  Footer  from "./components/Footer";
import Hesap from "./components/pages/Hesap";
import Arama from "./components/pages/Arama";
import Sepet from "./components/pages/Sepet";
import H2 from "./components/pages/H2";
import Kvkk from "./components/pages/Kvkk";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import Cerez from "./components/pages/Cerez";
import Mesafe from "./components/pages/Mesafe";
import Sorular from "./components/pages/Sorular";
import Blog from "./components/pages/Blog";

function App() {
  
  return (
    <>
    
      <Router>
       
        <Navbar />
      
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Ag" component={Ag} />
          <Route path="/Sezon" component={Sezon} />
          <Route path="/Sezson" component={Sezson} />
          <Route path="/Ug" component={Ug} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Footer" component={Footer} />
          <Route path="/Sepet" component={Sepet} />
          <Route path="/Arama" component={Arama} />
          <Route path="/Hesap" component={Hesap} />
          <Route path="/Hesap" component={H2} />
          <Route path="/Kvkk"  component={Kvkk}/>
          <Route path="/Cerez"  component={Cerez}/>
          <Route path="/Mesafe"  component={Mesafe}/>
          <Route path="/Sorular"  component={Sorular}/>
          <Route path="/Blog"  component={Blog}/>
          

        </Switch>
      
      </Router>
    </>
  );
}

export default App;
