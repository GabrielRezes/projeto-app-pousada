import React from 'react';

//component
import Footer from '../components/Footer/Footer';

const Gallery = () => {
    return (
        <div  className="min-h-screen bg-gradient-to-t from-gray-200 to-gray-50  ">   
            <ul className="h-full container mx-auto grid grid-cols-1 gap-5 mb-5  sm:grid-cols-2 md:grid-cols-3 sm:p-8">
                <li className="flex items-center justify-center w-full h-52 bg-white border-8 border-gray-200 rounded-lg shadow-md">Imagem</li>
                <li className="flex items-center justify-center w-full h-52 bg-white border-8 border-gray-200 rounded-lg shadow-md">Imagem</li>
                <li className="flex items-center justify-center w-full h-52 bg-white border-8 border-gray-200 rounded-lg shadow-md">Imagem</li>
                <li className="flex items-center justify-center w-full h-52 bg-white border-8 border-gray-200 rounded-lg shadow-md">Imagem</li>
                <li className="flex items-center justify-center w-full h-52 bg-white border-8 border-gray-200 rounded-lg shadow-md">Imagem</li>
                <li className="flex items-center justify-center w-full h-52 bg-white border-8 border-gray-200 rounded-lg shadow-md">Imagem</li>
                <li className="flex items-center justify-center w-full h-52 bg-white border-8 border-gray-200 rounded-lg shadow-md">Imagem</li>
                <li className="flex items-center justify-center w-full h-52 bg-white border-8 border-gray-200 rounded-lg shadow-md">Imagem</li>
                <li className="flex items-center justify-center w-full h-52 bg-white border-8 border-gray-200 rounded-lg shadow-md">Imagem</li>
                <li className="flex items-center justify-center w-full h-52 bg-white border-8 border-gray-200 rounded-lg shadow-md">Imagem</li>
                <li className="flex items-center justify-center w-full h-52 bg-white border-8 border-gray-200 rounded-lg shadow-md">Imagem</li>
                <li className="flex items-center justify-center w-full h-52 bg-white border-8 border-gray-200 rounded-lg shadow-md">Imagem</li>
            </ul>
        <Footer/>
        </div>    
    )
}

export default Gallery
