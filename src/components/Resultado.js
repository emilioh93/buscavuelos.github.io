import React from "react";
import { ListGroup } from "react-bootstrap";

const Resultado = (props) => {
  return (
    <ListGroup className="mt-5">
      {props.resultado.map((item) => {
        return (
          <ListGroup.Item>
            {props.resultado.indexOf(item) + 1}- {item.PlaceName}{" "}
            <strong>{item.CountryName}</strong>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default Resultado;
