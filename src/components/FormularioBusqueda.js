import React, { useState, useEffect } from "react";
import { Button, Container, Form, FloatingLabel } from "react-bootstrap";
import Resultado from "./Resultado";

const FormularioBusqueda = () => {
  const [arregloPaises, setArregloPaises] = useState([]);
  const [destino, setDestino] = useState("");
  const [origen, setOrigen] = useState("");
  const [resultados, setResultados] = useState({});

  let consultarPaisURL =
    "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/en-US";
  let resultadosURL =
    "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/SFO-sky/ORD-sky/2021-09-01?inboundpartialdate=2019-12-01";

  useEffect(() => {
    consultarPais();
  }, []);

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

  const consultarResultado = async () => {
    try {
      const respuesta = await fetch(resultadosURL, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "3a61d965efmsh763ab4a859eb191p1173b1jsn61d45064a77d",
          "x-rapidapi-host":
            "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        },
      });
      const datos = await respuesta.json();
      console.log("respuesta", respuesta);
      setResultados(datos);
      console.log("datos", datos);
    } catch (err) {
      console.log("error", err);
    }
  };

  console.log(resultados);

  return (
    <Container>
      <Form className="mt-5">
        <section className="row d-flex justify-content-center">
          <div className="col-md-3 col-sm-12">
            <FloatingLabel
              className="ms-3"
              controlId="floatingSelect"
              label="Origen"
            >
              <Form.Select
                onChange={(e) => setOrigen(e.target.value)}
                aria-label="Default select example"
              >
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
          </div>
          <div className="col-md-3 col-sm-12">
            <FloatingLabel
              className="ms-3"
              controlId="floatingSelect"
              label="Destino"
            >
              <Form.Select
                onChange={(e) => setOrigen(e.target.value)}
                aria-label="Default select example"
              >
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
          </div>
          <div className="col-md-3 col-sm-12">
            <Form.Control
              type="date"
              placeholder="Salida"
              onChange={(e) => setDestino(e.target.value)}
            />
          </div>
          <div className="col-md-3 col-sm-12">
            <Button className="w-100" onClick={consultarResultado}>
              Buscar
            </Button>
          </div>
        </section>
      </Form>
      <Resultado resultados={resultados}></Resultado>
    </Container>
  );
};

export default FormularioBusqueda;
