import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {

  const [api,setApi] = useState('');
  const [city,setCity]= useState("Delhi");

  useEffect(()=>{
   async function getData (){
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4b4f97f6540c503021e44923cedcf6b7`);  
      console.log(res);
      setApi(res);
    }
    getData();

  },[city])

  return (
    <>
      <div className="weather_box">
          <div className="weather_ballon">
          <img src="./images/ballon1.png" alt="" />


              <div className="city_wrap">
                <p className="weather_temp">26 </p>
                <div className="city">
                  <h1>{city}</h1>
                  <h3>Max : 23.56 deg | Min : 25.56 deg</h3>
                </div>
              </div>
            </div><div className="weather_info">
                <input type="search" placeholder="Another Location" value={city} onChange={(event) => setCity(event.target.value)} />
                <hr />
             
                  <div className="weather_location">
                  <p>Delhi</p>
                  <p>Delhi</p>
                  <p>Delhi</p>
                  <p>Delhi</p>
                  <hr />
                </div>

                <div className="weather_details">
                  <h3>Weather Details</h3>
                  <p>Cloudy <span className="percentage">12%</span></p>
                  <p>Humidity <span className="percentage">12%</span></p>
                  <p>Wind <span className="percentage">12%</span></p>
                  <p>Rain <span className="percentage">12%</span></p>
                  <hr />
                </div>
                 

          
          </div>
      </div>
    </>
  );
}

export default Home;
