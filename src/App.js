import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavAdmin from './components/navbar/NavAdmin1';
import Footer from './components/Footer';

import './App.css';

function App() {
  
  return (
    <div className="container fluid app-border bg-app">
      <div class="powr-hit-counter" id="c00a26fd_1616614947" hidden ></div>
      <iframe src="https://www.powr.io/hit-counter/u/c00a26fd_1616614947#platform=html&amp;url=http%3A%2F%2Flocalhost%3A3000%2F"
       powrindex="0" 
       width="100%" 
       height="57px" 
       frameborder="0" 
       webkitallowfullscreen="" 
       mozallowfullscreen="" 
       allowfullscreen="" 
       style={{height: "57px",transition:" height 0.3s ease 0s", display: "none"}}></iframe>
      <NavAdmin/>
      <Footer></Footer>
   </div>
  );
}

export default App;
