import "./Styles.css";
import BackgroundImage from "../assets/about-background.png";
import PlateImage from "../assets/home-banner-image.png";

function Home() {
  return (
    <div className="About-us-Container">
      <div className="About-us-banner">
        <div className="About-us-banner-image-container">
          <img src={BackgroundImage} />
        </div>
        <div className="About-us-content">
          <p style={{color:"#fe9e0d",fontSize:"20px",fontWeight:"bold"}}>About</p>
          <h1 className="primary-text" >Food Is An Important Part Of Balanced Diet</h1>
          <p className="secondary-text">
          Share the story and history of your restaurant, highlighting your mission, values, and what sets you apart
          </p>
          {/* <button className="primary-button">Order Now <ArrowForwardIcon/> </button> */}
        </div>
        <div className="About-us-plate-image-container">
          <img src={PlateImage} />
          </div>
      </div>
      
    </div>
  );
}

export default Home;
