import React from "react";


function TableItem(props) {
  return (
        <tr>
          <td>
              <img alt="img" src={props.image}></img>
              </td>
          <td>{props.name}</td>
          <td>{props.phone}</td>
          <td>{props.email}</td>
        </tr>
  );
}
export default TableItem;
