import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Country = ({ country }) => {
  const [show, setShow] = useState(false);
  
  const handleShowClick = () => setShow(!show);

  if (show) {
      return (
          <div>
              {country.name}{" "}
              <button onClick={handleShowClick}>{show ? "Hide" : "show" }</button>
              <CountryInfo country={country} />
          </div>
      );
  }

  return (
      <div>
          {country.name}{" "}
          <button onClick={handleShowClick}>{show ? "Hide" : "Show"}</button>
      </div>
  );
};
const Weather = ({capital}) => {
  const [weather, setWeather] = useState({})
  const getWeather = () => {
    const api_key = process.env.REACT_APP_API_KEY
    const capitalCity = capital.toString()
    console.log('http://api.weatherstack.com/current?access_key='+api_key+'&query'+capitalCity)
    axios.get('http://api.weatherstack.com/current?access_key='+api_key+'&query='+capitalCity
    )
    .then(response => {
    setWeather(response.data)
  })
  }
 

  useEffect((getWeather), [capital])
  
  if(Object.keys(weather).length !== 0) {
    return (
      <div>
        <div>
          temperature: {weather.current.temperature}
        </div>
        <img alt="weather icon" src={weather.current.weather_icons} />
        <div>
          wind: {weather.current.wind_speed}
        </div>
      </div>
    )
  }
  else {
    return (<div></div>)
  }
}
 

const CountryInfo = ({ country, weatherData }) => {
  return (
  <div>
      <h2>Name: {country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h3>Languages: </h3>
      <ul>
          {country.languages.map((language) => <li key={language.name}>{language.name}</li>)}
      </ul>
      <img src={country.flag} width="300" alt={`${country.name} flag`} />
  </div>
  )
};


const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log(error));
  }, []);


  const handleSearchChange = (event) => setSearch(event.target.value);

  const countriesToShow = 
    search === ""
    ? [] 
    : countries.filter((country) => country.name.toLowerCase().includes(search.toLowerCase())
    );

  if (countriesToShow.length === 1) {
    return (
      <div>
        find countries <input onChange={handleSearchChange} />
        <CountryInfo country={countriesToShow[0]} />

      </div>
    );
  }

  return (
    <div>
      find countries <input onChange={handleSearchChange} />
      <div>
        {countriesToShow.length > 10 
          ? "too many matches, specify another filter"
          : countriesToShow.map((country) => (
            <div key={country.name}>
              <Country country={country}/>
              <h1>Weather in {country.capital}</h1>
              <Weather capital={country.capital} />
            </div>
          ))}
      </div>
    </div>
  );
};
   export default App;