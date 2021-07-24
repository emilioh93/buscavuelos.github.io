import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Form, FloatingLabel } from "react-bootstrap";

const ConfigRegional = () => {
  const [arregloMonedas, setArregloMonedas] = useState([]);
  const [arregloPaises, setArregloPaises] = useState([]);
  const [moneda, setMoneda] = useState("");
  const [idioma, setIdioma] = useState("");

  let consultarMonedaURL =
    "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/currencies";
  let consultarPaisURL =
    "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/en-US";

  useEffect(() => {
    consultarMoneda();
    consultarPais();
  }, []);

  const consultarMoneda = () => {
    fetch(consultarMonedaURL, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3a61d965efmsh763ab4a859eb191p1173b1jsn61d45064a77d",
        "x-rapidapi-host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((datos) => {
        setArregloMonedas(datos.Currencies);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const consultarPais = () => {
    fetch(consultarPaisURL, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3a61d965efmsh763ab4a859eb191p1173b1jsn61d45064a77d",
        "x-rapidapi-host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((datos) => {
        setArregloPaises(datos.Countries);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Fragment>
      <FloatingLabel controlId="floatingSelect" label="Moneda">
        <Form.Select onChange={(e) => setMoneda(e.target.value)} id="contenedorMonedas" aria-label="Default select example">
          {arregloMonedas &&
            arregloMonedas.map((moneda) => {
              return (
                <option>
                  {moneda.Code}-{moneda.Symbol}
                </option>
              );
            })}
        </Form.Select>
      </FloatingLabel>
      <FloatingLabel className="ms-3" controlId="floatingSelect" label="País/región">
        <Form.Select onChange={(e) => setIdioma(e.target.value)} id="contenedorPaises" aria-label="Default select example">
          {arregloPaises &&
            arregloPaises.map((pais) => {
              return (
                <option>
                  {pais.Code}-{pais.Name}
                </option>
              );
            })}
        </Form.Select>
      </FloatingLabel>
    </Fragment>
  );
};

export default ConfigRegional;
