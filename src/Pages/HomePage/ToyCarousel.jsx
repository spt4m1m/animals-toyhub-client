import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
    return (
        <div className='mx-auto max-w-[1200px] py-10'>
            <h2 className='text-3xl text-center font-semibold'>Toys Gallery</h2>
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
                <div className="carousel-item w-1/2 shadow-lg">
                    <img src='https://i.ibb.co/vwLDxhj/cow.jpg' className="w-full" />
                </div>
                <div className="carousel-item w-1/2 shadow-lg">
                    <img src='https://i.ibb.co/TMpkvKz/horsefour.png' className="w-full" />
                </div>
                <div className="carousel-item w-1/2 shadow-lg">
                    <img src='https://i.ibb.co/vxSZgFW/horsethree.jpg' className="w-full" />
                </div>
                <div className="carousel-item w-1/2 shadow-lg">
                    <img src='https://i.ibb.co/880b1JS/lion.jpg' className="w-full" />
                </div>
                <div className="carousel-item w-1/2 shadow-lg">
                    <img src='https://i.ibb.co/tHJXdqx/dainosor.jpg' className="w-full" />
                </div>
                <div className="carousel-item w-1/2 shadow-lg">
                    <img src='https://i.ibb.co/QQTwXM1/elephant.jpg' className="w-full" />
                </div>
                <div className="carousel-item w-1/2 shadow-lg">
                    <img src='https://i.ibb.co/HrXdsy1/horse.jpg' className="w-full" />
                </div>
                <div className="carousel-item w-1/2 shadow-lg">
                    <img src='https://i.ibb.co/KKGSHNL/eagle.jpg' className="w-full" />
                </div>
            </Carousel>
        </div>
    );
};

export default ToyCarousel;