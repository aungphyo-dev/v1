// noinspection ES6UnusedImports,SpellCheckingInspection

// import Heropic from '../assets/img/preview.png';
import {BiMouse,} from 'react-icons/bi'
import {BsGithub} from 'react-icons/bs'
import {FaLinkedin, FaFacebookSquare, FaYoutubeSquare, FaYoutube} from 'react-icons/fa'
import { motion } from "framer-motion"
import {easeIn} from "framer-motion/dom";
import ReactTypingEffect from 'react-typing-effect';
import {AiOutlineArrowDown} from 'react-icons/ai'
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";



const Home = () => {
    return(
        <>
            <Hero/>
            <About/>
            <Services/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    )
}
export default Home