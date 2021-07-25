import React from "react";
import { Table } from "react-bootstrap";

const Resultado = (props) => {
  const objeto = props.resultados.map((resultado) => {
    return (
      <tr>
        <td>{resultado.Carriers}</td>;
      </tr>
    );
  });

  console.log(objeto);

  return (
    <Table className="mt-5">
      <thead>
        <tr>
          <th>#</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>{}</tbody>
    </Table>
  );
};

export default Resultado;
