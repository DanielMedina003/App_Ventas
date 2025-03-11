const Home = () => {
    return (
      <section className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gradient-to-b from-black via-red-900 to-black text-white text-center">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">Bienvenido a Devil Burger 🍔🔥</h1>
          <p className="mt-4 text-lg text-gray-300">Las hamburguesas más diabólicamente deliciosas</p>
          <button className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg">
            Ver Menú
          </button>
        </div>
      </section>
    );
  };
  
  export default Home;
  