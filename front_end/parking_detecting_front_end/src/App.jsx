import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import ParkingCheck from "./components/read_firebase"
import LoginSession from './components/loginSession';
import "./App.css";

const App = () => {
  // Check if user is logged in
  // const isLoggedIn = false; // Replace with your login check logic

  // // If user is not logged in, navigate to the login page
  // if (!isLoggedIn) {
  //   window.location.href = "/login";
  // }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Parking_check' element={<ParkingCheck/>} />
        <Route path='/login' element={<LoginSession/>}/>
      </Routes>
    </Router>
  );
};

export default App;