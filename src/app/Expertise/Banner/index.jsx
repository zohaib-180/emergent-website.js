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
      <section className="relative pt-16 text-center">
              <div className="container mx-auto px-4 mt-10">
                <h1 className="text-4xl font-bold text-white" 
                data-aos="fade-up"
                >
                  <span className="block text-white">Expertise and Skills</span>
                </h1>
                <p className="mt-4 text-lg text-white" 
                data-aos="fade-down"
                >
                  Emergent Software Solutions has diversified team of professionals who have got <br></br> expertise in different tools and technologies over the past years.
                </p>
              </div>
            </section>
    </section>
  );
};

export default BannerVideo;
