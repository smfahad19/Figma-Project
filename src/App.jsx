import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Find from './Components/Find';
import FindWork from './Components/FindWork';
import Category from './Components/Category';
import Portfolio from './Components/Portfolio';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <Find/>
      <FindWork/>
      <Category />
      <Portfolio/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
