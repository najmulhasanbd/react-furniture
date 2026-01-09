import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaShoppingBasket } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const navitems = [
    { path: '/', label: 'Furniture' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
]
const NavItem = ({ toggleMenu }) => {
    return (
        <ul className='flex gap-3 flex-col md:flex-row'>
            {
                navitems.map(item => (
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500 font-bold"
                                : "hover:text-blue-500 font-bold"
                        }
                        key={item.path}
                        to={item.path}
                        onClick={toggleMenu}
                    >
                        {item.label}
                    </NavLink>
                ))
            }
        </ul>
    )
}

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const toggleMenu = () => (
        setIsMenuOpen(!isMenuOpen)
    )

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.addEventListener('scroll', handleScroll);
        }
    })



    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out  ${isScrolled ? 'bg-white text-black':'text-white bg-transparent'}`}>
            <nav className='container mx-auto flex items-center justify-between p-4'>
                <Link to="/">Logo</Link>

                {/* mobile */}
                <div onClick={toggleMenu} className='md:hidden cursor-pointer transition-all duration-300  hover:text-blue-500'>
                    {
                        isMenuOpen ? null : <FaBars />
                    }
                </div>

                {/* desktop */}
                <div className='hidden md:flex'>
                    <NavItem />
                </div>

                {/* mobile menu overlay and drawer */}
                {isMenuOpen && (
                    <div className='fixed inset-0 bg-black/50 md:hidden' onClick={toggleMenu}></div>
                )}

                <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className='flex items-center justify-between p-4 border-b'>
                        <h2 className='font-bold text-lg'>Menu</h2>
                        <div onClick={toggleMenu} className='cursor-pointer text-2xl hover:text-blue-500'>
                            <IoMdClose />
                        </div>
                    </div>
                    <div className='p-4'>
                        <NavItem toggleMenu={toggleMenu} />
                    </div>
                </div>

                <div className='hidden md:block relative'>
                    <FaShoppingBasket className='text-xl' />
                    <sup
                        className='absolute -top-3 bg-amber-400 -right-1 w-4 h-4 rounded-2xl z-20 flex items-center justify-center'>0</sup>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
