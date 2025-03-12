import { useEffect, useState } from "react";

const Burgers = () => {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/burgers")
      .then((res) => res.json())
      .then((data) => {
        console.log("Datos recibidos:", data); // ✅ Verifica si llegan los datos
        setBurgers(data);
      })
      .catch((err) => console.error("Error al obtener hamburguesas:", err));
  }, []);

  return (
    <div className="p-6 text-white text-center">
      <h2 className="text-4xl font-bold mb-4">🍔 Lista de Hamburguesas</h2>
      <ul className="list-disc list-inside text-lg">
        {burgers.length > 0 ? (
          burgers.map((burger) => (
            <li key={burger.id} className="text-gray-300">
              {burger.nombre} - <span className="text-red-500">${burger.precio}</span>
            </li>
          ))
        ) : (
          <p>Cargando hamburguesas...</p>
        )}
      </ul>
    </div>
  );
};

export default Burgers;
