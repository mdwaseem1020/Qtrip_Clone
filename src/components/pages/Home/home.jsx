import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Bg from "./imj";
import Card from "./card";
import Fotter from "./footer";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net/api/v1/cities")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const valuesearch = (e) => {
    setSearch(e.target.value);
  };

  const enter = (e) => {
    if (e.key === "Enter") {
      const filteredCities = data.filter((item) =>
        item.city.toLowerCase() === search.toLowerCase()
      );
      if (filteredCities.length > 0) {
        navigate(`/${filteredCities[0].id}`);
      } else {
        alert("City not found. Please try again!");
      }
    }
  };
  

  return (
    <>
      <Navbar />
      <Bg />
      <input
        id="bar"
        type="search"
        placeholder="Search a city"
        value={search}
        onChange={valuesearch}
        onKeyDown={enter}
        autoComplete="off"
        className="bar"
      />
      <div className="RR">
        {data.length > 0 ? (
          data
            .filter((item) => item.city.toLowerCase().includes(search.toLowerCase()))
            .map((item) => (
              <Link to={`/${item.id}`} key={item.id}>
                <Card {...item} />
              </Link>
            ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Fotter />
    </>
  );
}