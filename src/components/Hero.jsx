import React from 'react';
import { discount, robot } from '../assets';
import styles from '../style';
import GetStarted from './GetStarted';

const Hero = () => {
	return (
		<section id="home" className={`flex md:flex-row flex-col pt-10 pb-5`}>
			<div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
				<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
					<img src={discount} alt="discount" className="w-[32px] h-[32px]" />
					<p style={{ color: 'gray' }}>
						<span>20% </span>
						Discount for <span>1 Month</span> Account
					</p>
				</div>
				<div className="flex flex-row justify-between items-center w-full">
					<h1 className="flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px]">
						The Next
						<br className="sm:block hidden" /> <span className="text-gradient">Generation</span>
					</h1>
					<div className="ss:flex hidden md:mr-4 mr-4">
						<GetStarted />
					</div>
				</div>
				<h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-[111%]">
					Payment Method.
				</h1>
				<p className={`${styles.paragraph}`}>
					Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine
					annual percentage rates, annual fees.
				</p>
			</div>
			<div>
				<img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
				<div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
				<div className="absolute z-[0] w-[50%] h-[50%] bottom-20 right-20 blue__gradient"></div>
			</div>
			<div className={`ss:hidden ml-12`}>
				<GetStarted />
			</div>
		</section>
	);
};

export default Hero;
