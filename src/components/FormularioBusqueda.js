import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const FormularioBusqueda = () => {
  //   const [moneda, setMoneda] = useState("");
  const [arregloMonedas, setArregloMonedas] = useState([]);

  let consultarMonedaURL =
    "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/currencies";

  useEffect(() => {
    consultarMoneda();
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
        console.log(datos);
        setArregloMonedas([datos]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  console.log("arregloMonedas", arregloMonedas[0].Currencies[0].Code);

  return (
    <Form className="mt-5">
      <section className="row d-flex justify-content-center">
        <div className="col-md-2 col-sm-12">
          <Form.Control type="text" placeholder="Destino" />
        </div>
        <div className="col-md-2 col-sm-12">
          <Form.Control type="text" placeholder="Origen" />
        </div>
        <div className="col-md-2 col-sm-12">
          <Form.Select aria-label="Default select example">
            {arregloMonedas.map((arregloMoneda) => (
              <option key={arregloMoneda.toString()}>
                {arregloMoneda.Currencies.Code}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="col-md-2 col-sm-12">
          <Form.Control type="text" placeholder="Locale" />
        </div>
        <div className="col-md-2 col-sm-12">
          <Button className="w-100">Buscar</Button>
        </div>
      </section>
    </Form>
  );
};

export default FormularioBusqueda;
