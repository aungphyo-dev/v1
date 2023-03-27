import {motion} from "framer-motion";
import AboutPic from '../assets/img/photo_2023-03-22_15-46-04.jpg'
import {BiSupport} from 'react-icons/bi'
import {TfiBag} from 'react-icons/tfi'
import {GiTargetPrize} from 'react-icons/gi'
const About = () => {
    return (
        <>
            <section className='bg-white dark:bg-gray-900 pt-[80px]  lg:pt-0' id='about'>
                <div className='min-h-screen container mx-auto flex justify-center items-center flex-wrap px-3'>
                    <div>
                        <div className='w-full  text-center'>
                            <motion.div
                                initial={{ opacity: 0,y:200}}
                                transition={{ duration: 0.5}}
                                whileInView={{ opacity: 1,y:0  }}
                                className='text-center w-full my-5'>
                                <h1 className='text-md text-gray-800 dark:text-gray-400 mb-2'>My abilities</h1>
                                <h1 className='text-xl text-blue-600 font-bold text-2xl'>My Experience</h1>
                            </motion.div>
                        </div>
                        <div className='w-full flex items-center lg:items-start flex-wrap flex-col-reverse lg:flex-row'>
                            <motion.div initial={{ opacity: 0,y:300}}
                                        transition={{ duration: 0.7}}
                                        whileInView={{ opacity: 1,y:0  }}
                                        className='w-full lg:w-[35%] text-white'>
                                <img src={AboutPic} className='h-auto w-full  rounded-xl lg:h-[350px] mx-auto lg:w-[500px] object-cover obj-po' alt=""/>
                            </motion.div>
                            <div
                                        className='w-full lg:w-[65%] p-0 lg:pl-5 flex md:flex-col flex-col-reverse'>
                                <div className='flex items-center lg:justify-start justify-center flex-wrap gap-x-3 gap-y-3 mb-4'>
                                    <motion.div
                                        initial={{ opacity: 0,y:300}}
                                        transition={{ duration: 0.5}}
                                        whileInView={{ opacity: 1,y:0  }}
                                        className="w-full md:w-auto p-6 dark:bg-gray-700 bg-gray-100 rounded-lg">
                                        <div className="mb-5">
                                            <svg
                                                className="hi-outline hi-template inline-block w-12 h-12 text-indigo-500"
                                                stroke="currentColor" fill="none" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold mb-2 dark:text-gray-300">
                                            Projects
                                        </h3>

                                        <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                                            Completed 20+
                                        </p>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0,y:300}}
                                        transition={{ duration: 0.5}}
                                        whileInView={{ opacity: 1,y:0  }}
                                        className="w-full md:w-auto p-6 dark:bg-gray-700 bg-gray-100 rounded-lg">
                                        <div className="mb-5">
                                            <svg className="hi-outline hi-cube inline-block w-12 h-12 text-indigo-500"
                                                 stroke="currentColor" fill="none" viewBox="0 0 24 24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                                            </svg>
                                        </div>

                                        <h3 className="text-lg font-bold mb-2 dark:text-gray-300">
                                            Features
                                        </h3>

                                        <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                                            User friendly design
                                        </p>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0,y:300}}
                                        transition={{ duration: 0.5}}
                                        whileInView={{ opacity: 1,y:0  }}
                                        className="w-full md:w-auto p-6 dark:bg-gray-700 bg-gray-100 rounded-lg">

                                        <div className="mb-5">

                                            <svg className="hi-outline hi-cog inline-block w-12 h-12 text-indigo-500"
                                                 stroke="currentColor" fill="none" viewBox="0 0 24 24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>

                                        </div>

                                        <h3 className="text-lg font-bold mb-2 dark:text-gray-300">
                                            Services
                                        </h3>

                                        <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                                            Deploy & maintain
                                        </p>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0,y:300}}
                                        transition={{ duration: 0.5}}
                                        whileInView={{ opacity: 1,y:0  }}
                                        className="w-full md:w-auto p-6 dark:bg-gray-700 bg-gray-100 rounded-lg">

                                        <div className="mb-5">

                                            <svg
                                                className="hi-outline hi-sparkles inline-block w-12 h-12 text-indigo-500"
                                                stroke="currentColor" fill="none" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                                            </svg>

                                        </div>

                                        <h3 className="text-lg font-bold mb-2 dark:text-gray-300">
                                            Experience
                                        </h3>

                                        <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                                            Junior level
                                        </p>

                                    </motion.div>
                                </div>

                                <div className='mb-4 flex flex-col lg:justify-center items-center  lg:items-start'>
                                    <motion.p
                                        initial={{ opacity: 0,y:300}}
                                        transition={{ duration: 0.5}}
                                        whileInView={{ opacity: 1,y:0  }}
                                        className='w-full md:w-3/4 mx-auto lg:mx-0 text-xl text-start text-gray-700 dark:text-gray-300  leading-8 tracking-wide pb-5 pt-3 px-3'>I'm a junior website developer with experience in
                                        JavaScript, and expertise in framework like React.</motion.p>
                                    <a href='#contact'
                                       className="md:block hidden text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Contact Me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About