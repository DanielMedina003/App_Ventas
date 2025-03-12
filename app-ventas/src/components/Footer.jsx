import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import emailIcon from "../assets/email.png";
import whatsappIcon from "../assets/whatsapp.webp";



const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 w-full bg-black text-gray-300 py-4 text-center">
      <p>© 2024 Devil Burger. Todos los derechos reservados.</p>
      <div className="mt-2 space-x-4 flex justify-center">
        <a href="#" className="hover:opacity-75">
          <img src={facebookIcon} alt="Facebook" className="w-6 h-6 inline" />
        </a>
        <a href="#" className="hover:opacity-75">
          <img src={instagramIcon} alt="Instagram" className="w-6 h-6 inline" />
        </a>
        <a href="#" className="hover:opacity-75">
          <img src={emailIcon} alt="Contacto" className="w-6 h-6 inline" />
        </a>
         {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/3234437801"
        className="fixed bottom-4 right-8 rounded-full shadow-lg transition-transform duration-300 ease-out transform z-10 hover:scale-110 "
      >
        <img src={whatsappIcon} alt="WhatsApp" className="w-12 h-12" />
      </a>
        
      </div>
    </footer>
  );
};

export default Footer;
