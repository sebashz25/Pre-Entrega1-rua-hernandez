import React from "react";
export const Secciones = () => {
  return (
    <>
      <li className="nav-item">
        <button className="btn btn-dark">home</button>

        <span className="visually-hidden">(current)</span>
      </li>
      <li className="nav-item">
        <button className="btn btn-dark">products</button>
      </li>

      <li className="nav-item">
        <button className="btn btn-dark">About</button>
      </li>
    </>
  );
};
