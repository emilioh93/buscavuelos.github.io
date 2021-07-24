import React, { useState, useEffect } from "react";
import { Button, Container, Form, FloatingLabel } from "react-bootstrap";
import Resultado from "./Resultado";

const FormularioBusqueda = () => {
  const [arregloPaises, setArregloPaises] = useState([]);
  const [destino, setDestino] = useState("");
  const [origen, setOrigen] = useState("");
  const [resultado, setResultado] = useState([]);

  let consultarPaisURL =
    "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/en-US";

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

  let resultadoURL =
    "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm";

  const consultarResultado = () => {
    fetch(resultadoURL, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3a61d965efmsh763ab4a859eb191p1173b1jsn61d45064a77d",
        "x-rapidapi-host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((datos) => {
        setResultado(datos.Places);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Container>
      <Form className="mt-5">
        <section className="row d-flex justify-content-center">
          <div className="col-md-5 col-sm-12">
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
          <div className="col-md-5 col-sm-12">
            <Form.Control
              type="text"
              placeholder="Destino"
              onChange={(e) => setDestino(e.target.value)}
            />
          </div>
          <div className="col-md-2 col-sm-12">
            <Button className="w-100" onClick={consultarResultado}>
              Buscar
            </Button>
          </div>
        </section>
      </Form>
      <Resultado resultado={resultado}></Resultado>
    </Container>
  );
};

export default FormularioBusqueda;
