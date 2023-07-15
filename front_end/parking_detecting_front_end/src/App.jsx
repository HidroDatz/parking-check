
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import Page2 from './components/Page2';
import "./App.css";
const App = () => {
  return (
  //   <div
  //   style={{
  //     backgroundImage: `url(${parkingImage})`,
  //     backgroundSize: 'cover',
  //     backgroundPosition: 'center',
  //   }}
  // >
    <Router>
      
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Page2' element={<Page2/>} />
        </Routes>
    </Router>
  // </div>
  );
};

export default App;