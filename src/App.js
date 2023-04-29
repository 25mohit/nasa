import './Style.css'
import './App.css';
import './Responsive.css';
import Footer from './components/Common/Footer/Footer';
import Home from './components/Page/Home/Home';
import NavBar from './components/Common/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
