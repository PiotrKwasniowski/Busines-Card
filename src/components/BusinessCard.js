import "./businessCard.css"
import Button from "./Button";
import Details from "./Details/Details";
import Header from "./Header";

function BusinessCard() {
    return (
        <div className="Card">
            <Header/>
            <Details/>
            <div className="ButtonContainer">
                <Button text={"Follow"}/>
                <Button text={"Message"}/>
            </div>
        </div>
    );
  }
  
  export default BusinessCard;
  