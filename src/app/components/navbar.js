'use client';
import React, { useState } from 'react';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className=" bg-black  py-3">
      <div className="relative">
        {isNavOpen && (
          <ul className="flex flex-col absolute bg-black bg-opacity-50 py-10 px-10 h-screen  text-white">
            <div className="absolute top-0 right-0 p-2">
              <button className="text-white" onClick={() => setIsNavOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <li className="py-2 px-4 justify-center flex">
              <a href="#" className="whitespace-nowrap bg-gray-400 rounded-lg bg-opacity-40 px-32 py-2">
                CRM
              </a>
            </li>
            <li className="py-2 px-4 justify-center flex ">
              <a href="#" className="whitespace-nowrap hover:bg-gray-400 rounded-lg hover:bg-opacity-40  px-10 py-1">
                Liberação de Vistoria
              </a>
            </li>
            <li className="py-2 px-4 justify-center flex">
              <a href="#" className="whitespace-nowrap hover:bg-gray-400 rounded-lg hover:bg-opacity-40 px-10 py-1">
                Relatório de Vistoria
              </a>
            </li>
          </ul>
        )}
        {!isNavOpen && (
          <button
            className="text-white pl-4"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          
        )}
      </div>
    </nav>
  );
}