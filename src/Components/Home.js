import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {

  const [api,setApi] = useState(undefined);
  const [city,setCity]= useState("Delhi");
  const [permanentCity,setPermanentCity] =useState("Delhi");
 

  useEffect(()=>{
  
    getData(city);

  },[])

  async function getData (cityName){
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=4b4f97f6540c503021e44923cedcf6b7`);  
      console.log(res);
      setApi(res.data);
    }
    const handleOnClick = ()=>{
      setPermanentCity(city);
      getData(city);
    }

  return (
    <>
      <div className="weather_box">
          <div className="weather_ballon">
          <img src="./images/ballon1.png" alt="" />


              <div className="city_wrap">
                <p className="weather_temp">{api ? api.main.temp : 'no data'} </p>
                <div className="city">
                  <h1>{api ? api.name : 'No Data Found'}</h1>
                  <h3>Max : {api ? api.main.temp_max : 'no data'} deg | Min : {api ? api.main.temp_min : 'no data'} deg</h3>
                </div>
                
              </div>
            </div><div className="weather_info">
                <div className="input_row">
                <input type="text" placeholder="Another Location" value={city} onChange={(event) => setCity(event.target.value)} />
                <i onClick={handleOnClick} className="fas fa-search icon"></i>
                </div>
                <hr />
               
                  <div className="weather_location">
                  <p onClick={()=>setCity("Delhi")}>Delhi</p>
                  <p onClick={()=>setCity("Gurgaon")}>Gurgaon</p>
                  <p onClick={()=>setCity("Rewari")}>Rewari</p>
                  <p onClick={()=>setCity("Noida")}>Noida</p>
                  <hr />
                </div>

                <div className="weather_details">
                  <h3>Weather Details</h3>
                  <p>Pressure <span className="percentage">{api ? api.main.pressure : 'no data'} mbar</span></p>
                  <p>Humidity <span className="percentage">{api ? api.main.humidity : 'no data'} % </span></p>
                  <p>Wind Speed <span className="percentage">{api ? api.wind.speed : 'no data'} km/h</span></p>
                  <p>Visibility <span className="percentage">{api ? api.visibility : 'no data'} m</span></p>
                  <hr />
                  <h4>Created By Harender Singh</h4>
                </div>
                 
               

          
          </div>
      </div>
    </>
  );
}

export default Home;
