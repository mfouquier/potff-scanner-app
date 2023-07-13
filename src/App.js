import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Home';
import { NewMember } from './NewMember';
import { Reports } from './Reports';
import { Members } from './Members';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/newMember' element={<NewMember />} />
          <Route path='/members' element={<Members />} />
          <Route path='/reports' element={<Reports />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
