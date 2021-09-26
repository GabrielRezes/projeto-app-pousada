import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

//style
import logo from '../../assets/img/header/logo.svg';
import textLogo from '../../assets/img/header/text-logo.svg';

//class 
const ButtonMenu = "h-8 w-24 py-1 my-auto font-semibold text-center text-sm rounded-md cursor-pointer bg-gradient-to-tr from-orangeDark to-orangeLight shadow  hover:bg-yellowLight";

const ButtonMenuMobile = "h-7 w-36 mx-auto font-semibold text-center text-white shadow rounded-md cursor-pointer bg-gradient-to-tr from-orangeDark to-orangeLight";


const Header = () => {
  const [ isOpenMenuMobile, setIsOpenMenuMobile ] = useState(false);

  const menuBottomClosed = isOpenMenuMobile ? 'visibility' : 'hidden';

  //framework motion
  const iconMobile = {
    opened: {
      rotate: -45
    },
    closed: {
      rotate: 0
    }
  };
  const menuMobile = {
    opened: {
      height: 185,
      opacity: 1,
      display: "block",
      position: "absolute",
      transition: {
        delayChildren: 1.1
      }
    },
    closed: {
      height: 0,
      opacity: 0,
      position: "absolute"
    }
  };

  return (
    <div className="relative z-50">
      <nav className="shadow-lg bg-gradient-to-b from-greenDark to-greenLight">
        <div className="flex justify-between items-center h-16 py-6 px-5 text-white md:mx-10 md:p-1">

          {/* Logo and Text */}
          <Link to='/' className="flex items-center gap-3">
            <img className=" w-11 h-11" src={logo} alt='Imagem Logo'/>
            <img className="w-44 mt-3" src={textLogo} alt='Imagem Nome Pousada Bacupari'/>
          </Link>

          {/* Menu buttons */}
          <ul className="hidden lg:flex gap-3">
            <Link to="/" className={ButtonMenu}>Início</Link>
            <Link to="/pousada" className={ButtonMenu}>Pousada</Link>
            <Link to="/galeria" className={ButtonMenu}>Galeria</Link>
            <Link to="/localizacao" className={ButtonMenu}>Localização</Link>
            <Link to="/contato" className={ButtonMenu}>Contato</Link>
          </ul>

          {/* mobile icon button */}
          <motion.div
            className=" lg:hidden flex items-center "
            onClick={() => setIsOpenMenuMobile(!isOpenMenuMobile)}
            variants={iconMobile}
            initial={false}
            animate={isOpenMenuMobile ? "opened" : "closed" }
            exit={{ rotate: 45}}
          >
            <button class="">
              <svg
                class="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </nav>
    
      {/* mobile menu */}
       <nav className={`flex justify-center ${menuBottomClosed}`}>
          <motion.div
            className="w-2/3 rounded-b-3xl bg-gradient-to-t from-greenDark to-greenLight lg:invisible"
            variants={menuMobile}
            initial={false}
            animate={isOpenMenuMobile ? 'opened' : 'closed'}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col h-full w-min mx-auto justify-center gap-1" onClick={() => {setIsOpenMenuMobile(false)}}>
              <Link to="/" className={ButtonMenuMobile}>Início</Link>
              <Link to="/pousada" className={ButtonMenuMobile}>Pousada</Link>
              <Link to="/galeria" className={ButtonMenuMobile}>Galeria</Link>
              <Link to="/localizacao" className={ButtonMenuMobile}>Localização</Link>
              <Link to="/contato" className={ButtonMenuMobile}>Contato</Link>
            </ul>
          </motion.div>
        </nav>

    </div>
  );
};

export default Header;
