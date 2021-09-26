import React from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom' 

//components
import Footer from '../components/Footer/Footer';
import GoogleMaps from '../components/Map/GoogleMaps';

//style
import titleBackground from '../assets/img/home/h1.svg';
import gallery from '../assets/img/home/icon-gallery.svg';
import bg from "../assets/img/app/bg.svg";


const Home = () => {

  const history = useHistory();

  return (
    <>
      <div className=" h-5/6 w-full pb-5 bg-cover bg-left-top sm:pb-60 xl:pb-96" style={{ backgroundImage: `url(${bg})` }}>

        <div className="h-full w-full px-5 md:h-screen">
      
          <main className="flex flex-col gap-7 py-5 md:flex-row  ">

            <img className="m-auto" src={titleBackground} alt="Bem vindo a Bacupari"/>

            <section className=" m-auto max-w-md md:mt-10 xl:max-w-xl">
              <motion.img
                onClick={() => history.push('/galeria')}
                src={gallery}
                alt="Bem vindo a Bacupari"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}  
              />
              <p className="font-bold italic text-2xl text-gray-50 text-center">Conheça a Paisagem</p>
            </section>
            
          </main>

          <aside className=" mx-auto my-11 p-1 border-2 border-opacity-20 backdrop-filter backdrop-blur-md bg-opacity-40 rounded-lg lg:max-w-4xl">
            <p className="font-medium italic text-gray-50  text-center ">
                "Se você deseja ir a um lugar buscando descanço e ficar deslumbrado com a beleza da natureza, você deve ir a Bacupari.<br/>
                <br/>
                Uma linda lagoa, água cristalina com ótima temperatura...<br/>
                <br/>
                Além possuir águas limpas e rasas, dando tranquilidade quanto as crianças, no local também existem enormes dunas que proporcionam ótimos passeis e diversão para família" 
            </p>  
          </aside>
        
          <section className="flex h-96 w-full mx-auto mt-14 md:w-2/3">
            <GoogleMaps/>
          </section>
      
        </div>
      
      </div>
      
      <Footer/>
    </>
    
  );
};

export default Home;
