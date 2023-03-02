import React from "react";
import data from "../../Data";
import "./home.css"

const Home = () => {
  return (
    <div className="homecontent">
      {data.map((ele,i) => {
        return (
          <div key={i} className="card" style={{ width: "40rem", margin: "auto", marginTop:"8px" }}>
            <h3 >{ele.heading}</h3>
            <p className="card-text">{ele.uppertext}</p>
            <img src={ele.img} className="card-img-top" alt="..." />
            <div className="card-body">
            <p className="card-text">{ele.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
