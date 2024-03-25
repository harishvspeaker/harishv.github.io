import React from 'react';
import { FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import {  SiHackerrank  , SiKaggle,SiLeetcode} from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <a href="https://github.com/harishvspeaker" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/harish-venugopal-970b391bb/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          {/* Replace these URLs with your actual profile or project links */}
          <a href="https://www.hackerrank.com/profile/harishfloat" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <SiHackerrank />
          </a>
          <a href="https://leetcode.com/harish_reddy_/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <SiLeetcode />
          </a>
          
          <a href="https://www.kaggle.com/harishfloat1" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <SiKaggle />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
