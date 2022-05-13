import './App.css';
import Home from './Components/Home';
import People from './Views/People';
import Planets from './Views/Planets';
import { BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  const Error = () => {
    return (
      <div>
      <h1>These aren't the droids you're looking for</h1>
      <img src="https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/05/ANH-Ben-identification.jpg" alt="Obi-Wan in episode 4" />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Home/>

      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planets />} />
        <Route path="*" element={<Error />}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
