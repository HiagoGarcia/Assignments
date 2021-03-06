import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewUser from './views/NewUser';
import HomePage from './views/HomePage';
import Login from './views/Login';
import UserLogout from './components/UserLogout';
import UserDetail from './views/UserDetail';
import UpdateUser from './views/UpdateUser';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/new" element={<NewUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<UserLogout />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/user/edit/:id" element={<UpdateUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
