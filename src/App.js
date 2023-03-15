import './App.css';
import NavBar from './components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes,Route,Outlet} from 'react-router-dom'
import HomePage from './Pages/Home/main'
import ActivitiesPage from './Pages/Activities/Main' 
import LabPage from './Pages/Lab/main'
import './Pages/Home/main.css'
import Footer from './components/Footer/Footer'
import FacultyPage from './Pages/Faculty/Faculty';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="faculty" element={<FacultyPage />} />
        <Route path="activity" element={<ActivitiesPage />} />
        <Route path="events" element={<ActivitiesPage />} />
        <Route path="labs" element={<LabPage />} />
        <Route path='chairman' element={<LabPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
