import logo from './logo.svg';
import './App.css';
import CarCard from './carCard';
import Penghitung from './penghitung';
import { Button, Container, Alert } from 'reactstrap';
import { Component } from 'react';
// import {  } from "react-router";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './about';
import NavBar from './navbar';
import Home from './home';
import FileHandler from './fileHandler';
import HooksDemo from './demoHooks';
import HomeHooks from './homeHooks';

// function App() {
//   function showAlert() {
//     alert('hello')
//   }

//   return (
//     <div>

//       <h1>Hello World</h1>
//       <CarCard
//         imageURL="https://picsum.photos/300"
//         carName="Avanza"
//         carPrice="400000"
//       />
//       <Penghitung />
//       <button onClick={showAlert} >CLICK ME </button>
//       <Button color='danger'>HELLO</Button>
//     </div>
//   );
// }


class App extends Component {
  state = {
    danger: false
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomeHooks />} />
            <Route exact path="/about/:id" element={<About />} />
            <Route exact path="/about" element={<FileHandler />} />
            <Route exact path="/demo-hooks" element={<HooksDemo />} />
            <Route exact path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Router>
      </>
    )
  }
}

export default App;
