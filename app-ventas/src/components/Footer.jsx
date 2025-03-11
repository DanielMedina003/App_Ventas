import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import emailIcon from "../assets/email.png";

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
      </div>
    </footer>
  );
};

export default Footer;
