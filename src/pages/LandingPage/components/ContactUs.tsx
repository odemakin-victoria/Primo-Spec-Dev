import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MapImage from "../../../../public/assets/images/revent-pattern.svg";

const ContactUs: React.FC = () => {
	const handleEmailClick = () => {
		window.location.href = "mailto:victoriaodemakin@gmail.com";
	};

	return (
		<motion.section
			className="relative w-full px-4 sm:px-8 md:px-[64px] py-20 flex items-center justify-center text-center overflow-hidden"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: false, amount: 0.3 }}
			transition={{ staggerChildren: 0.3 }}
		>
			{/* Background Image */}
			<div className="absolute inset-0 z-0">
				
			</div>

			{/* Content */}
			<div className="relative z-10 max-w-4xl text-[#006980] flex flex-col items-center justify-center gap-6">
				<motion.h2
					className="font-bold text-[36px] md:text-[56px] leading-tight"
					variants={{
						hidden: { opacity: 0 },
						visible: { opacity: 1, transition: { delay: 0.2, duration: 0.6 } },
					}}
				>
					Got an Idea?
				</motion.h2>

				<motion.p
							          className="text-[16px] md:text-[18px] text-[#00191F] font-light leading-relaxed"
					variants={{
						hidden: { opacity: 0, y: 20 },
						visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
					}}
				>
					Let's bring it to life with our expert technology service
				</motion.p>

				<motion.div
					className="flex flex-col sm:flex-row gap-4 mt-4"
					variants={{
						hidden: { opacity: 0, y: 20 },
						visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
					}}
				>
					<button
						onClick={handleEmailClick}
						className="border hover:border-[#2B93AA] font-medium bg-[#2B93AA] text-[#fff] px-8 py-3 rounded-full transition duration-300 hover:bg-transparent hover:text-[#2B93AA]"
					>
						Tell Us About It
					</button>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default ContactUs;
