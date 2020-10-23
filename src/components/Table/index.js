import React from "react";
import "./style.css";

function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      
      <tbody>
        {props.child}
      </tbody>
    </table>
  );
}
export default Table;
