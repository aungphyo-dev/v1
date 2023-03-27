
import {useState} from "react";
import {AiFillPhone} from 'react-icons/ai';
import {MdEmail,MdLocationPin} from 'react-icons/md'
import {BiMessageSquareDetail} from 'react-icons/bi'
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
                        <div className='w-full flex justify-between lg:justify-evenly items-start flex-wrap p-3 lg:p-0'>
                            <div className="w-full md:w-[40%] flex flex-col justify-center gap-y-4 items-stretch mb-5 md:mb-0">
                                    <motion.div
                                        initial={{ opacity: 0,y:300}}
                                transition={{ duration: 0.5 ,delay:0.2,velocity:easeIn}}
                                whileInView={{ opacity: 1,y:0  }}
                                        className="flex items-center h-[125px] dark:bg-gray-700 rounded-xl bg-white p-4 shadow-lg">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                                            <AiFillPhone className='h-6 w-6 text-blue-400'/>
                                        </div>

                                        <div className="ml-4">
                                            <h2 className="font-semibold dark:text-gray-200">Phone</h2>
                                            <a href='tel:+959776706992' className="mt-2 text-sm text-gray-500 dark:text-gray-400">+959776706992</a>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0,y:300}}
                                transition={{ duration: 0.5 ,delay:0.2,velocity:easeIn}}
                                whileInView={{ opacity: 1,y:0  }}
                                        className="flex items-center h-[125px] dark:bg-gray-700 rounded-xl bg-white p-4 shadow-lg">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                                            <MdEmail className='h-6 w-6 text-orange-400'/>
                                        </div>

                                        <div className="ml-4 overflow-x-hidden">
                                            <h2 className="font-semibold dark:text-gray-200">Email</h2>
                                            <a href='mailto:aungpyaephyo1145@gmail.com' className="mt-2 text-sm text-gray-500 dark:text-gray-400 truncate">aungpyaephyo1145@gmail.com</a>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0,y:300}}
                                transition={{ duration: 0.5 ,delay:0.2,velocity:easeIn}}
                                whileInView={{ opacity: 1,y:0  }}
                                        className="flex items-center h-[125px] dark:bg-gray-700 rounded-xl bg-white p-4 shadow-lg">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                                            <BiMessageSquareDetail className='h-6 w-6 text-red-400'/>
                                        </div>

                                        <div className="ml-4">
                                            <h2 className="font-semibold dark:text-gray-200">Text message</h2>
                                            <p  className="mt-2 text-sm text-gray-500 dark:text-gray-400">+959776706992</p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0,y:300}}
                                transition={{ duration: 0.5 ,delay:0.2,velocity:easeIn}}
                                whileInView={{ opacity: 1,y:0  }}
                                        className="flex items-center h-[125px] dark:bg-gray-700 rounded-xl bg-white p-4 shadow-lg">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
                                            <MdLocationPin className='h-6 w-6 text-indigo-400'/>
                                        </div>

                                        <div className="ml-4">
                                            <h2 className="font-semibold dark:text-gray-200">Location</h2>
                                            <a target='_blank' href='https://goo.gl/maps/ijA9whuD3TDjcYP87' className="mt-2 text-sm text-gray-500 dark:text-gray-400">Mandalay,Myanmar</a>
                                        </div>
                                    </motion.div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0,y:300}}
                                transition={{ duration: 0.5 ,delay:0.2,velocity:easeIn}}
                                whileInView={{ opacity: 1,y:0  }}
                                className="w-full md:w-[55%] lg:w-[45%]">
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