import React from "react";
import Navbar from "./navbar/Navbar";
import Homepage from "./home/Homepage";
import About from "./home/components/About/About";
import Content from "./home/Content";
import Footer from "./home/components/Footer/Footer";

const backsetter = {
  backgroundImage: 'linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)',
 
}

const mainstyle = {
  // overflowY: 'hidden',
  // height : '100vh',
  // width : '100vw',
}
function App() {
  return (
    <div style={mainstyle}>
      <Navbar/>
        <div style={backsetter} >
          <Homepage/>
        </div>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
