import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useState } from "react";
import Search from "../ui/Search";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";


const Header = () => {
  const [isSearchmodal, setIsSearchmodal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  return (
    <div className="h-[5.5rem] bg-secondary ">
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />
        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden z-50  ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="px-[5px] py[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Anasayfa</a>
              
            </li>
            <li className="px-[5px] py[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Ürünler</a>
            </li>
            <li className="px-[5px] py[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Kampanyalar</a>
            </li>
            <li className="px-[5px] py[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Hakkımızda</a>
            </li>
          </ul>
          {isMenuModal && (
            <button
              className="absolute  top-4 right-4 z-50"
              onClick={() => setIsMenuModal(false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center">
          <a href="#">
            <FaUserAlt className="hover:text-primary transition-all" />
          </a>
          <a href="#">
            <FaShoppingCart className="hover:text-primary transition-all" />
          </a>

          <button onClick={() => setIsSearchmodal(true)}>
            <FaSearch className="hover:text-primary transition-all" />
          </button>
          <a href="#" className="md:inline-block hidden sm">
            <button className="btn-primary"> Online Sipariş</button>
          </a>
          <button
            className="sm:hidden inline-block"
            onClick={() => setIsMenuModal(true)}
          >
            <GiHamburgerMenu className="text-xl hover:text-primary transition-all" />
          </button>
     
        </div>
      </div>
      {isSearchmodal && (
        <Search setIsSearchmodal={setIsSearchmodal} /> // setIsSearchmodal bu dosyanın içinden search dosyasına props olarak yolladık
      )}
    </div>
  );
};

export default Header;
