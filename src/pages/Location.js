import React from 'react';

//components
import Footer from '../components/Footer/Footer';
import GoogleMaps from '../components/Map/GoogleMaps';

//img
import bg from '.././assets/img/app/bg.svg';

const Location = () => {
    return (

        <>
            <div className="h-screen w-full pb-5 bg-cover bg-left-top sm:pb-60 " style={{ backgroundImage: `url(${bg})` }}>
                <div className="flex flex-col gap-8">

                    <div className="mx-auto my-11 p-1
                                    border-2 border-opacity-20
                                    backdrop-filter backdrop-blur-md 
                                    bg-opacity-40 rounded-lg lg:max-w-4xl">
                        <p className="font-medium italic text-gray-50  text-center ">
                            A lagoa Bacopari é uma lagoa situada na planície costeira do Rio Grande do Sul, no litoral norte médio.<br/>
                            <br/>
                            Este corpo hídrico está localizado no distrito de Bacopari, no município de Mostardas, e é um importante
                            reservatório de água doce.<br/>
                            <br/>
                            Suas águas servem para irrigação de lavoura orizícola e compõe a beleza cênica da planície.
                        </p>   
                    </div> 

                    <button type="button"
                            className="w-60 h-12 m-auto
                                    rounded-lg text-white
                                    transform hover:bg-blue-200 hover:bg-opacity-30
                                    hover:shadow-lg hover:scale-110
                                    transition ease-in-out duration-300
                                    bg-gradient-to-r from-greenLight to-blueDark">
                        <a href="https://goo.gl/maps/Han9XWWpjW74Py3U6">Trace sua Rota</a>
                    </button>

                    <section className="h-96 w-full mx-auto md:w-5/6  ">
                        <GoogleMaps/>
                    </section>

                </div>
            </div>
           <Footer/>
        </>
    )
}

export default Location
