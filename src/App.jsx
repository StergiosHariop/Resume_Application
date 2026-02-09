import Navbar from './components/Navbar.jsx';
import './App.scss';
import Personal from './components/Personal.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Languages from './components/Languages.jsx';
import Resume from './components/Resume.jsx';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Personal />
      <Experience />
      <Education />
      <Languages />
      <Resume />
    </div>
  )
}

export default App