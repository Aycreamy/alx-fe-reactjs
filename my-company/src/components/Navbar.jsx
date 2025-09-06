import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333' }}>
      <Link to="/" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>About</Link>
      <Link to="/services" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
