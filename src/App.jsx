import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Projects from "./components/Projects.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Error from "./components/Error.jsx";


const App = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App