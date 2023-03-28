
import {RiCustomerService2Line} from 'react-icons/ri'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {BsFillBootstrapFill,BsGit} from 'react-icons/bs'
import {FaSass,FaLaravel} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {RiReactjsFill} from 'react-icons/ri'
import {SiRedux} from 'react-icons/si'
import {SiPhp} from 'react-icons/si'
import {FcLinux} from 'react-icons/fc'
import {SiMysql,SiMariadb} from 'react-icons/si'
import {motion} from "framer-motion";
import {easeIn} from "framer-motion/dom";

const Services = () => {
    return (
        <>
            <section id='services' className='bg-white dark:bg-gray-900 pt-[80px]'>
                <div className='min-h-screen container mx-auto flex justify-center items-center'>
                    <div className='w-full flex gap-3 p-3 flex-wrap'>
                        <div  className='text-center w-full pb-5'>
                            <motion.h1
                                initial={{ opacity: 0,y:50}}
                                transition={{ duration: 0.5,delay:0.1,velocity:easeIn }}
                                whileInView={{ opacity: 1,y:0  }}
                                className='text-gray-700 dark:text-white text-2xl font-bold uppercase'>Services</motion.h1>
                        </div>
                        <div className='flex justify-evenly items-center w-full flex-wrap gap-y-4'>
                            <motion.div
                                initial={{ opacity: 0,y:50}}
                                transition={{ duration: 0.5,delay:0.1,velocity:easeIn }}
                                whileInView={{ opacity: 1,y:0  }}
                                className="relative bg-white dark:bg-gray-700 py-6 px-6 rounded-3xl w-full md:w-64 my-4 shadow-xl">
                                <div
                                    className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                                <div className="mt-8">
                                    <p className="text-xl font-semibold my-2 dark:text-gray-200">Web Design</p>
                                    <div className="text-gray-400 text-sm">
                                        <p>User friendly design & fully responsive</p>
                                    </div>
                                    <div className="my-3 flex justify-start items-start">
                                        <a href="#contact"
                                           className=" flex justify-center items-start flex-col-reverse dark:text-white text-gray-800  before:w-[80px]  before:inline-block before:h-[0.1rem] overflow-x-hidden before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-500 before:bg-blue-500 hover:text-blue-500 transition-colors duration-500 dark:before:bg-white">Hire
                                            me →</a>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0,y:50}}
                                transition={{ duration: 0.5,delay:0.2,velocity:easeIn }}
                                whileInView={{ opacity: 1,y:0  }}
                                className="relative bg-white dark:bg-gray-700 py-6 px-6 rounded-3xl w-full md:w-64 my-4 shadow-xl">
                                <div
                                    className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                                    </svg>
                                </div>
                                <div className="mt-8">
                                    <p className="text-xl font-semibold my-2 dark:text-gray-200">Web Development</p>
                                    <div className="text-gray-400 text-sm">
                                        <p>I can create dynamic web application</p>
                                    </div>
                                    <div className="my-3 flex justify-start items-start">
                                        <a href="#contact"
                                           className=" flex justify-center items-start flex-col-reverse dark:text-white text-gray-800  before:w-[80px]  before:inline-block before:h-[0.1rem] overflow-x-hidden before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-500 before:bg-blue-500 hover:text-blue-500 transition-colors duration-500 dark:before:bg-white">Hire
                                            me →</a>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0,y:50}}
                                transition={{ duration: 0.5,delay:0.3,velocity:easeIn }}
                                whileInView={{ opacity: 1,y:0  }}
                                className="relative bg-white dark:bg-gray-700 py-6 px-6 rounded-3xl w-full md:w-64 my-4 shadow-xl">
                                <div
                                    className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">
                                    <RiCustomerService2Line className="h-8 w-8"/>
                                </div>
                                <div className="mt-8">
                                    <p className="text-xl font-semibold my-2 dark:text-gray-200">Online support</p>
                                    <div className="text-gray-400 text-sm">
                                        <p>24/7 I'm online</p>
                                        <p>24/7 Message reply</p>
                                    </div>
                                    <div className="my-3 flex justify-start items-start">
                                        <a href="#contact"
                                           className=" flex justify-center items-start flex-col-reverse dark:text-white text-gray-800  before:w-[80px]  before:inline-block before:h-[0.1rem] overflow-x-hidden before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-500 before:bg-blue-500 hover:text-blue-500 transition-colors duration-500 dark:before:bg-white">Hire
                                            me →</a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div  className='text-center w-full pb-5'>
                            <motion.h1
                                initial={{ opacity: 0,y:50}}
                                transition={{ duration: 0.5,delay:0.1,velocity:easeIn }}
                                whileInView={{ opacity: 1,y:0  }}
                                className='text-gray-700 dark:text-white text-2xl font-bold uppercase'>Skills</motion.h1>
                        </div>
                        <div className='w-full flex justify-evenly items-center md:items-start flex-wrap'>
                            <div className="w-full md:w-[35%] p-5 md:py-5 md:px-2">
                                <motion.h1
                                    initial={{ opacity: 0,y:50}}
                                transition={{ duration: 0.5,delay:0.2,velocity:easeIn }}
                                whileInView={{ opacity: 1,y:0  }}
                                    className='font-bold text-xl mb-4 text-center text-gray-800 dark:text-gray-200'>
                                    Frontend Development
                                </motion.h1>
                                <div className='w-full flex justify-between items-center gap-5 flex-wrap'>
                                    <motion.div
                                        initial={{ opacity: 0,y:50}}
                                transition={{ duration: 0.5,delay:0.1,velocity:easeIn }}
                                whileInView={{ opacity: 1,y:0  }}
                                        className='w-full md:w-auto'>
                                        <div className='flex items-center justify-between border-b-[1px] md:border-0 border-gray-400'>
                                            <AiFillHtml5 className='w-10 h-10 text-red-600'/>
                                            <div className='pl-2 font-bold text-sm text-gray-800 dark:text-gray-300 text-right md:text-left gap-0'>
                                                HTML5 <br/>
                                                <span className='text-xs font-normal'>Intermediate</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0,y:50}}
                                transition={{ duration: 0.5,delay:0.1,velocity:easeIn }}
                                whileInView={{ opacity: 1,y:0  }}
                                        className='w-full md:w-auto'>
                                        <div className='flex items-center justify-between border-b-[1px] md:border-0 border-gray-400'>
                                            <DiCss3 className='w-10 h-10 text-[#264de4]'/>
                                            <div className='pl-2 font-bold text-sm text-gray-800 dark:text-gray-300 text-right md:text-left gap-0'>
                                                CSS3 <br/>
                                                <span className='text-xs font-normal'>Intermediate</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0,y:50}}
                                transition={{ duration: 0.5,delay:0.1,velocity:easeIn }}
                                whileInView={{ opacity: 1,y:0  }}
                                        className='w-full md:w-auto'>
                                        <div className='flex items-center justify-between border-b-[1px] md:border-0 border-gray-400'>
                                            <SiJavascript className='w-8 h-8 text-yellow-500'/>
                                            <div className='pl-2 font-bold text-sm text-gray-800 dark:text-gray-300 text-right md:text-left gap-0'>
                                                Javascript <br/>
                                                <span className='text-xs font-normal'>Intermediate</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0,y:50}}
                                transition={{ duration: 0.5,delay:0.1,velocity:easeIn }}
                                whileInView={{ opacity: 1,y:0  }}
                                        className='w-full md:w-auto'>
                                        <div className='flex items-center justify-between border-b-[1px] md:border-0 border-gray-400'>
                                            <FaSass className='w-8 h-8 text-blue-400'/>
                                            <div className='pl-2 font-bold text-sm text-gray-800 dark:text-gray-300 text-right md:text-left gap-0'>
                                                Sass <br/>
                                                <span className='text-xs font-normal'>Intermediate</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0,y:50}}
                                transition={{ duration: 0.5,delay:0.1,velocity:easeIn }}
                                whileInView={{ opacity: 1,y:0  }}
                                        className='w-full md:w-auto'>
                                        <div className='flex items-center justify-between border-b-[1px] md:border-0 border-gray-400'>
                                            <SiTailwindcss className='w-8 h-8 text-blue-400'/>
                                            <div className='pl-2 font-bold text-sm text-gray-800 dark:text-gray-300 text-right md:text-left gap-0'>
                                                Tailwindcss <br/>
                                                <span className='text-xs font-normal'>Advanced</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0,y:50}}
                                transition={{ duration: 0.5,delay:0.1,velocity:easeIn }}
                                whileInView={{ opacity: 1,y:0  }}
                                        className='w-full md:w-auto'>
                                        <div className='flex items-center justify-between border-b-[1px] md:border-0 border-gray-400'>
                                            <RiReactjsFill className='w-8 h-8 text-blue-400'/>
                                            <div className='pl-2 font-bold text-sm text-gray-800 dark:text-gray-300 text-right md:text-left gap-0'>
                                                React JS <br/>
                                                <span className='text-xs font-normal'>Intermediate</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0,y:50}}
                                transition={{ duration: 0.5,delay:0.1,velocity:easeIn }}
                                whileInView={{ opacity: 1,y:0  }}
                                        className='w-full md:w-auto'>
                                        <div className='flex items-center justify-between border-b-[1px] md:border-0 border-gray-400'>
                                            <SiRedux className='w-8 h-8 text-blue-400'/>
                                            <div className='pl-2 font-bold text-sm text-gray-800 dark:text-gray-300 text-right md:text-left gap-0'>
                                                Redux toolkit <br/>
                                                <span className='text-xs font-normal'>Basic</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="w-full md:w-[35%] p-5 md:py-5 md:px-2">
                                <motion.h1
                                    initial={{ opacity: 0,y:50}}
                                transition={{ duration: 0.5,delay:0.1,velocity:easeIn }}
                                whileInView={{ opacity: 1,y:0  }}
                                    className='font-bold text-xl mb-4 text-center text-gray-800 dark:text-gray-200'>
                                    Backend Development
                                </motion.h1>
                                <div className='w-full flex justify-between items-center gap-5 flex-wrap'>
                                    <motion.div
                                        initial={{ opacity: 0,y:50}}
                                transition={{ duration: 0.5,delay:0.1,velocity:easeIn }}
                                whileInView={{ opacity: 1,y:0  }}
                                        className='w-full md:w-auto'>
                                        <div className='flex items-center justify-between border-b-[1px] md:border-0 border-gray-400'>
                                            <SiPhp className='w-10 h-10 text-blue-400'/>
                                            <div className='pl-2 font-bold text-sm text-gray-800 dark:text-gray-300 text-right md:text-left gap-0'>
                                                PHP <br/>
                                                <span className='text-xs font-normal'>Basic</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0,y:50}}
                                transition={{ duration: 0.5,delay:0.1,velocity:easeIn }}
                                whileInView={{ opacity: 1,y:0  }}
                                        className='w-full md:w-auto'>
                                        <div className='flex items-center justify-between border-b-[1px] md:border-0 border-gray-400'>
                                            <FaLaravel className='w-7 h-8 text-red-400'/>
                                            <div className='pl-2 font-bold text-sm text-gray-800 dark:text-gray-300 text-right md:text-left gap-0'>
                                                Laravel <br/>
                                                <span className='text-xs font-normal'>Basic</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0,y:50}}
                                transition={{ duration: 0.5,delay:0.1,velocity:easeIn }}
                                whileInView={{ opacity: 1,y:0  }}
                                        className='w-full md:w-auto'>
                                        <div className='flex items-center justify-between border-b-[1px] md:border-0 border-gray-400'>
                                            <SiMysql className='w-10 h-10 text-red-500'/>
                                            <div className='pl-2 font-bold text-sm text-gray-800 dark:text-gray-300 text-right md:text-left gap-0'>
                                                My SQL <br/>
                                                <span className='text-xs font-normal'>Basic</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0,y:50}}
                                transition={{ duration: 0.5,delay:0.1,velocity:easeIn }}
                                whileInView={{ opacity: 1,y:0  }}
                                        className='w-full md:w-auto'>
                                        <div className='flex items-center justify-between border-b-[1px] md:border-0 border-gray-400'>
                                            <SiMariadb className='w-8 h-8 text-yellow-500'/>
                                            <div className='pl-2 font-bold text-sm text-gray-800 dark:text-gray-300 text-right md:text-left gap-0'>
                                                MariaDB <br/>
                                                <span className='text-xs font-normal'>Basic</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0,y:50}}
                                transition={{ duration: 0.5,delay:0.1,velocity:easeIn }}
                                whileInView={{ opacity: 1,y:0  }}
                                        className='w-full md:w-auto'>
                                        <div className='flex items-center justify-between border-b-[1px] md:border-0 border-gray-400'>
                                            <BsGit className='w-8 h-8 text-red-600'/>
                                            <div className='pl-2 font-bold text-sm text-gray-800 dark:text-gray-300 text-right md:text-left gap-0'>
                                                Git <br/>
                                                <span className='text-xs font-normal'>Intermediate</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0,y:50}}
                                transition={{ duration: 0.5,delay:0.1,velocity:easeIn }}
                                whileInView={{ opacity: 1,y:0  }}
                                        className='w-full md:w-auto'>
                                        <div className='flex items-center justify-between border-b-[1px] md:border-0 border-gray-400'>
                                            <FcLinux className='w-8 h-8 text-blue-400'/>
                                            <div className='pl-2 font-bold text-sm text-gray-800 dark:text-gray-300 text-right md:text-left gap-0'>
                                                Linux <br/>
                                                <span className='text-xs font-normal'>Basic</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Services