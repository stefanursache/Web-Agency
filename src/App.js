import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services'
import Blog from './pages/Blog';
function App() {
  return (
    <Router>
    <Routes>
      <Route  exact path="/" element={<Home/>}/>
      <Route  exact path="/Services" element={<Services/>}/>
      <Route  exact path="/Blog" element={<Blog/>}/>
    </Routes>
  
  </Router>
  );
}

export default App;
