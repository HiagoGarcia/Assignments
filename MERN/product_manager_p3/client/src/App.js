import React from 'react';
import {
  BrowserRouter,
  // Switch,
  Route,
  Routes
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Details';
import './App.css';
import Update from './views/Update';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
            <h1>Product Manager</h1>
        <Routes>
          <Route path ="/api/product/" element={<Main/>}/>
          <Route path ="/api/product/:id" element={<Detail/>}/>
          <Route path ="/api/product/:id/edit" element={<Update/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
