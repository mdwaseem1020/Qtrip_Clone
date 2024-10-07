import React from "react";
import Navbar from "../Home/navbar";
import { useState,useEffect } from "react";
import GoaCard from "./goacard";
import "../Bengalore/child.css"

export default function Goa() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=goa")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []); 
  return (
    <>
      <Navbar />
      <h1 className='h1'>Explore all adventures</h1>
      <h3 className='h1'>Here's a list of places that you can explore in the city</h3>
      <hr />
      <div>
        <span className='filter'>Filter</span>
        <button className='button'>Filter by duration</button>
        <span className='filter'>Clear</span>
        <button className='button'>Add category</button>
        <span className='filter'>Clear</span>
        <button className='button'>Search Adventures</button>
        <span className='filter'>Clear</span>
        <hr />
      </div>
      <div id='intel'style={{paddingLeft:"70px"}}>
        {data.map((x, index) => (
          <GoaCard
          src={x.image} h3={x.name} h5={x.costPerHead} h4={x.duration} p={x.p} h6={x.duration} s={x.category}
          />
        ))}
      </div>
    </>
  );
}