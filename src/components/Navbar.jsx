import {Link} from "react-router-dom";
import {BiMenuAltRight} from "react-icons/bi"
import {AiOutlineClose} from 'react-icons/ai'
import {BsMoonStarsFill} from "react-icons/bs";
import {MdLightMode} from 'react-icons/md'
import {useState} from "react";
import Logo from '../assets/img/tp-high-resolution-color-logo.png'
import {motion} from "framer-motion";

const Navbar = () => {
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }
    const darkHandler = ()=>{
        setDark(!dark)
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }

            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    }
    const [dark,setDark] = useState(true)
    const [open,setOpen] = useState(true);
    const homeGoHandler = ()=>{
        window.scroll(0,0)
    }
    return(
        <motion.nav
            initial={{ opacity: 0,y:-300}}
            transition={{ duration: 0.5}}
            animate={{ y: 0,opacity:1 }}
            className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
            <div className="container flex flex-wrap shadow-md items-center justify-between mx-auto bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <Link to='/'  onClick={homeGoHandler} className="flex items-center">
                    <img src={Logo} className="h-6 mr-3 sm:h-9"
                         alt="Logo"/>
                    <span
                        className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Typle X
                    </span>
                </Link>
                <div className="flex md:order-2">
                    <button  type="button" onClick={darkHandler}
                             className="mr-2 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        {dark?<MdLightMode className='text-xl'/>:<BsMoonStarsFill className='text-xl'/>}
                    </button>
                    <button  type="button" onClick={()=>setOpen(!open)}
                             className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        {open?<BiMenuAltRight className='text-3xl'/>:<AiOutlineClose className='text-3xl'/>}
                    </button>
                </div>
                <div className={`items-center justify-between ${open?"hidden":"block"} w-full md:flex md:w-auto md:order-1`}
                     id="navbar-cta">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 uppercase">
                        <li onClick={()=>setOpen(true)}>
                            <a href="#home"
                               className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 before:hidden before:md:inline-block before:w-[10px] before:h-[0.1rem] dark:before:bg-white flex flex-col-reverse items-start md:items-center before:translate-y-[800%]  hover:before:translate-y-0 overflow-y-hidden before:transition-transform before:duration-500 before:bg-gray-700">Home</a>
                        </li>
                        <li onClick={()=>setOpen(true)}>
                            <a href="#about"
                               className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 before:hidden before:md:inline-block before:w-[10px] before:h-[0.1rem] dark:before:bg-white flex flex-col-reverse items-start md:items-center before:translate-y-[800%]  hover:before:translate-y-0 overflow-y-hidden before:transition-transform before:duration-500 before:bg-gray-700">About</a>
                        </li>
                        <li onClick={()=>setOpen(true)}>
                            <a href="#services"
                               className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 before:hidden before:md:inline-block before:w-[10px] before:h-[0.1rem] dark:before:bg-white flex flex-col-reverse items-start md:items-center before:translate-y-[800%]  hover:before:translate-y-0 overflow-y-hidden before:transition-transform before:duration-500 before:bg-gray-700">Services</a>
                        </li>
                        <li onClick={()=>setOpen(true)}>
                            <a href="#projects"
                               className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 before:hidden before:md:inline-block before:w-[10px] before:h-[0.1rem] dark:before:bg-white flex flex-col-reverse items-start md:items-center before:translate-y-[800%]  hover:before:translate-y-0 overflow-y-hidden before:transition-transform before:duration-500 before:bg-gray-700">Projects</a>
                        </li>
                        <li onClick={()=>setOpen(true)}>
                            <a href="#contact"
                               className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 before:hidden before:md:inline-block before:w-[10px] before:h-[0.1rem] dark:before:bg-white flex flex-col-reverse items-start md:items-center before:translate-y-[800%]  hover:before:translate-y-0 overflow-y-hidden before:transition-transform before:duration-500 before:bg-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.nav>
    )
}
export default Navbar