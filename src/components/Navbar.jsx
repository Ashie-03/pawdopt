import logo from '../assets/logo.png';
import { navLinks } from "../constants/index";
import Button from "./Button";
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full text-secondary flex justify-between items-center">
            <img src={ logo } alt="Pawdopt Logo" className="h-8"/>

            <div className='flex space-x-4'>
            <Button ctaText={'ADOPT NOW'} ctaLink='#contact' className="md:hidden"/>
              <button className="md:hidden" onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
                {isMenuOpen ? "X" : "☰"}
              </button>
            </div>

            {isMenuOpen && (
              <div className='absolute top-0 left-0 w-full h-screen flex flex-col items-center bg-secondary text-primary md:hidden'>
                <button className="md:hidden absolute right-10" onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
                {isMenuOpen ? "X" : "☰"}
                </button>
                { navLinks.map((link) => {
                  return (
                    <a key={link.label} href={`${link.href}`} className='p-2'>{ link.label }</a>
                  )})}
              </div>
            )}


            <ul className="w-[30%] justify-between hidden md:flex space-x-6">
            {
              navLinks.map((link) => {
                return (
                  <li key={link.label}  className="px-1 py-[2px] rounded-md hover:text-primary hover:bg-secondary">
                    <a href={`${link.href}`}>{ link.label }</a>
                  </li>
                )
              })}
            </ul>  
            <Button ctaText={'ADOPT NOW'} ctaLink='#contact' className='hidden md:block'/>
        </nav>
    )
};

export default Navbar;