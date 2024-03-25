import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Data Engineer", "Data scientist ", "Backend Developer","Machine learning Engineer "],
      loop: true,
      typeSpeed: 90,
      deleteSpeed: 80,
      delaySpeed: 1000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Harish Venugopal </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I'm a Microsoft Certified Data Engineer who's been diving headfirst into the data universe for over a year now.
         Picture this: part mad scientist, part data wizard, and all-around tech enthusiast.
        While others were busy decoding memes, I was busy deciphering complex data sets like a champ. 
        My superpower? Turning raw data into gold... or at least into actionable insights that make stakeholders go,
         "Wow, that's some serious data-fu!"
        When I'm not wrangling with data, you can catch me brainstorming new ways to make algorithms dance or
         debating whether Excel is a superhero or a supervillain in disguise.
        
       
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner