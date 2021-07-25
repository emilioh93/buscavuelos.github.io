import React from "react";
import { Container } from "react-bootstrap";
import FormularioBusqueda from "./FormularioBusqueda";

const Buscador = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center">Buscar Vuelos</h1>
      <FormularioBusqueda></FormularioBusqueda>
    </Container>
  );
};

export default Buscador;
