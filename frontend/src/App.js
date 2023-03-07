import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import CreateVerify from './pages/CreateVarify';
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<CreateVerify/>}/>
      </Routes>
  </Router>

  );
}

export default App;
