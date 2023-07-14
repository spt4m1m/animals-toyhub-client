import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ToyCarousel = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div>
            <section className="services">
                <div className="flex flex-col text-center w-full md:mt-[5rem]">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 font-serif md:text-6xl">Gellary</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Best Toys Photo Gellary !</p>

                </div>
                <section className="overflow-hidden text-gray-700">
                    <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                        <div className="flex flex-wrap -m-1 md:-m-2">
                            <div className="flex flex-wrap w-1/2">
                                <div className="w-1/2 p-1 md:p-2 border-2 shadow">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src='https://i.ibb.co/vwLDxhj/cow.jpg' />
                                </div>
                                <div className="w-1/2 p-1 md:p-2 border-2 shadow">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src='https://i.ibb.co/tHJXdqx/dainosor.jpg' />
                                </div>
                                <div className="w-full p-1 md:p-2 border-2 shadow">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src='https://i.ibb.co/880b1JS/lion.jpg' />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/2">
                                <div className="w-full p-1 md:p-2 border-2 shadow">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src='https://i.ibb.co/QQTwXM1/elephant.jpg' />
                                </div>
                                <div className="w-1/2 p-1 md:p-2 border-2 shadow">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src='https://i.ibb.co/HrXdsy1/horse.jpg' />
                                </div>
                                <div className="w-1/2 p-1 md:p-2 border-2 shadow">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src='https://i.ibb.co/KKGSHNL/eagle.jpg' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default ToyCarousel;