import React from "react";

function About({image="https://via.placeholder.com/215Links",about}){
    return(
      <aside>
        <img alt="blog logo" src ={image}></img>
        <p>{about}</p>
      </aside>
    );
  }

  export default About;