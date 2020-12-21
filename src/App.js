import './App.css';
import Home from "./components/index"
import CssBaseline from '@material-ui/core/CssBaseline';
import About from "./components/About"
import Contacts from "./components/Contacts"


import {Route} from "react-router-dom"

function App() {
  return (
    <>
    <CssBaseline/>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact-me" component={Contacts}/>



    </>
    
    
  );
}

export default App;
// http://findmatthew.com/
// https://jonny.me/