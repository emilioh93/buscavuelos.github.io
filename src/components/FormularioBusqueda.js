import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const FormularioBusqueda = () => {
  return (
    <Container>
      <Form className="mt-5">
        <section className="row d-flex justify-content-center">
          <div className="col-md-3 col-sm-12">
            <Form.Control type="text" placeholder="Destino" />
          </div>
          <div className="col-md-3 col-sm-12">
            <Form.Control type="text" placeholder="Origen" />
          </div>
          <div className="col-md-3 col-sm-12">
            <Form.Control type="text" placeholder="Locale" />
          </div>
          <div className="col-md-3 col-sm-12">
            <Button className="w-100">Buscar</Button>
          </div>
        </section>
      </Form>
    </Container>
  );
};

export default FormularioBusqueda;
