import HambuO from "../assets/HambuO.png"; // Importa la imagen desde assets

const Home = () => {
  return (
    <section className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gradient-to-b from-black via-red-900 to-black text-white text-center p-4">
      <div className="w-full max-w-5xl h-full flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Sección de texto (izquierda en desktop, arriba en móvil) */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">Bienvenido a Devil Burger 🍔🔥</h1>
          <p className="mt-4 text-lg text-gray-300">
            Las hamburguesas más diabólicamente deliciosas
          </p>
        </div>

        {/* Sección de imagen (derecha en desktop, abajo en móvil) */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={HambuO} 
            alt="Hamburguesa"
            className="rounded-lg shadow-lg w-full max-w-xs md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
