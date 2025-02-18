"use client";
import React from "react";

const BannerVideo = () => {
  return (
    <section className="relative w-full h-96 overflow-hidden">
      {/* Background Video */}
      <video
        src="https://res.cloudinary.com/dv8rcegbk/video/upload/v1739795853/banner-video_illfvt.mp4"
        muted
        autoPlay
        loop
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay with Blur Effect */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div> {/* Apply blur here */}

      {/* Your Content */}
      <section className="relative pt-16 text-center mt-10">
              <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-white" 
                data-aos="fade-up"
                >
                  Welcome to Emergent Software Solutions
                  {/* <span className="block text-white">Emergent Software Solutions </span> */}
                </h1>
                <p className="mt-4 text-lg text-white" 
                data-aos="fade-down"
                >
                  Founded in 2009, EmergentSoft offers tailored digital
                  communications solutions and unique graphic design.
                </p>
                <div className="mt-6 flex justify-center gap-4">
                  <a
                    href="#"
                    className="bg-[#174886] text-white px-6 py-2 rounded-lg"
                    data-aos="fade-left"
                  >
                    Get Started
                  </a>
                  <a
                    href="../Contact"
                    className="border border-blue-600 text-white px-6 py-2 rounded-lg"
                    data-aos="fade-right"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </section>
    </section>
  );
};

export default BannerVideo;
