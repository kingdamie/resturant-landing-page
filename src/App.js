import "./App.css";
import Home from "./component/home"
import About from "./component/about";
import Work from "./component/work";
import Testmonial from "./component/testimonial";
import Contact from "./component/contact";
import Footer from "./component/footer";


function App() {
  return <div className="App">
    <Home/>
    <About/>
    <Work/>
    <Testmonial/>
    <Contact/>
    <Footer/>
  </div>;
}

export default App;
