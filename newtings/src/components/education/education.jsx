import React from "react";
import education2 from "../../assets/education2.png";

export default function Education() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden flex flex-col text-gray-600 body-font"
    >
      {/* Background Gradient Effects */}
      <div className="absolute top-[100px] left-64 inset-x-0 flex items-start justify-center">
        <div className="h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl invisible opacity-40 rounded-full"></div>
        <div className="h-96 w-96 bg-gradient-to-r from-[#ffdb12] opacity-40 blur-2xl rounded-full"></div>
      </div>

      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Education Image Section */}
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0"
        >
          <div className="md:h-[450px] h-[400px] md:w-[300px] w-[300px] md:right-36 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(225,165,0,0.7)] z-0"></div>
          <img
            src={education2}
            className="object-cover md:w-[300px] md:h-[450px] object-center rounded relative z-10"
            alt="Education"
          />
        </div>

        {/* Education Content Section */}
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500">
            Education 🎓
          </h1>

          {/* Yearly Education Details */}

          <div className="text-white">
             {/* Honors Degree Info */}

             <h2 className="title-font font-bold sm:text-2xl">
              Durban University of Technology
            </h2>
            <span className="font-semibold">Jan 2023 - Dec 2023</span>

            <p className="leading-relaxed">
              <span className="font-semibold">
                Advanced Diploma in Information & Communications Technology
              </span>
              <br />
              <span className="font-semibold">Key Focus Areas: </span>
            
                Cloud Computing || Advanced Data Analytics || Advanced Cybersecurity ||
                Advanced Software Development & Management || Global & Professional Practice
              
            </p>
            <br></br>

              {/* Advanced Diploma Information */}

            <h2 className="title-font font-bold sm:text-2xl">
              Durban University of Technology
            </h2>
            <span className="font-semibold">Jan 2022 - Dec 2022</span>

            <p className="leading-relaxed">
              <span className="font-semibold">
                Advanced Diploma in Information & Communications Technology
              </span>
              <br />
              <span className="font-semibold">Key Focus Areas: </span>
            
              Data Structures || Basic Mathematics for Computing ||
              Business Intelligent || Platform Base Development
              
            </p>
            <br></br>

            {/* Diploma Information */}

            <h2 className="title-font font-bold sm:text-2xl">
              Durban University of Technology
            </h2>
            <span className="font-semibold">Jan 2018 - Dec 2021</span>

            <p className="leading-relaxed">
              <span className="font-semibold">
                Diploma in Information & Communications Technology: Applications
                Development
              </span>
              <br />
              <span className="font-semibold">Key Focus Areas: </span>
            
                Object-Oriented Programming (OOP),      
                Agile Methodology,
                System Design & Development,
                Model-View-Controller (MVC) Architecture,
                Databases,
                Operating Systems,
                Human-Computer Interaction (HCI),
                Mobile Computing
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
