import Touch from '../assets/img/icon/Get in touch-bro.svg'
import {useState} from "react";
import {AiFillPhone,AiTwotoneMail} from 'react-icons/ai';
import {MdLocationPin} from 'react-icons/md'
import {motion} from "framer-motion";
import {easeIn} from "framer-motion/dom";

const Contact = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [question,setQuestion] = useState('')
    const [comment,setComment] = useState('')
    const handleSubmit = (e)=>{
        const data = {name,email,question,comment}
        e.preventDefault();
        setName('')
        setEmail('')
        setQuestion('')
        setComment('')
        console.log(data)
    }
    return (
        <>
            <section id='contact' className={`pt-[80px] bg-white dark:bg-gray-900`}>
                <div className='container mx-auto min-h-screen flex justify-center items-center'>
                    <div className='w-full flex justify-center items-center flex-wrap'>
                        <div className='text-center w-full pb-5'>
                            <h1 className='text-gray-700 dark:text-white text-3xl font-bold uppercase'>Contact me</h1>
                        </div>
                        <div className="w-full mb-5 pb-5">
                            <div className='flex justify-evenly items-center p-3 flex-wrap gap-4'>
                                <motion.div
                                    initial={{ opacity: 0,y:-200}}
                                    transition={{ duration: 0.5 ,delay:0.2,velocity:easeIn}}
                                    whileInView={{ opacity: 1,y:0  }}
                                    className='dark:text-white text-gray-600 w-full md:w-2/4 md:mx-auto lg:w-[20%] flex flex-col justify-center items-center bg-card py-5 gap-y-4 rounded-xl shadow-md dark:bg-gray-700'>
                                    <AiFillPhone className='text-4xl mb-3'/>
                                    <a href="tel:09776706992">09776706992</a>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0,y:-200}}
                                    transition={{ duration: 0.5 ,delay:0.2,velocity:easeIn}}
                                    whileInView={{ opacity: 1,y:0  }}
                                    className='dark:text-white text-gray-600 w-full md:w-2/4 md:mx-auto lg:w-[40%] flex flex-col justify-center items-center bg-card py-5 gap-y-4 rounded-xl shadow-md dark:bg-gray-700'>
                                    <AiTwotoneMail className='text-4xl mb-3'/>
                                    <a href="mailto:aungpyaephyo1145@gmail.com">aungpyaephyo1145@gmail.com</a>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0,y:-200}}
                                    transition={{ duration: 0.5 ,delay:0.2,velocity:easeIn}}
                                    whileInView={{ opacity: 1,y:0  }}
                                    className='dark:text-white text-gray-600 w-full md:w-2/4 md:mx-auto lg:w-[30%] flex flex-col justify-center items-center bg-card py-5 gap-y-4 rounded-xl shadow-md dark:bg-gray-700'>
                                    <MdLocationPin className='text-4xl mb-3'/>
                                    <a href="https://goo.gl/maps/1wKXW9j3bTp5sifh6" target='_blank'>Mandalay,Kyaukse,Kyaukse</a>
                                </motion.div>
                            </div>
                        </div>
                        <div className='w-full flex justify-between items-center flex-wrap p-3 lg:p-0'>
                            <motion.div
                                initial={{ opacity: 0,y:-200}}
                                transition={{ duration: 0.5 ,delay:0.2,velocity:easeIn}}
                                whileInView={{ opacity: 1,y:0  }}
                                className="w-full lg:w-[45%]">
                                <img src={Touch} alt=""/>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0,y:-200}}
                                transition={{ duration: 0.5 ,delay:0.2,velocity:easeIn}}
                                whileInView={{ opacity: 1,y:0  }}
                                className="w-full lg:w-[45%]">
                                <form className='bg-form p-3 md:p-5 rounded-lg shadow-md dark:bg-gray-700' onSubmit={handleSubmit}>
                                    <div className='text-center font-semibold text-2xl uppercase text-white pb-5'>
                                        Get in touch
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="name"
                                               className="block mb-2 text-sm font-medium text-white">Your
                                            name</label>
                                        <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)}
                                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                               placeholder="ExampleName"  required/>
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="email"
                                               className="block mb-2 text-sm font-medium text-white">Your
                                            email</label>
                                        <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                               placeholder="name@example.com"  required/>
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="question"
                                               className="block mb-2 text-sm font-medium text-white">Your
                                            question</label>
                                        <input type="text" id="question" value={question} onChange={(e)=>setQuestion(e.target.value)}
                                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                         required/>
                                    </div>
                                    <div className="mb-6">

                                        <label htmlFor="message"
                                               className="block mb-2 text-sm font-medium text-white">Your
                                            message</label>
                                        <textarea

                                            id="message" rows="4" value={comment} onChange={(e)=>setComment(e.target.value)}
                                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                  placeholder="Leave a comment..." required></textarea>
                                    </div>
                                    <button type="submit"
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send message
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact