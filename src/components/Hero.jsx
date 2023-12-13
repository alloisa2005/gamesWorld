'use client'
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-full h-[440px] relative">
        <Image
          src={"/images/bg.jpg"}
          alt="Hero Image"
          width={1200}
          height={500}
          priority
          className="w-full h-full object-cover"
        />
        
        <div className="absolute top-0 left-0 h-full w-full flex flex-col items-end justify-center px-8 md:px-32 font-montserrat bg-gradient-to-b from-black to-transparent">
          <h2 className="text-white text-right text-3xl lg:text-5xl italic">Bienvenidos a</h2>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-red-400">GamesWorld</h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[30px] bg-gradient-to-t from-black to-transparent"></div>
      </div>      
    </>
  );
};

export default Hero;

/*
<div           
          className=" font-montserrat absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black to-transparent flex justify-center items-center">
          <h1 className="text-white text-right text-3xl lg:text-5xl italic w-full">
            Welcome to{" "}
            <span className="text-4xl font-bold lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-red-400">
              GamesWorld
            </span>
          </h1>
        </div>
*/