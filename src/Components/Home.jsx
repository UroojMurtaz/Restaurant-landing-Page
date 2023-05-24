import Navbar from "./Navbar";
import "./Styles.css";
import BackgroundImage from "../assets/home-banner-background.png";
import PlateImage from "../assets/home-banner-image.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner">
        <div className="home-banner-image-container">
          <img src={BackgroundImage} />
        </div>
        <div className="content">
          <h1 className="primary-text">Your Favourite Fruit Delivered Hot & Fresh</h1>
          <p className="secondary-text">
          Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food
          </p>
          <button className="primary-button">Order Now <ArrowForwardIcon/> </button>
        </div>
        <div className="home-plate-image-container">
          <img src={PlateImage} />
        </div>
      </div>
      
    </div>
  );
}

export default Home;
