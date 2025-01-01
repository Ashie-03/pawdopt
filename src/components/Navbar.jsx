import logo from '../assets/logo.png';
import { navLinks } from "../constants/index";
import Button from "./Button";
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full text-secondary flex justify-between items-center">
            <img src={ logo } alt="Pawdopt Logo" className="h-10"/>

            <div className='flex space-x-4'>
            <Button ctaText={'ADOPT NOW'} ctaLink='#contact' className="md:hidden"/>
              <button className="md:hidden text-2xl" onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
                {isMenuOpen ? "X" : "☰"}
              </button>
            </div>

            {isMenuOpen && (
              <div className='absolute top-0 left-0 w-full h-screen flex flex-col items-center bg-secondary text-primary md:hidden text-2xl p-4'>
                <button className="md:hidden absolute right-10 border-2 p-2 border-primary" onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
                {isMenuOpen ? "X" : "☰"}
                </button>
                { navLinks.map((link) => (
                  <HashLink
                  key={link.label}
                  smooth
                  to={link.href}
                  className="mt-12 z-20 hover:text-secondary hover:bg-primary px-4 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </HashLink>))}
              </div>
            )}


            <ul className="w-[30%] justify-between text-xl hidden md:flex space-x-8">
            {
              navLinks.map((link) => (
                  <li key={link.label}>
                    <HashLink smooth to={link.href} className="px-1 py-[2px] rounded-md hover:text-primary hover:bg-secondary">
                      {link.label}
                    </HashLink>
                  </li>
                ))}
            </ul>  
            <Button ctaText={'ADOPT NOW'} ctaLink='#contact' className='hidden md:block text-xl'/>
        </nav>
    )
};

export default Navbar;