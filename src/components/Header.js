import "./businessCard.css"
import MyImage from '../assets/piotr_photo.jpg';

function Header(props) {
    return (
        <>
             <div className="Header">
                

            </div>
            <div className="spacer layer1">

            </div>
            <div className="Photo">
                    <img src={MyImage} alt="pfp" />
            </div>
        </>
           
    );
  }
  
  export default Header;
  