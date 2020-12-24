import './App.css';
import Home from "./components/index"
import CssBaseline from '@material-ui/core/CssBaseline';
import About from "./components/About"
import Contacts from "./components/Contacts"
import Portfolio from "./components/Portfolio"
import Landing from "./components/Home"





import {Route} from "react-router-dom"

function App() {
  return (
    <>
    <CssBaseline/>
    <Route exact path="/" component={Landing}/>
    <Route path="/about" component={About}/>
    <Route path="/contact-me" component={Contacts}/>
    <Route path="/projects" component={Portfolio}/>





    </>
    
    
  );
}

export default App;
// http://findmatthew.com/
// https://jonny.me/