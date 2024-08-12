import "../businessCard.css"
import Links from "./Links";

function Details() {
    return (
        <div className="Details">
            <div className="Main">
                <h1 className="Name">Piotr Kwaśniowski</h1>
                <p className="GithubName">PiotrKwasniowski</p>
            </div>
            <Links/>
            <div className="Desc">
                <h4>Frontend, Backend and Full-stack developer, Using React, Node, PHP and Python </h4>
            </div>
            

        </div>
    );
  }
  
  export default Details;
  