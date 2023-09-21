import {BrowserRouter as Router,Route,Routes }from "react-router-dom" 
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Faculty from "./components/Faculty";
// import StudentBody from "./components/StudentBody";
import Event from "./components/Event/Events.jsx";
import EventPage from "./components/Event/EventPage.jsx";
import Studentspage from "./components/Studentspage.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/faculty" element={<Faculty/>}/>
        <Route path="/studentbody" element={<Studentspage/>}/>
        <Route path="/event/:id" element={<EventPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
