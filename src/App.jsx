// components
import Navbar from './components/Navbar';
// pages
import HomePage from './pages/HomePage';
// react-router-dom
import { Routes, Route } from 'react-router-dom';
// css
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
