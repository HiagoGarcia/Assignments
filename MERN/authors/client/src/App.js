import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import Update from './views/Update';
import New from './views/New';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Favorite authors</h1>
        <Routes>
          <Route path = "/" element={<Main/>}/>
          <Route path = "/author/new" element={<New/>}/>
          <Route path = "/author/:id/edit" element={<Update/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
