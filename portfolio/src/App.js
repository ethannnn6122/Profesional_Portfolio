import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// components
import NavBar from './components/Nav';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return(
      <>
        <NavBar/>
        <Footer/>
      </>
    )
  }
}

export default App;