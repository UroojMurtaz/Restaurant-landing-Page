import logo from "../assets/Logo.svg";
import "./Styles.css";
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Testimonials</li>
          <li>About</li>
        </ul>

        <ShoppingCartOutlined fontSize="large"/>
        <button className="Book-now-button">Booking now</button>
      </nav>
    </div>
  );
}

export default Navbar;
