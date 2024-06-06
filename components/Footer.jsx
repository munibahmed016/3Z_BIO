'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
      
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="p-5 ">
        <ul>
          <img src="/3z_bio_logo.svg" alt="3Z-Bio" className="w-44 h-44" />
          <div className="flex gap-6 pb-5">
            <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
            <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
            <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
          </div>
        </ul>
      </div>
      <div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">HELP TO HELP </p>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Order Status 
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Shipping & Delivery 
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Return Policy
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Payments 
						</li>
            <li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Download App  
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">STORE POLICES </p>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Delivery Information 
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Refunds & Return 
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Careers At Lush 
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Our Policies 
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">Support</p>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Support Portals
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							List Of Charges
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Downloads & Resources
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Videos
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 ">
				<h1 className=" text-white font-semibold">
					© 2024-2025 All rights reserved 
				</h1>
			</div>
        </div>
      </div>
    
  </motion.footer>
);

export default Footer;
