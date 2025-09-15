import React from "react";

function Contenedor({ saludo }) {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-semibold">{saludo}</h1>
      <p className="mt-2 text-gray-600">
        Articulos y Tech para facilitarte la vida en casa
      </p>
    </div>
  );
}

export default Contenedor