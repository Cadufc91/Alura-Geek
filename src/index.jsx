import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';


ReactDOM.render(
  <Router>
    <Header />
    <Routes>
      <Route exact path='/' element={<App />}>
        {/* <App /> */}
      </Route>
      <Route path='/login' element={<Login />}>
        
      </Route>
    </Routes>
    <Footer />
  </Router>,
  document.getElementById('root')
);

