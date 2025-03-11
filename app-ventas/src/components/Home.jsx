import HambuO from "../assets/HambuO.png"; // Importa la imagen desde assets

const Home = () => {
  return (
    <section className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gradient-to-b from-black via-red-900 to-black text-white text-center">
      <div className="w-4/5 h-full flex items-center justify-between">
        {/* Sección de texto (izquierda) */}
        <div className="w-1/2 flex flex-col items-center">
          <h1 className="text-5xl font-bold">Bienvenido a Devil Burger 🍔🔥</h1>
          <p className="mt-4 text-lg text-gray-300">Las hamburguesas más diabólicamente deliciosas</p>
          
        </div>

        {/* Sección de imagen (derecha) */}
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={HambuO} // Usa la imagen importada
            alt="Hamburguesa"
            className="rounded-lg shadow-lg w-96 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;