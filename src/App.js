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
// import Chat from './components/Chat.js';



function App() {

  
  return (
    <div className="App">
      <BasicNav />
      <Router>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/weather' element={<Weather />}></Route>
        {/* <Route path='/contact' element={<ContactForm />}></Route> */}
        <Route path='/contact' element={<NewContact />}></Route>
        <Route path='/todo' element={<Todo />}></Route>
        {/* <Route path='/chat' element={<Chat />}></Route> */}
        {/*  */}
      </Routes>
      </Router>
      {/* <br/><br/> */}
      <Footer />
    </div>
  );
}

export default App;
