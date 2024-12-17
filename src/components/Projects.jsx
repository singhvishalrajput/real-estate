import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {

    const [cardsToShow, setCardsToShow] = useState(1);
    
    useEffect(()=>{
        const updateCardsToShow = () =>{
            if(window.innerWidth >= 1024){
                setCardsToShow(projectsData.length);
            }else{
                setCardsToShow(1);
            }   
        }
        updateCardsToShow();
            
        window.addEventListener('resize', updateCardsToShow);
        return ()=> window.removeEventListener('resize', updateCardsToShow);
    }, [])

    

  return (
    <div className='bg-blue-200 min-h-screen container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden ' id='Projects'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>

    {/* Slider buttons */}

    {/* Project Slider container */}
    <div className='overflow-x-auto scrollbar-hide'>
        <div className='flex gap-10  ease-in-out scroll-smooth snap-x snap-mandator'>
            {projectsData.map((project, index)=>(
                <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                    <img src={project.image} alt={project.title} className='w-full h-auto mb-14'/>
                    <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                        <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                            <h2 className='text-xl font-semibold textgray-800'>
                                {project.title}
                            </h2>
                            <p className='text-gray-500 text-sm'>
                                {project.price} <span className='px-1'>|</span> {project.location}
                            </p>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    </div>

    </div>
  )
}

export default Projects
