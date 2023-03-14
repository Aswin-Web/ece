import './App.css';
import NavBar from './components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes,Route,Outlet} from 'react-router-dom'
import HomePage from './Pages/Home/main'
import ActivitiesPage from './Pages/Activities/main' 
import LabPage from './Pages/Lab/main'
import './Pages/Home/main.css'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <Routes>
        <Route path="/"  element={<HomePage />} />
        <Route path="activity" element={<ActivitiesPage />} />
        <Route path="labs" element={<LabPage />} />
      </Routes>
    </div>
  );
}

export default App;
