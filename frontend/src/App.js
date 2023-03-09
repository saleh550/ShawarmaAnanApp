import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import CheckVerify from './pages/CheckVerify';
import CreateVerify from './pages/CreateVarify';
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create/verification' element={<CreateVerify/>}/>
        <Route path='/check/verification' element={<CheckVerify/>}/>
      </Routes>
  </Router>

  );
}

export default App;
