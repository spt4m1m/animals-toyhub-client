import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ToyCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        // <div data-aos-duration="2000" data-aos="fade-up" className='mx-auto max-w-[1200px] py-20'>
        //     <h2 className='text-3xl text-center font-semibold'>Toys Gallery</h2>
        //     <Carousel swipeable={false}
        //         draggable={true}
        //         showDots={true}
        //         responsive={responsive}
        //         ssr={true} // means to render carousel on server-side.
        //         infinite={true}
        //         autoPlay={true}
        //         autoPlaySpeed={2000}
        //         keyBoardControl={true}
        //         customTransition="all .4"
        //         transitionDuration={400}
        //         containerClass="carousel-container"
        //         removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        //         dotListClass="custom-dot-list-style"
        //         itemClass="carousel-item-padding-40-px">
        //         <div className="carousel-item w-1/2 shadow-lg">
        //             <img src='https://i.ibb.co/vwLDxhj/cow.jpg' className="w-full" />
        //         </div>
        //         <div className="carousel-item w-1/2 shadow-lg">
        //             <img src='https://i.ibb.co/TMpkvKz/horsefour.png' className="w-full" />
        //         </div>
        //         <div className="carousel-item w-1/2 shadow-lg">
        //             <img src='https://i.ibb.co/vxSZgFW/horsethree.jpg' className="w-full" />
        //         </div>
        //         <div className="carousel-item w-1/2 shadow-lg">
        //             <img src='https://i.ibb.co/880b1JS/lion.jpg' className="w-full" />
        //         </div>
        //         <div className="carousel-item w-1/2 shadow-lg">
        //             <img src='https://i.ibb.co/tHJXdqx/dainosor.jpg' className="w-full" />
        //         </div>
        //         <div className="carousel-item w-1/2 shadow-lg">
        //             <img src='https://i.ibb.co/QQTwXM1/elephant.jpg' className="w-full" />
        //         </div>
        //         <div className="carousel-item w-1/2 shadow-lg">
        //             <img src='https://i.ibb.co/HrXdsy1/horse.jpg' className="w-full" />
        //         </div>
        //         <div className="carousel-item w-1/2 shadow-lg">
        //             <img src='https://i.ibb.co/KKGSHNL/eagle.jpg' className="w-full" />
        //         </div>
        //     </Carousel>
        // </div>
        <div>
            <section className="services">
                <div className="flex flex-col text-center w-full md:mt-[5rem]">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 font-serif md:text-6xl"><span className='text-blue-500'>I</span>mages</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">These my some of images I have captured !</p>

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