import {motion} from "framer-motion";


const Projects = () => {
    return (
        <>
            <section id='projects'  className='min-h-screen pt-[80px] bg-white dark:bg-gray-900 px-3'>
                <div className='container mx-auto border-b-2'>
                    <motion.h1
                        initial={{ opacity: 0,y:50}}
                        transition={{ duration: 0.5,delay:0.2}}
                        whileInView={{ opacity: 1,y:0  }}
                        className='text-xl text-blue-600 font-bold text-2xl text-center mb-6'>My Projects</motion.h1>
                    <div
                        className="relative after:content-[''] after:absolute after:top-0 md:after:right-0 md:after:left-0 after:w-px after:h-full md:after:m-auto after:border-l-2 after:border-dashed after:border-gray-200 dark:after:border-gray-700 ml-3 md:ml-0">
                        <motion.div
                            initial={{ opacity: 0,y:50}}
                        transition={{ duration: 0.5,delay:0.2}}
                        whileInView={{ opacity: 1,y:0  }}
                            className="ml-8 md:ml-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:right-0 md:after:left-0 after:-left-9 before:content-[''] before:absolute md:before:mx-auto md:before:right-0 md:before:left-0 before:-left-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div className="grid md:grid-cols-2">
                                <div className="md:text-right md:mr-8 relative">
                                    <img src='https://devtyple-portfolio.netlify.app/assets/Screenshot%20(114)_edited-9d6f8b7a.jpg' className='className="w-full md:h-[150px] md:w-[350px] lg:w-3/4 lg:h-[300px] md:ml-auto'/>
                                </div>

                                <div className="float-left text-left md:ml-8 mt-6 md:mt-0">
                                    <h5 className="mb-1 font-semibold text-[#333]">Sushi Landing Page</h5>
                                    <p className="mt-3 mb-0 text-slate-400 text-sm md:text-lg">Built with: HTML, CSS, BootStrap , Sass</p>
                                    <p className="mt-3 mb-0 text-slate-400 text-sm md:text-lg">A landing page is like economic webapp. You can update & maintain. You can get source code on my github account. </p>
                                    <a href="https://spiffy-daffodil-000d2e.netlify.app" className='inline-block mt-3 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'>Lunch app</a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0,y:50}}
                        transition={{ duration: 0.5,delay:0.2}}
                        whileInView={{ opacity: 1,y:0  }}
                            className="mt-12 ml-8 md:ml-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:right-0 md:after:left-0 after:-left-9 before:content-[''] before:absolute md:before:mx-auto md:before:right-0 md:before:left-0 before:-left-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div className="grid md:grid-cols-2">
                                <div className="text-left md:ml-8 relative md:order-2">
                                    <img src="https://devtyple-portfolio.netlify.app/assets/Screenshot%20(116)_edited-b3ff7f55.jpg" className='className="w-full md:h-[150px] md:w-[350px] lg:w-3/4 lg:h-[300px] md:mr-auto'
                                         alt=""/>
                                </div>

                                <div className="float-left md:text-right md:mr-8 mt-6 md:mt-0 md:order-1">
                                    <h5 className="title mb-1 font-semibold text-[#333]">Foodie Landing Page</h5>
                                    <p className="mt-3 mb-0 text-slate-400 text-sm md:text-lg">Built with: HTML, CSS, BootStrap , Sass</p>
                                    <p className="mt-3 mb-0 text-slate-400 text-sm md:text-lg">A landing page is like economic webapp. You can update & maintain. You can get source code on my github account. </p>
                                    <a href="https://typle-foodie.netlify.app/" className='inline-block mt-3 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'>Lunch app</a>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0,y:50}}
                        transition={{ duration: 0.5,delay:0.2}}
                        whileInView={{ opacity: 1,y:0  }}
                            className="mt-12 ml-8 md:ml-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:right-0 md:after:left-0 after:-left-9 before:content-[''] before:absolute md:before:mx-auto md:before:right-0 md:before:left-0 before:-left-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div className="grid md:grid-cols-2">
                                <div className="md:text-right md:mr-8 relative">
                                    <img src='https://devtyple-portfolio.netlify.app/assets/Screenshot%20(119)_edited-9d5a1569.jpg' className='className="w-full md:h-[150px] md:w-[350px] lg:w-3/4 lg:h-[300px] md:ml-auto'/>
                                </div>

                                <div className="float-left text-left md:ml-8 mt-6 md:mt-0">
                                    <h5 className="mb-1 font-semibold text-[#333]">Flyo Landing Page</h5>
                                    <p className="mt-3 mb-0 text-slate-400 text-sm md:text-lg">Built with: HTML, CSS, BootStrap , Sass</p>
                                    <p className="mt-3 mb-0 text-slate-400 text-sm md:text-lg">A landing page is like economic webapp. You can update & maintain. You can get source code on my github account. </p>
                                    <a href="https://typle-flyo.netlify.app" className='inline-block mt-3 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'>Lunch app</a>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0,y:50}}
                        transition={{ duration: 0.5,delay:0.2}}
                        whileInView={{ opacity: 1,y:0  }}
                            className="mt-12 ml-8 md:ml-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:right-0 md:after:left-0 after:-left-9 before:content-[''] before:absolute md:before:mx-auto md:before:right-0 md:before:left-0 before:-left-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div className="grid md:grid-cols-2">
                                <div className="text-left md:ml-8 relative md:order-2">
                                    <img src="https://devtyple-portfolio.netlify.app/assets/Screenshot%20(115)_edited-07e6c65a.jpg" className='className="w-full md:h-[150px] md:w-[350px] lg:w-3/4 lg:h-[300px] md:mr-auto'
                                         alt=""/>
                                </div>

                                <div className="float-left md:text-right md:mr-8 mt-6 md:mt-0 md:order-1">
                                    <h5 className="title mb-1 font-semibold text-[#333]">Mediun Clone Page</h5>
                                    <p className="mt-3 mb-0 text-slate-400 text-sm md:text-lg">Built with: HTML, CSS, BootStrap , Sass</p>
                                    <p className="mt-3 mb-0 text-slate-400 text-sm md:text-lg">A clone page is like economic webapp. You can update & maintain. You can get source code on my github account. </p>
                                    <a href="https://mediun-clone.netlify.app" className='inline-block mt-3 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'>Lunch app</a>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0,y:50}}
                        transition={{ duration: 0.5,delay:0.2}}
                        whileInView={{ opacity: 1,y:0  }}
                            className="mt-12 ml-8 md:ml-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:right-0 md:after:left-0 after:-left-9 before:content-[''] before:absolute md:before:mx-auto md:before:right-0 md:before:left-0 before:-left-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div className="grid md:grid-cols-2">
                                <div className="md:text-right md:mr-8 relative">
                                    <img src='https://devtyple-portfolio.netlify.app/assets/Screenshot%20(120)_edited-585e0081.jpg' className='className="w-full md:h-[150px] md:w-[350px] lg:w-3/4 lg:h-[300px] md:ml-auto'/>
                                </div>

                                <div className="float-left text-left md:ml-8 mt-6 md:mt-0">
                                    <h5 className="mb-1 font-semibold text-[#333]">Foodie Detail Page</h5>
                                    <p className="mt-3 mb-0 text-slate-400 text-sm md:text-lg">Built with: HTML, CSS, Tailwindcss , ReactJS , Redux</p>
                                    <p className="mt-3 mb-0 text-slate-400 text-sm md:text-lg">A landing page is like economic webapp. You can update & maintain. You can get source code on my github account. </p>
                                    <a href="https://react-foodie-clone.netlify.app" className='inline-block mt-3 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'>Lunch app</a>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0,y:50}}
                        transition={{ duration: 0.5,delay:0.2}}
                        whileInView={{ opacity: 1,y:0  }}
                            className="mt-12 ml-8 md:ml-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:right-0 md:after:left-0 after:-left-9 before:content-[''] before:absolute md:before:mx-auto md:before:right-0 md:before:left-0 before:-left-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div className="grid md:grid-cols-2">
                                <div className="text-left md:ml-8 relative md:order-2">
                                    <img src="https://devtyple-portfolio.netlify.app/assets/Screenshot%20(117)_edited-58ea8991.jpg" className='className="w-full md:h-[150px] md:w-[350px] lg:w-3/4 lg:h-[300px] md:mr-auto'
                                         alt=""/>
                                </div>

                                <div className="float-left md:text-right md:mr-8 mt-6 md:mt-0 md:order-1">
                                    <h5 className="title mb-1 font-semibold text-[#333]">Facebook Clone Page</h5>
                                    <p className="mt-3 mb-0 text-slate-400 text-sm md:text-lg">Built with: HTML, CSS, BootStrap , Sass</p>
                                    <p className="mt-3 mb-0 text-slate-400 text-sm md:text-lg">A clone page is like economic webapp. You can update & maintain. You can get source code on my github account. </p>
                                    <a href="https://typle-facebook.netlify.app/" className='inline-block mt-3 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'>Lunch app</a>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0,y:50}}
                        transition={{ duration: 0.5,delay:0.2}}
                        whileInView={{ opacity: 1,y:0  }}
                            className="mt-12 ml-8 md:ml-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-indigo-600 md:after:mx-auto md:after:right-0 md:after:left-0 after:-left-9 before:content-[''] before:absolute md:before:mx-auto md:before:right-0 md:before:left-0 before:-left-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div className="grid md:grid-cols-2">
                                <div className="md:text-right md:mr-8 relative">
                                    <img src='https://devtyple-portfolio.netlify.app/assets/Screenshot%20(121)_edited-9109e548.jpg' className='className="w-full md:h-[150px] md:w-[350px] lg:w-3/4 lg:h-[300px] md:ml-auto'/>
                                </div>

                                <div className="float-left text-left md:ml-8 mt-6 md:mt-0">
                                    <h5 className="mb-1 font-semibold text-[#333]">Onlineshopping Page</h5>
                                    <p className="mt-3 mb-0 text-slate-400 text-sm md:text-lg">Built with: HTML, CSS, Tailwindcss , ReactJS , Redux</p>
                                    <p className="mt-3 mb-0 text-slate-400 text-sm md:text-lg">A landing page is like economic webapp. You can update & maintain. You can get source code on my github account. </p>
                                    <a href="https://lively-kashata-5878f6.netlify.app/" className='inline-block mt-3 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'>Lunch app</a>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Projects
