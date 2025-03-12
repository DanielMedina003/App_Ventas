import HambuO from "../assets/HambuO.png"; // Asegúrate de importar correctamente la imagen
import whatsappIcon from "../assets/whatsapp.webp";

const Home = () => {
  return (
    <section className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#450000] to-black text-white text-center p-4">
      <div className="w-full max-w-6xl h-full flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-0">

        {/* Sección de texto */}
        <div className="ml-0 md:ml-[-40px] md:pb-19 w-70 md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 drop-shadow-lg animate-pulse mt-8 md:mt-16">
            Bienvenido a <span className="text-red-600">Devil</span> Burger 🍔🔥
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-300 font-medium">
            Las hamburguesas más <span className="text-red-400 font-bold">diabólicamente</span> deliciosas
          </p>
        </div>

        {/* Sección de imagen */}
        <div className="w-3/8 md:w-1/5 pt-10 md:pt-0 flex items-center justify-center">
          <img
            src={HambuO}
            alt="Hamburguesa"
            className="rounded-lg shadow-lg w-full max-w-xs md:max-w-md translate-y-[-50px] md:translate-y-0 transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Botón centrado más arriba */}
      <div className="absolute bottom-45 flex justify-center w-full">
      <button className="bg-black  text-rose-500 font-bold py-3 px-6 rounded-full text-lg">
          Adquiere la tuya
        </button>
      </div>

     
    </section>
  );
};

export default Home;
