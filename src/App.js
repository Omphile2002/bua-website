import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import ComingSoonPage from './ComingSoonPage/ComingSoonPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/" element={<ComingSoonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
