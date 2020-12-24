import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from "./components/Home"
import About from "./components/About"
import Contacts from "./components/Contacts"
import Portfolio from "./components/Portfolio"





import {Route} from "react-router-dom"

function App() {
  return (
    <>
    <CssBaseline/>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact-me" component={Contacts}/>
    <Route path="/projects" component={Portfolio}/>





    </>
    
    
  );
}

export default App;
