import {GiPencilBrush} from 'react-icons/gi'
import {BsFillChatLeftDotsFill} from 'react-icons/bs'
import {RiCustomerService2Line} from 'react-icons/ri'
import {BsFillPatchCheckFill} from 'react-icons/bs'


import {motion} from "framer-motion";
import {easeIn} from "framer-motion/dom";

const Services = () => {
    return (
        <>
            <section id='services' className='bg-white dark:bg-gray-900 pt-[80px] lg:p-0'>
                <div className='min-h-screen container mx-auto flex justify-center items-center'>
                    <div className='w-full flex gap-3 p-3 flex-wrap'>
                        <div  className='text-center w-full pb-5'>
                            <h1 className='text-gray-700 dark:text-white text-3xl font-bold uppercase'>Services</h1>
                        </div>
                        <motion.div
                            initial={{ opacity: 0,y:-200}}
                            transition={{ duration: 0.5,delay:0.2,velocity:easeIn }}
                            whileInView={{ opacity: 1,y:0  }}
                            className='w-full  md:w-3/4 md:mx-auto lg:w-[32%] dark:bg-gray-700 p-5 rounded-lg shadow-lg'>
                            <GiPencilBrush className='dark:text-white text-gray-700 text-8xl mx-auto mb-3'/>
                            <h1 className='text-gray-700 dark:text-white font-bold text-2xl mb-3'>Web Design</h1>
                            <p className='pb-2 leading-6 dark:text-gray-300 tracking-wider text-gray-400 mb-2'>I can create clean website UI.</p>
                            <a href='#contact' className='dark:text-white hover:text-white text-gray-800 px-4 py-2 border border-blue-500 rounded hover:bg-blue-900 hover:border-blue-900'>Hire me!</a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0,y:-200}}
                            transition={{ duration: 0.5,delay:0.2,velocity:easeIn }}
                            whileInView={{ opacity: 1,y:0  }}
                            className='w-full  md:w-3/4 md:mx-auto lg:w-[32%] dark:bg-gray-700 p-5 rounded-lg shadow-lg'>
                            <BsFillChatLeftDotsFill className='dark:text-white text-gray-700 text-8xl mx-auto mb-3'/>
                            <h1 className='text-gray-700 dark:text-white font-bold text-2xl mb-3'>Message</h1>
                            <p className='pb-2 leading-6 dark:text-gray-300 tracking-wider text-gray-400 mb-2'>24/7 message reply</p>
                            <a href='#contact' className='dark:text-white hover:text-white text-gray-800 px-4 py-2 border border-blue-500 rounded hover:bg-blue-900 hover:border-blue-900'>Hire me!</a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0,y:-200}}
                            transition={{ duration: 0.5,delay:0.2,velocity:easeIn }}
                            whileInView={{ opacity: 1,y:0  }}
                            className='w-full  md:w-3/4 md:mx-auto lg:w-[32%] dark:bg-gray-700 p-5 rounded-lg shadow-lg'>
                            <RiCustomerService2Line className='dark:text-white text-gray-700 text-8xl mx-auto mb-3'/>
                            <h1 className='text-gray-700 dark:text-white font-bold text-2xl mb-3'>Support</h1>
                            <p className='pb-2 leading-6 dark:text-gray-300 tracking-wider text-gray-400 mb-2'>24/7 support</p>
                            <a href='#contact' className='dark:text-white hover:text-white text-gray-800 px-4 py-2 border border-blue-500 rounded hover:bg-blue-900 hover:border-blue-900'>Hire me!</a>
                        </motion.div>
                        <div   className='w-full flex justify-center items-center gap-4 flex-wrap mt-5'>
                            <div  className='text-center w-full pb-5'>
                                <h1 className='text-gray-700 dark:text-white text-3xl font-bold uppercase'>My Skills</h1>
                            </div>
                            <div className='w-full md:w-96'>
                                <div className="w-full flex items-center justify-center rounded-lg p-3  dark:bg-gray-500  shadow-lg flex-wrap">
                                    <div className="w-full text-center mb-4">
                                        <h1 className='font-bold text-xl text-blue-500 dark:text-gray-300'>Frontend development</h1>
                                    </div>
                                    <div className='w-full flex flex-wrap justify-evenly items-center'>
                                        <div className=''>
                                            <div className='flex justify-start items-start  flex-col gap-x-1 mb-2'>
                                                <div  className='flex gap-x-1 items-start justify-center'>
                                                    <BsFillPatchCheckFill className='text-blue-600 dark:text-blue-400 mt-[0.4rem]'/>
                                                    <h1 className='text-lg font-bold text-gray-800 dark:text-white'>HTML</h1>
                                                </div>
                                                <p className='text-sm text-gray-400'>Intermediate Level</p>
                                            </div>
                                            <div className='flex justify-start items-start flex-col gap-x-1 mb-2'>
                                                <div className='flex gap-x-1 items-start justify-center'>
                                                    <BsFillPatchCheckFill className='text-blue-600 dark:text-blue-400 mt-[0.4rem]'/>
                                                    <h1 className='text-lg font-bold text-gray-800 dark:text-white'>CSS</h1>
                                                </div>
                                                <p className='text-sm text-gray-400'>Intermediate Level</p>
                                            </div>
                                            <div className='flex justify-start items-start flex-col gap-x-1 mb-2'>
                                                <div className='flex gap-x-1 items-start justify-center'>
                                                    <BsFillPatchCheckFill className='text-blue-600 dark:text-blue-400 mt-[0.4rem]'/>
                                                    <h1 className='text-lg font-bold text-gray-800 dark:text-white'>Javascript</h1>
                                                </div>
                                                <p className='text-sm text-gray-400'>Intermediate Level</p>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='flex justify-start items-start flex-col gap-x-1 mb-2'>
                                                <div className='flex gap-x-1 items-start justify-center'>
                                                    <BsFillPatchCheckFill className='text-blue-600 dark:text-blue-400 mt-[0.4rem]'/>
                                                    <h1 className='text-lg font-bold text-gray-800 dark:text-white'>Bootstrap</h1>
                                                </div>
                                                <p className='text-sm text-gray-400'>Intermediate Level</p>
                                            </div>
                                            <div className='flex justify-start items-start flex-col gap-x-1 mb-2'>
                                                <div className='flex gap-x-1 items-start justify-center'>
                                                    <BsFillPatchCheckFill className='text-blue-600 dark:text-blue-400 mt-[0.4rem]'/>
                                                    <h1 className='text-lg font-bold text-gray-800 dark:text-white'>Tailwindcss</h1>
                                                </div>
                                                <p className='text-sm text-gray-400'>Intermediate Level</p>
                                            </div>
                                            <div className='flex justify-start items-start flex-col gap-x-1 mb-2'>
                                                <div className='flex gap-x-1 items-start justify-center'>
                                                    <BsFillPatchCheckFill className='text-blue-600 dark:text-blue-400 mt-[0.4rem]'/>
                                                    <h1 className='text-lg font-bold text-gray-800 dark:text-white'>React</h1>
                                                </div>
                                                <p className='text-sm text-gray-400'>Intermediate Level</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full md:w-96'>
                                <div className="w-full flex items-center justify-center rounded-lg p-3  dark:bg-gray-500  shadow-lg flex-wrap">
                                    <div className="w-full text-center mb-4">
                                        <h1 className='font-bold text-xl text-blue-500 dark:text-gray-300'>Backend development</h1>
                                    </div>
                                    <div className='w-full flex flex-wrap justify-evenly items-center'>
                                        <div className=''>
                                            <div className='flex justify-start items-start  flex-col gap-x-1 mb-2'>
                                                <div  className='flex gap-x-1 items-start justify-center'>
                                                    <BsFillPatchCheckFill className='text-blue-600 dark:text-blue-400 mt-[0.4rem]'/>
                                                    <h1 className='text-lg font-bold text-gray-800 dark:text-white'>PHP</h1>
                                                </div>
                                                <p className='text-sm text-gray-400'>Basic Level</p>
                                            </div>
                                            <div className='flex justify-start items-start flex-col gap-x-1 mb-2'>
                                                <div className='flex gap-x-1 items-start justify-center'>
                                                    <BsFillPatchCheckFill className='text-blue-600 dark:text-blue-400 mt-[0.4rem]'/>
                                                    <h1 className='text-lg font-bold text-gray-800 dark:text-white'>Laravel</h1>
                                                </div>
                                                <p className='text-sm text-gray-400'>Basic Level</p>
                                            </div>
                                            <div className='flex justify-start items-start flex-col gap-x-1 mb-2'>
                                                <div className='flex gap-x-1 items-start justify-center'>
                                                    <BsFillPatchCheckFill className='text-blue-600 dark:text-blue-400 mt-[0.4rem]'/>
                                                    <h1 className='text-lg font-bold text-gray-800 dark:text-white'>My SQL</h1>
                                                </div>
                                                <p className='text-sm text-gray-400'>Basic Level</p>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='flex justify-start items-start flex-col gap-x-1 mb-2'>
                                                <div className='flex gap-x-1 items-start justify-center'>
                                                    <BsFillPatchCheckFill className='text-blue-600 dark:text-blue-400 mt-[0.4rem]'/>
                                                    <h1 className='text-lg font-bold text-gray-800 dark:text-white'>MariaDB</h1>
                                                </div>
                                                <p className='text-sm text-gray-400'>Basic Level</p>
                                            </div>
                                            <div className='flex justify-start items-start flex-col gap-x-1 mb-2'>
                                                <div className='flex gap-x-1 items-start justify-center'>
                                                    <BsFillPatchCheckFill className='text-blue-600 dark:text-blue-400 mt-[0.4rem]'/>
                                                    <h1 className='text-lg font-bold text-gray-800 dark:text-white'>GIT</h1>
                                                </div>
                                                <p className='text-sm text-gray-400'>Basic Level</p>
                                            </div>
                                            <div className='flex justify-start items-start flex-col gap-x-1 mb-2'>
                                                <div className='flex gap-x-1 items-start justify-center'>
                                                    <BsFillPatchCheckFill className='text-blue-600 dark:text-blue-400 mt-[0.4rem]'/>
                                                    <h1 className='text-lg font-bold text-gray-800 dark:text-white'>LINUX</h1>
                                                </div>
                                                <p className='text-sm text-gray-400'>Basic Level</p>
                                            </div>
                                        </div>
                                    </div>
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