import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

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