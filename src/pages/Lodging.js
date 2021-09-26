import React, { useState } from 'react';

//components
import Footer from '../components/Footer/Footer';
import Carousel from '../components/Carousel/Carousel';

//style
import bg from "../assets/img/app/bg.svg";


const Lodging = () => {

  const [ currCategory, setCurrCategory ] = useState('ambience')

  const handleChangeCategory = ({ target }) => {
    setCurrCategory(target.id)
  }

    return (
      <>
        <div className="h-full w-full pb-5 bg-cover bg-left-top sm:pb-60 " style={{ backgroundImage: `url(${bg})` }}>
          
          <div className="flex flex-col items-center h-full min-w-full xl:grid grid-cols-3 grid-rows-2 xl:h-screen">
              
              <nav className="flex justify-center mx-auto h-40 w-4/5  mt-6 shadow-lg rounded-3xl
                              bg-gradient-to-r from-greenLight to-blueDark
                              md:w-3/5
                              lg:h-56
                              xl:w-4/5 xl:mt-32 xl:ml-44 ">
                
                <ul className="flex flex-col justify-center items-center gap-3 h-full lg:gap-7 ">

                  <li className="relative z-0 w-44 text-center font-bold rounded-2xl shadow-md
                               text-gray-50 p-1 border-2 border-gray-50 lg:w-64  
                                 cursor-pointer transform hover:bg-blue-200 hover:bg-opacity-30
                                 hover:shadow-lg hover:-translate-y-1 transition ease-in-out duration-300"
                      id="ambience"
                      onClick={handleChangeCategory}>
                        Ambiente
                  </li>
                
                  <li className="w-44 text-center font-bold rounded-2xl shadow-md
                               text-gray-50 p-1 border-2 border-gray-50 lg:w-64
                                 cursor-pointer transform hover:bg-blue-200 hover:bg-opacity-30
                                 hover:shadow-lg hover:-translate-y-1 transition ease-in-out duration-300"
                      id="sharedArea"
                      onClick={handleChangeCategory}>
                        Área Compartilhada
                  </li>
                
                  <li className="w-44 text-center font-bold rounded-2xl shadow-md
                               text-gray-50 p-1 border-2 border-gray-50 lg:w-64
                                 cursor-pointer transform hover:bg-blue-200 hover:bg-opacity-30
                                 hover:shadow-lg hover:-translate-y-1 transition ease-in-out duration-300"
                      id="bedRooms"
                      onClick={handleChangeCategory}>
                        Quartos
                  </li>
                
                </ul>
              </nav>
            
              <Carousel category={currCategory}/>

            {/* text ambience */}
              { currCategory === 'ambience' &&
                <p className="mt-10 mx-4 p-3 border-2 border-opacity-20
                            text-gray-100 text-lg font-semibold text-justify
                              rounded-md bg-gray-500 bg-opacity-50 backdrop-filter
                              backdrop-blur-md sm:px-20 md:w-5/6 md:px-10 md:py-5
                              col-span-3 row-start-2 xl:w-6/12 xl:mx-auto ">
                  Anda estressado, cansado da rotina de ficar só em casa?<br/>
                  <br/>
                  Que tal vir para um lugar próximo  a natureza , com águas calmas e cristalinas,
                  a Lagoa de Bacupari é o local certo! <br/>
                  <br/>
                  Além da lagoa, há dunas enormes e passeios divertidos em trilhas...
                  Quer saber o melhor lugar para se hospedar?<br/>
                  Nossa Pousada um Ambiente familiar, tranquilo e aconchegante, lugar onde você pode respirar ar puro.
                </p>
              }

              {/* text sharedArea */}
              { currCategory === 'sharedArea' &&
                <p className="mt-10 mx-4 p-3 border-2 border-opacity-20
                             text-gray-100 text-lg font-semibold text-justify
                              rounded-md bg-gray-500 bg-opacity-50 backdrop-filte
                              backdrop-blur-md sm:px-20 md:w-5/6 md:px-10 md:py-5
                              col-span-3 row-start-2 xl:w-6/12 xl:mx-auto">
                  Ambiente aconchegante, espaçoso e com uma bela área verde para você aproveitar com sua família.<br/>
                  <br/>
                  Cozinha compartilhada com todos os utensílios necessários, área com sofá e televisão... <br/>
                  Ambiente Tranquilo e Seguro<br/>
                  <br/>
                  Não perca tempo, entre em contato e garanta sua reserva!!!
                </p>
              }

              {/* text beRooms */}
              { currCategory === 'bedRooms' &&
                <p className="mt-10 mx-4 p-3 border-2 border-opacity-20
                             text-gray-100 text-lg font-semibold text-justify
                              rounded-md bg-gray-500 bg-opacity-50 backdrop-filte
                              backdrop-blur-md sm:px-20 md:w-5/6 md:px-10
                              col-span-3 row-start-2 xl:w-6/12 xl:mx-auto">
                  Ambiente aconchegante, espaçoso e com uma bela área verde para você aproveitar com sua família.<br/>
                  <br/>
                  Cozinha compartilhada com todos os utensílios necessários, área com sofá e televisão... <br/>
                  Ambiente Tranquilo e Seguro<br/>
                  <br/>
                  Não perca tempo, entre em contato e garanta sua reserva!!!
                </p>
              }
            </div>
          
          </div>
        

        <Footer/>

      </>

    )
}

export default Lodging;
