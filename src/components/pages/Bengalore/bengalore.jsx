import { useState,useEffect } from "react";
import Navbar from '../Home/navbar.jsx';
import Card2 from './Card2';
import "../Bengalore/bengalore.css"
import "../Bengalore/child.css"
import { Link } from "react-router-dom";

export default  function Benguluru() 
{
  const [data, setData] = useState([]);
  const[date1,setdata]=useState([])
  useEffect(() => {
    fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=bengaluru")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=bengaluru")
      .then(response => response.json())
      .then(data1 => setData(data1))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
  <>
            <Navbar/>
            <h1 className='h1'>Explore all adventures</h1>
            <h3 className='h1'>Here's a list of places that you can explore in city</h3>
            <hr></hr>
            <div>
               <span className='filter'>filter</span>
               <button  className='button'>Filter by duration</button>
               <span className='filter'>Clear</span>
               <button className='button'>Add category </button>
               <span className='filter'>clear</span>
               <button className='button'>Search Adventures</button>
               <span className='filter'>Clear</span>
               <hr></hr>
               </div>
               <div id='intel'>
               {data.map(x=>{
                return (
                  <Link to ={`/bengalore/content`}><Card2 src={x.image} h3={x.name} h5={x.costPerHead} h4={x.duration} p={x.p} h6={x.duration} s={x.category}/></Link>
                )
              })}
            </div>
            </>
          )
    }
