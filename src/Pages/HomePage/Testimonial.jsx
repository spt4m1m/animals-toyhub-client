import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Icon } from '@iconify/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonial = () => {
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
    return (
        <div>

            <div data-aos="fade-up" className="min-w-screen min-h-[50vh] bg-gray-50 flex items-center justify-center py-5">
                <div className="w-full bg-white border-gray-200 px-5 text-gray-800 py-10">
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="text-center max-w-xl mx-auto">
                            <h1 className="text-3xl font-bold mb-5 ">What people are saying.</h1>
                            <h3 className="text-xl mb-5 font-light">Feedback from client about us</h3>
                        </div>
                        <Carousel swipeable={false}
                            draggable={true}
                            showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            keyBoardControl={true}
                            customTransition="all .4"
                            transitionDuration={400}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px">
                            <div className="w-full rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light m-5">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <img src="https://i.pravatar.cc/100?img=1" alt="" />
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-sm uppercase text-gray-600">Kenzie Edgar.</h6>
                                        <span className='flex text-yellow-400'>
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:outline-star-half" />
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                                        This animal toy is fantastic! It's well-designed, durable, and engages my child's imagination. The vibrant colors and soft texture are appealing, and the interactive features provide hours of entertainment. Highly recommended for stimulating play and learning.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                            <div className="w-full m-5 rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <img src="https://i.pravatar.cc/100?img=7" alt="" />
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-sm uppercase text-gray-600">Stevie Tifft.</h6>
                                        <span className='flex text-yellow-400'>
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:baseline-star" />
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                                        This animal toy is fantastic! It's well-designed, durable, and engages my child's imagination. The vibrant colors and soft texture are appealing, and the interactive features provide hours of entertainment. Highly recommended for stimulating play and learning.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                            <div className="w-full m-5 rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <img src="https://i.pravatar.cc/100?img=3" alt="" />
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-sm uppercase text-gray-600">Tommie Ewart.</h6>
                                        <span className='flex text-yellow-400'>
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:baseline-star" />
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                                        This animal toy is fantastic! It's well-designed, durable, and engages my child's imagination. The vibrant colors and soft texture are appealing, and the interactive features provide hours of entertainment. Highly recommended for stimulating play and learning.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                            <div className="w-full m-5 rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <img src="https://i.pravatar.cc/100?img=4" alt="" />
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-sm uppercase text-gray-600">Charlie Howse.</h6>
                                        <span className='flex text-yellow-400'>
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:outline-star-half" />
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                                        This animal toy is fantastic! It's well-designed, durable, and engages my child's imagination. The vibrant colors and soft texture are appealing, and the interactive features provide hours of entertainment. Highly recommended for stimulating play and learning.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                            <div className="w-full m-5 rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <img src="https://i.pravatar.cc/100?img=5" alt="" />
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-sm uppercase text-gray-600">Nevada Herbertson.</h6>
                                        <span className='flex text-yellow-400'>
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:baseline-star" />
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>

                                        The eagle toy is exceptional! Its lifelike appearance and intricate feather details make it visually stunning. The toy's wingspan adds to the realism, and the strong build ensures it withstands rough play. It's a captivating toy that ignites imaginative play and exploration. Highly recommended!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                            <div className="w-full m-5 rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <img src="https://i.pravatar.cc/100?img=8" alt="" />
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-sm uppercase text-gray-600">Kris Stanton.</h6>
                                        <span className='flex text-yellow-400'>
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:baseline-star" />
                                            <Icon icon="ic:outline-star-half" />
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                                        The horse toy is absolutely wonderful! It has a realistic design with beautiful details that captivate my child's imagination. The toy's sturdy construction ensures durability, and the interactive features like sound effects make playtime even more enjoyable. A fantastic choice for horse lovers!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;