import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {easeIn} from "framer-motion/dom";

const Card = ({project})=>{
    return(
        <motion.div
            initial={{ opacity: 0,y:200}}
            transition={{ duration: 0.5 ,delay:0.2,velocity:easeIn}}
            whileInView={{ opacity: 1,y:0  }}
            className='px-3 w-full lg:w-2/4 '>
            <div
                className=" w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="p-3 pt-5 rounded-t-lg" src={project.img} alt="product image"/>
                <div className="px-3 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                    </a>
                    <div className="mt-2.5 mb-3 flex flex-wrap gap-y-2">
                        {project.skills.map((skill)=><span key={skill} className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      {skill}
                    </span>)}
                    </div>
                    <div className="flex items-center">
                        <Link to={project.url} target="_blank"
                           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Live Demo</Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default Card