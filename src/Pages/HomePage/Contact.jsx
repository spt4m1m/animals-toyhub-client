import { Icon } from '@iconify/react';
import React from 'react';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const handleMessage = e => {
        e.preventDefault()
        toast.success("Thanks for send us message")
        e.target.reset()
    }
    return (
        <div>
            <section className="bg-white">
                <div className="container px-6 py-12 mx-auto">
                    <div>
                        <h1 className="font-semibold text-primary text-3xl text-center">Contact us</h1>

                        <h1 className="mt-2 text-2xl font-semibold text-black text-center">Chat to our friendly team</h1>

                        <p className="mt-3  text-black  text-center">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                            <div className='text-center border shadow rounded-lg py-3'>
                                <div className='text-center'>
                                    <span className="inline-block p-3 text-white bg-primary rounded-full text-3xl">
                                        <Icon icon="clarity:email-solid" />
                                    </span>
                                </div>

                                <h2 className="mt-4 text-base font-medium ">Email</h2>
                                <p className="mt-2 text-sm  text-black  ">Our friendly team is here to help.</p>
                                <p className="mt-2 text-sm text-primary">animalstoyhub@gmail.com</p>
                            </div>

                            <div className='text-center border shadow rounded-lg py-3'>
                                <span className="inline-block p-3 text-white bg-primary rounded-full text-3xl">
                                    <Icon icon="fluent:chat-24-filled" />
                                </span>

                                <h2 className="mt-4 text-base font-medium text-gray-800  ">Live chat</h2>
                                <p className="mt-2 text-sm  text-black  ">Our friendly team is here to help.</p>
                                <p className="mt-2 text-sm text-primary">Start new chat</p>
                            </div>

                            <div className='text-center border shadow rounded-lg py-3'>
                                <span className="inline-block p-3 text-white bg-primary rounded-full text-3xl">
                                    <Icon icon="teenyicons:shop-solid" />
                                </span>

                                <h2 className="mt-4 text-base font-medium text-gray-800  ">Shop</h2>
                                <p className="mt-2 text-sm  text-black  ">Come say hello at our shop HQ.</p>
                                <p className="mt-2 text-sm text-primary">100 Smith Street Collingwood VIC 3066 AU</p>
                            </div>

                            <div className='text-center border shadow rounded-lg py-3'>
                                <span className="inline-block p-3 text-white bg-primary rounded-full text-3xl">
                                    <Icon icon="gg:phone" />
                                </span>

                                <h2 className="mt-4 text-base font-medium text-gray-800  ">Phone</h2>
                                <p className="mt-2 text-sm  text-black  ">Mon-Fri from 8am to 5pm.</p>
                                <p className="mt-2 text-sm text-primary">+1 (555) 000-0000</p>
                            </div>
                        </div>

                        <div className="p-4 py-6 rounded-lg bg-gray-200">
                            <form onSubmit={handleMessage}>
                                <div className="-mx-2 md:items-center md:flex">
                                    <div className="flex-1 px-2">
                                        <label className="block mb-2 text-sm font-semibold">First Name</label>
                                        <input type="text" placeholder="John " className="block w-full px-5 py-2.5 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 text-black" required />
                                    </div>

                                    <div className="flex-1 px-2 mt-4 md:mt-0">
                                        <label className="block mb-2 text-sm font-semibold">Last Name</label>
                                        <input type="text" placeholder="Doe" className="block w-full px-5 py-2.5 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 text-black" required />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label className="block mb-2 text-sm font-semibold">Email address</label>
                                    <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-2.5 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 text-black" required />
                                </div>

                                <div className="w-full mt-4">
                                    <label className="block mb-2 text-sm font-semibold">Message</label>
                                    <textarea className="block w-full h-32 px-5 py-2.5 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 text-black" placeholder="Message" required></textarea>
                                </div>

                                <button
                                    type='submit'
                                    className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Send message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;