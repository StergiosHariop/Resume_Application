import Navbar from './components/Navbar.jsx';
import './App.scss';
import Personal from './components/Personal.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Additional_Info from './components/Additional_Info.jsx';
import Languages from './components/Languages.jsx';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Personal />
      <Experience />
      <Education />
      <Additional_Info />
      <Languages />
    </div>
  )
}

export default App