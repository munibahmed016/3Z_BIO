'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] " />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
    <div className=" w-full h-20 backdrop-filter backdrop-blur-xl flex items-center justify-center">
    <div className="max-w-7xl w-full flex items-center justify-between p-4">
      <img src="/3z_bio_logo.svg" alt="3z-bio" className="w-44 h-44 mt-10" />
      {/* <h6 className="font-bold">3Z-Bio</h6> */}
      <ul className="flex gap-8 mt-10">
        <li><a className="hover:text-blue-500 text-white transition-colors text-xs sm:text-base" href={'#BMI Checker'}>BMI Checker</a></li>
        <li><a className="hover:text-blue-500 text-white transition-colors text-xs sm:text-base" href={'#about'}>About</a></li>
        <li><a className="hover:text-blue-500 text-white transition-colors text-xs sm:text-base" href={'#contact'}>Contact</a></li>
      </ul>
    </div>
  </div>
    </div>
  </motion.nav>
);

export default Navbar;
