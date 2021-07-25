import React from "react";
import { Table } from "react-bootstrap";

const Resultado = (props) => {
  const aerolineas = props.resultados.Carriers.map((resultado) => {
    return <td>{resultado.Name}</td>;
  });

  const origen = props.resultados.Places.map((resultado) => {
    return <td>{resultado.Name}</td>;
  });

  console.log(aerolineas);
  console.log(origen);

  return (
    <Table className="mt-5">
      <thead>
        <tr>
          <th>Aerolineas</th>
          <th>Origen</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {aerolineas}
          {origen}
        </tr>
      </tbody>
    </Table>
  );
};

export default Resultado;
