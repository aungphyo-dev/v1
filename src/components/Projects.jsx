import projects from "../js/projects.js";
import Card from "./Card.jsx";
import {motion} from "framer-motion";

const Projects = () => {
    return (
        <>
            <section id='projects'  className='min-h-screen pt-[80px] bg-white dark:bg-gray-900'>
                <div className='container mx-auto flex flex-wrap gap-y-4 '>
                    <div className='text-center w-full pb-5'>
                        <motion.h1
                            initial={{ opacity: 0,y:300}}
                            transition={{ duration: 0.5}}
                            whileInView={{ opacity: 1,y:0  }}
                            className='text-gray-700 dark:text-white text-2xl font-bold uppercase'>My projects</motion.h1>
                    </div>
                    {projects.map((project)=> <Card key={project.id} project={project}/> )}
                </div>
            </section>
        </>
    )
}
export default Projects
