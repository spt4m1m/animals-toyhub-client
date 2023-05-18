import React from 'react';
import footerLogo from '../../assets/toyhublogo.png';
import { Icon } from '@iconify/react';

const Footer = () => {

    return (
        <div>
            <footer className="footer p-10 border-t text-base-content">
                <div className='mx-auto'>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img className='w-20' src={footerLogo} alt="" />
                    <div>
                        <p className='text-2xl'>Animals ToyHub</p>
                        <p>All right reserved @ 2022 <span className='link text-primary'>terms & conditions</span></p>
                    </div>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a className='text-3xl' target='_blank' href="https://www.facebook.com/spt4m1m"><Icon icon="logos:facebook" /></a>
                        <a className='text-3xl' target='_blank' href="https://www.instagram.com/spt4m1m"><Icon icon="skill-icons:instagram" /></a>
                        <a className='text-3xl' target='_blank' href="https://www.twitter.com/spt4m1m"><Icon icon="devicon:twitter" /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;