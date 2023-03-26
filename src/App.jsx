import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Projects from "./components/Projects.jsx";


const App = () => {
    return(
        <>
            <Navbar/>
            <Home/>
            <About/>
            <Services/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    )
}
export default App