import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const Resultado = (props) => {
  console.log("props.resultados", props.resultados.Quotes);
  
  // const quotes = props.resultados.Quotes.MinPrice;
  const quotes = props.resultados.Quotes.map(quote => console.log(quote.MinPrice))
  const aerolineas = props.resultados.Carriers.map(aerolinea => console.log(aerolinea.Name))
  const places = props.resultados.Places.map(place => console.log(place.Name))
  
  // for (const i in quotes) {
  //   console.log(i);    
  //   }

  //   console.log(quotes);

  
  // console.log(
  //   "props.resultados.Quotes[0].MinPrice",
  //   props.resultados.Quotes[0].MinPrice
  // );


  // let codigo = () => {
  //   for (let indice in props.resultados) {
  //     return (
  //       <tr>
  //         <td>{indice}</td>
  //       </tr>
  //     );
  //     console.log("indice", indice);
  //   }
  // };

  // let precioMin = props.resultados.Quotes.map((item) => {
  //   return (
  //     <tr>
  //       <td>{item.MinPrice}</td>
  //     </tr>
  //   );
  // });

  return (
    <Table className="mt-5">
      <thead>
        <tr>
          <th>Precio Mínimo</th>
          <th>Aerolínea</th>
          <th>Aeropuerto</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        {/* {props.resultados.map((resultado) => {
          return (
            <tr>
              <td>{resultado.Quotes}</td>
              <td>{resultado.Carriers}</td>
              <td>{resultado.Places}</td>
              <td>{resultado.Routes}</td>
            </tr>
          );
        })} */}
      </tbody>
    </Table>
  );
};

export default Resultado;
