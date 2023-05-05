import './Style.css'
import './App.css';
import './Responsive.css';
import './starStyle.css';
import Footer from './components/Common/Footer/Footer';
import Home from './components/Page/Home/Home';
import NavBar from './components/Common/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { stars } from './stars';
import { useState } from 'react';
import TechPort from './components/Page/TechPort/TechPort';
import TechPortView from './components/Page/TechPort/TechPortView';

// console.log("stars",stars);
function App() {
  
  const [showRaining, setShowRaining] = useState(false)

  return (
    <div className="App">
      <div className='stars'>
        <div className='container'>
          { showRaining && <section>
            <span className='fly-star' />
            <span className='fly-star n2' />
            <span className='fly-star n3' />
            <span className='fly-star n4' />
            <span className='fly-star n5' />
            <span className='fly-star n6' />
            <span className='fly-star n7' />
            <span className='fly-star n8' />
            <span className='fly-star n9' />
            <span className='fly-star n10' />
            <span className='fly-star n11' />
            <span className='fly-star n12' />
            <span className='fly-star n13' />
            <span className='fly-star n14' />
            <span className='fly-star n15' />
            <span className='fly-star n16' />
            <span className='fly-star n17' />
            <span className='fly-star n18' />
            <span className='fly-star n19' />
            <span className='fly-star n20' />
          </section>}
            {
              stars?.map((s, ind) => 
              <span id={s == '*.' && 'star'  || s == '*' && 'onlyStar'} className={s == '.' && 'cStar'} key={ind} style={{
                top: `${Math.floor(Math.random()*(ind*Math.random()*30))}px`, 
                left: `${Math.floor(Math.random()*(ind*Math.random()*30))}px`,
                bottom: `${Math.floor(Math.random()*(ind*Math.random()*10))}px`,
                // margin: `${Math.floor(Math.random()*ind)}px`,
                padding: `${Math.floor(Math.random()*ind)}px`,
                
              }}
                >{s}</span>)
            }
        </div>
      </div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home setShowRaining={setShowRaining}/>} />
          <Route path='/techport' exact element={<TechPort />} />
          <Route path='/techport-view' exact element={<TechPortView />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
