import '../styles/Navbar.scss';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='header-container'>
        <h1 className='navbar__title'>Resume Builder</h1>
      </div>
      <div className='link-container'>
        <a href='/' className='navbar__link'>Personal Info</a>
        <a href='/experience' className='navbar__link'>Experience</a>
        <a href='/education' className='navbar__link'>Education</a>
        <a href='/skills' className='navbar__link'>Additional Info</a>
      </div>
    </nav>
  )
}

export default Navbar