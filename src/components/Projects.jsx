import projects from "../js/projects.js";
import Card from "./Card.jsx";

const Projects = () => {
    return (
        <>
            <section id='projects'  className='min-h-screen pt-[80px] bg-white dark:bg-gray-900'>
                <div className='container mx-auto flex flex-wrap gap-y-4 '>
                    <div className='text-center w-full pb-5'>
                        <h1 className='text-gray-700 dark:text-white text-2xl font-bold uppercase'>My projects</h1>
                    </div>
                    {projects.map((project)=> <Card key={project.id} project={project}/> )}
                </div>
            </section>
        </>
    )
}
export default Projects
