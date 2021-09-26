import React, { useState, useEffect } from 'react'

// helpers/Categories/images
import { 
    ambience,
    sharedArea, 
    bedRooms,
} from '../../helpers/CarouselData';

const Carousel = ({ category }) => {
    const [ currCategory, setCurrCategory ] = useState(null)
    const [currImg, setCurrImg ] = useState(0)

    useEffect(() => {
        if( category === 'sharedArea') return setCurrCategory(sharedArea); 
        if(category === 'bedRooms') return setCurrCategory(bedRooms);
        return setCurrCategory(ambience)
    }, [category])

    const handleChangeImg = ({ target }) => {
        if(target.id === 'left') {
            currImg > 0 && setCurrImg(currImg - 1)
            return
        } 
        if(target.id === 'right') {
            currImg < currCategory.length -1 && setCurrImg(currImg + 1) 
            return
           
        }
    }; 

    return (
        <div className="w-full h-2/4 mt-10 mx-auto xl:mt-0 col-start-2 col-span-3 cursor-pointer">
            { currCategory !== null &&
                <div className="flex h-full w-full">

                    <div className="relative h-72 w-11/12 mx-auto flex justify-between items-center
                                    sm:w-10/12 sm:h-80
                                    md:w-9/12 md:h-96
                                    xl:w-8/12 
                                  bg-red-200">

                        <div className="absolute top-28
                                        md:top-36
                                        rounded-r-xl
                                      bg-gray-200 bg-opacity-60 "
                             onClick={handleChangeImg}>

                            <svg xmlns="http://www.w3.org/2000/svg" id="left" className="h-20 w-12 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                        
                        <img className="w-full h-full rounded-2xl border-4 "
                             src={currCategory[currImg].img} alt='' />
                   
                        <div className="absolute fixed top-28 right-1
                                        md:top-36
                                        rounded-l-xl
                                      bg-gray-200 bg-opacity-60 "
                             onClick={handleChangeImg}>

                            <svg xmlns="http://www.wa3.org/2000/svg" id="right" className="h-20 w-12 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    
                    </div>

                </div>
            }
        </div>
    )
}

export default Carousel
