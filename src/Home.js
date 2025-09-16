import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const gotoAbout = () => {
    navigate("/about");
  };                                                                           
    return (    
    <div>
      <h1>Home Page</h1>
        <button onClick={gotoAbout}>Go to About Page</button>
    </div>
  );
  

}
export default Home;