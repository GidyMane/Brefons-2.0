"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaCaretDown } from 'react-icons/fa';

const navs = [
  {
    options: [
      {
        title: "Component",
        sub: "All",
      }
    ]
  },
  {
    options: [{
      title: "Projects",
      sub: "All"
    }]
  },
  {
    options: [
      {
        title: "Map",
        sub: "All"
      }
    ]
  }
];

const TopCardNavigation = () => {
  const handleOptionSelect = (option) => {
    console.log("Selected Option:", option);
  };

  return (
    <div className="md:grid grid-cols-3 gap-4 w-full">
      {navs.map((nav, index) => (
        <div key={index} className="col-span-1 my-2 relative bg-white dark:bg-white rounded-full flex flex-row justify-between items-center gap-4 px-3 py-2">
        

            <select
              className="bg-transparent border-none w-full focus:outline-none text-black"
              onChange={(e) => handleOptionSelect(nav.options.find(option => option.title === e.target.value))}
            >
              {nav.options.map((option, index) => (
                <option key={index} value={option.title} className='bg-transparent'>{option.title}: <span className='font-bold'>{option.sub}</span></option>
              ))}
            </select>
        </div>
      ))}
    </div>
  );
};

export default TopCardNavigation;
