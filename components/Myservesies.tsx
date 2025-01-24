import React from "react";

export default function MyServices() {
  return (
    <section
      className="services py-24 container mx-auto text-white"
      id="services"
    >
      <div
        className="text-center mb-16"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h2 className="text-5xl font-extrabold mb-4 text-purple">
          My Services
        </h2>
        <h4 className="text-xl font-light text-gray-400">
          Better Experience, Greater Impact
        </h4>
      </div>

      {/* الخدمات */}
      <div className="services-content flex flex-col sm:flex-row items-center justify-center gap-12 px-6 sm:px-8 lg:px-16">
       

        {/* Front-End Developer */}
        <div
          className="box bg-white text-white shadow-2xl rounded-2xl p-10 hover:transform hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out group"
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-duration="1500"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-purple-600 text-white rounded-full group-hover:bg-purple-500 transition-colors duration-300">
              <i className="fas fa-code text-3xl"></i>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-purple">
            Front-End Developer
          </h3>
          <p className="text-black font-bold opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            I create dynamic and interactive user interfaces, ensuring seamless
            experience using modern frameworks and libraries.
          </p>
        </div>
      </div>
    </section>
  );
}
