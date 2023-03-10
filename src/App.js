// import logo from './logo.svg';
import './App.css';
import BasicNav from './components/navbar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home.js';
import Weather from './components/weather/Weather.js';
// old version of contact form
// import ContactForm from './components/contact/ContactForm.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer.js'
import Todo from './components/todo/Todo.js';
import NewContact from './components/contact/NewContact.js';
import Calculator from './components/calculator/Calculator.js';
import NotFound from './components/404/NotFound.js';
import Login from './components/auth/Login.js'
import Signup from './components/auth/Signup.js'
import Calendar from './components/todo/Calendar/Calendar';
// import Chat from './components/Chat.js';
// import { useState } from 'react';



function App() {

  // const [token, setToken] = useState();

  
  return (
    <div className="App">
      <BasicNav />
      <Router>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/weather' element={<Weather />}></Route>
        {/* <Route path='/contact' element={<ContactForm />}></Route> */}
        <Route path='/contact' element={<NewContact />}></Route>
        <Route path='/todo' element={<Todo />}></Route>
        <Route path='/calc' element={<Calculator />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/calendar' element={<Calendar />}></Route>
        {/* <Route path='/chat' element={<Chat />}></Route> */}
        {/*  */}
      </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
