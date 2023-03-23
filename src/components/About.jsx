import {motion} from "framer-motion";
import AboutPic from '../assets/img/photo_2023-03-22_15-46-04.jpg'
import {BiSupport} from 'react-icons/bi'
import {TfiBag} from 'react-icons/tfi'
import {GiTargetPrize} from 'react-icons/gi'
const About = () => {
    return (
        <>
            <section className='bg-white dark:bg-gray-900 pt-[80px]  lg:pt-5' id='about'>
                <div className='min-h-screen container mx-auto flex justify-center items-center flex-wrap'>
                    <div>
                        <div className='w-full  text-center'>
                            <motion.div
                                initial={{ opacity: 0,y:-200}}
                                transition={{ duration: 0.5}}
                                whileInView={{ opacity: 1,y:0  }}
                                className='text-center w-full'>
                                <h1 className='text-md text-gray-800 dark:text-gray-400 mb-2'>My abilities</h1>
                                <h1 className='text-xl text-blue-600 font-bold text-2xl mb-4'>My Experience</h1>
                            </motion.div>
                        </div>
                        <div className='w-full flex items-center lg:items-start flex-wrap flex-col-reverse lg:flex-row'>
                            <motion.div initial={{ opacity: 0,y:-300}}
                                        transition={{ duration: 0.7}}
                                        whileInView={{ opacity: 1,y:0  }}
                                        className='w-full lg:w-[35%] text-white'>
                                <img src={AboutPic} className='h-auto w-full px-5  rounded-xl lg:h-[350px] mx-auto lg:w-[500px] object-cover obj-po' alt=""/>
                            </motion.div>
                            <motion.div initial={{ opacity: 0,y:-300}}
                                        transition={{ duration: 0.5}}
                                        whileInView={{ opacity: 1,y:0  }}
                                        className='w-full lg:w-[65%]'>
                                <div className='flex items-center lg:justify-start justify-center flex-wrap gap-x-3 gap-y-3 mb-4'>
                                    <div className='w-48 shadow-xl bg-white dark:bg-gray-800 text-center p-3 rounded-md'>
                                        <GiTargetPrize className='text-2xl dark:text-blue-500 text-gray-700 mx-auto mb-4'/>
                                        <h1 className='font-bold text-black dark:text-gray-300 mb-2'>Experience</h1>
                                        <p className='text-xs text-gray-500 dark:text-gray-400'>junior</p>
                                    </div>
                                    <div className='w-48 shadow-xl bg-white dark:bg-gray-800 text-center p-3 rounded-md'>
                                        <TfiBag className='text-2xl dark:text-blue-500 text-gray-700 mx-auto mb-4'/>
                                        <h1 className='font-bold text-black dark:text-gray-300 mb-2'>Completed</h1>
                                        <p className='text-xs text-gray-500 dark:text-gray-400'>15 projects</p>
                                    </div>
                                    <div className='w-48 shadow-xl bg-white dark:bg-gray-800 text-center p-3 rounded-md'>
                                        <BiSupport className='text-2xl dark:text-blue-500 text-gray-700 mx-auto mb-4'/>
                                        <h1 className='font-bold text-black dark:text-gray-300 mb-2'>Support</h1>
                                        <p className='text-xs text-gray-500 dark:text-gray-400'>Online 24/7</p>
                                    </div>
                                </div>
                                <div className='mb-4 flex flex-col lg:justify-center items-center lg:items-start'>
                                    <p className='w-3/4 mx-auto lg:mx-0 text-xl text-center md:text-start text-gray-700 dark:text-gray-300  leading-8 tracking-wide pb-5 pt-3'>I'm a junior website developer with experience in
                                        JavaScript, and expertise in framework like React.</p>
                                    <a href='#contact'
                                       className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Contact Me
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About