import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Error from "./components/Error";

const URL_API = "https://samples.openweathermap.org/data/2.5/weather";

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    if (city === "") return;
    const consultAPI = async () => {
      // const url = `${URL_API}?q=${city},${country}&appid=${KEY}`;
      const url2 = "https://samples.openweathermap.org/data/2.5/weather?q=London&appid=b6907d289e10d714a6e88b30761fae22"
      const resp = await fetch(url2, {
        method: "GET",
        mode: 'no-cors',
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
        })
      const result = await resp.json();
      setResult(result);
    };

    consultAPI();
  }, [city, country]);

  const dataSearch = async data => {
    if (data.city === "" || data.country === "") {
      setError(true);
      return;
    }
    setCity(data.city);
    setCountry(data.country);
    setError(false);
  };

  // const consultAPI = async () => {
  //   const url = `${URL_API}?q=${city},${country}&appid=${KEY}`;
  //   try {
  //     const response = await await axios.get(url, {
  //       headers: { "Access-Control-Allow-Origin": "*" }
  //     });
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  let component;
  error
    ? (component = <Error menssage="required city and country" />)
    : (component = null);

  return (
    <div className="App">
      <Header title="Weather" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form dataSearch={dataSearch} />
            </div>
            <div className="col s12 m6">{component}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
