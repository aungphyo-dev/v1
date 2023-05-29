// noinspection SpellCheckingInspection

import {Link} from "react-router-dom";

const Footer = () => {
    return(

        <footer
            className="w-full p-4 bg-footer border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600 gap-y-4">
    <span className="text-sm text-black sm:text-center dark:text-gray-400">© 2023 <Link to='/'
                                                                                        className="hover:underline">Typle™</Link>. All Rights Reserved.
    </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-black dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#about" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                </li>
                <li>
                    <a href="#contact" className="hover:underline">Contact</a>
                </li>
            </ul>
        </footer>

    )
}
export default Footer