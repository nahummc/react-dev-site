// import logo from './logo.svg';
import './App.css';
import BasicNav from './components/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home.js';
import Weather from './components/Weather.js';
import ContactForm from './components/ContactForm.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer.js'



function App() {

  
  return (
    <div className="App">
      <BasicNav />
      <Router>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/weather' element={<Weather />}></Route>
        <Route path='/contact' element={<ContactForm />}></Route>
      </Routes>
      </Router>
      <br/><br/>
      <Footer />

      {/* <Home /> */}


    </div>
  );
}

export default App;
