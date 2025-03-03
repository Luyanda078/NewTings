import React from 'react'
import img_experience from '../../assets/img_experience.png'

export default function Experience() {
  return (

    <section id='experience' className='relative overflow-hidden flex flex-col text-gray-600 body-font'>
        <div className='absolute top-[100px] left-64 inset-x-0 flex items-start justify-center'>
            <div className='h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl invisible opacity-40 rounded-full'></div>
            <div className='h-96 w-96 bg-gradient-to-r from-[#ffdb12] opacity-40 blur-2xl rounded-full'></div>
        </div>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
            <div data-aos='fade-right' data-aos-delay='400' className='relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0'>
             <div className='md:h-[450px] h-[400px] md:w-[300px] w-[300px] md:right-36 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(225,165,0,0.7)] z-0'></div>
            <img src={img_experience} className='object-cover md:w-[300px] md:h-[450px] object-center rounded relative z-10' alt="Experience" />
            </div>
        <div data-aos='fade-left' data-aos-delay='400' className='lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center '>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500 '>Experience</h1>
            

              {/*CodeTribe info*/}
            <h2 className="title-font font-bold sm:text-2xl text-white">
              CodeTribe Solutions Develper Trainee
            </h2>
            <span className="font-semibold text-white"> mLab Southern Africa</span>

            <p className="leading-relaxed text-white">
              <span className="font-semibold">
                Jul 2024 - Present
              </span>
              <br />
              <span className="font-semibold">Job Description: </span>
            
              Collaborate on defining and developing mobile and web solutions while learning application development.
              
            </p>
            <br></br>

            {/*AfricaLearn info*/}
            <h2 className="title-font font-bold sm:text-2xl text-white">
            Microsoft Cloud Trainee
            </h2>
            <span className="font-semibold text-white"> Africalearn (Afrikka Tikkun) | Hybrid Training Program</span>

            <p className="leading-relaxed text-white">
              <span className="font-semibold">
              Jun 2024 - Nov 2024
              </span>
              <br />
              <span className="font-semibold">Description: </span>
            
              I completed a structured training program at Africalearn under Afrikka Tikkun, an accredited institution providing industry-aligned Microsoft certification training.
              
            </p>
            <br></br>
            
            <br></br>
            <h2 className="title-font font-bold sm:text-2xl text-white">
            CodeTribe Tribe Academy
            </h2>
            <span className="font-semibold text-white"> mLab Southern Africa </span>

            <p className="leading-relaxed text-white">
              <span className="font-semibold">
               April 2024 - May 2024
              </span>
              <br />
              <span className="font-semibold">Job Description: </span>
            
              Web development bootcamp at the CodeTribe Academy hosted by MLab. Programme provided introduction to Web development, specifically focusing on HTML, CSS, and JavaScript.
              
            </p>
            <br></br>
            
    
           
        </div>
        </div>
    </section>

  )
}
