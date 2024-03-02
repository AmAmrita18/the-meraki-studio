import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App'
import HomePage from './components/HomePage/HomePage';
import Services from './components/Services/Services';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';


const Root = () => (
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<Works />} />
        <Route path='/products' element={<Services/>} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Root />
)
