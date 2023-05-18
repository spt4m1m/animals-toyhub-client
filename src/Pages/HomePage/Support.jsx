import React from 'react';
import { Icon } from '@iconify/react';

const Support = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4'>
            <div className='text-center py-5 mx-5'>
                <span className='flex justify-center items-center flex-col text-xl gap-2'>
                    <Icon className='text-5xl text-primary' icon="mdi:content-save-plus" />Big Saving
                </span>
                <p className='py-2 text-gray-500'>save money in every order</p>
            </div>
            <div className='text-center py-5 mx-5'>
                <span className='flex justify-center items-center flex-col text-xl gap-2'>
                    <Icon className='text-5xl text-primary' icon="mdi:calendar-clock" />Time Saving
                </span>
                <p className='py-2 text-gray-500'>Save time by home delivery</p>
            </div>
            <div className='text-center py-5 mx-5'>
                <span className='flex justify-center items-center flex-col text-xl gap-2'>
                    <Icon className='text-5xl text-primary' icon="mdi:payment-on-delivery" />Premium Quality
                </span>
                <p className='py-2 text-gray-500'>100% warranty</p>
            </div>
            <div className='text-center py-5 mx-5'>
                <span className='flex justify-center items-center flex-col text-xl gap-2'>
                    <Icon className='text-5xl text-primary' icon="streamline:interface-help-customer-support-human-1-customer-headphones-help-headset-person-profile-suuport" />Customer Care
                </span>
                <p className='py-2 text-gray-500'>24hr online support</p>
            </div>
        </div>
    );
};

export default Support;