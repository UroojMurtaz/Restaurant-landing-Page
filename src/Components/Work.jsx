import "./Styles.css";
import Delivery from "../assets/delivery-image.png";
import PickMeal from "../assets/pick-meals-image.png";
import Choose from "../assets/choose-image.png";
export default function Work() {
  const card = [
    {
      image: PickMeal,
      title: "Pick Meals",
      content:
        "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.",
    },
    {
      image: Choose,
      title: "Choose How Often",
      content:
        "Lorem ipsum dolor sit amet consectetur.Non tincidunt magna non et elit.Dolor turpis molestie dui magnis",
    },
    {
      image: Delivery,
      title: "Fast Deliveries",
      content:
        "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.",
    },
  ];
  return (
    <div className="work-container">
      <div className="work-content">
        <p style={{ color: "#fe9e0d", fontSize: "20px", fontWeight: "bold" }}>
          Work
        </p>
        <h1 className="work-primary-text">How It Works</h1>
        <p className="work-p-content">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-card-container">
      {card.map((item,index) => {
        return <div key={index} className="card">
            <img src={item.image} className="card-image"/>
            <h1 className="card-title">{item.title}</h1>
            <p className="card-content">{item.content}</p>
        </div>;
      })}
      
        </div>
       
      
    </div>
  );
}
