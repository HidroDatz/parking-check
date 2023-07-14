
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import Page2 from './components/Page2';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Page2' element={<Page2/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;