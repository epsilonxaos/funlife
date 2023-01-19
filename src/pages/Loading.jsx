import logo from '../assets/img/logo-header-new.svg';

import { motion } from "framer-motion";
import React from "react";
import { createPortal } from 'react-dom';

const pageVariants = {
	initial: {
		opacity: 1,
	},
	in: {
		opacity: 1,
	},
	out: {
		opacity: 0,
	},
}

const ContainerVariants = {
	initial: {
		// opacity: 0
		// transition: {
		// 	delayChildren: 0, // this will set a delay before the children start animating
		// 	staggerChildren: 0.3 // this will set the time inbetween children animation
		//   }
	},
	animate: {
		opacity: 1,
		transition: {
			delayChildren: 0,
			staggerChildren: 0.3
		}
	}
};

const starVariants = {
	initial: {
		opacity: 0
	},
	animate: {
		opacity: 1
	}
}

const starTransition = {
	duration: 2,
	yoyo: Infinity,
	ease: "easeInOut"
};

const Loading = () => {
	return createPortal(
		<motion.div
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			id="loading"
			transition={{ duration: 0.2 }}
			style={{
			width: "100%",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			height: "100vh",
			flexDirection: "column",
			position: 'fixed',
			top: 0,
			left: 0,
			zIndex: 1600,
			backgroundColor: '#141414'
		}}
		>
			{/* <img src={logo} alt="Funlife International" className="mb-4" style={{filter: "none", maxWidth: "200px", width: "100%"}} /> */}
			<motion.svg
				variants={ContainerVariants}
				id="logo"
				viewBox="0 0 1700.79 1700.79"
			>
				<motion.path
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					duration: 2,
					delay: 0.4,
					yoyo: Infinity,
					ease: "easeInOut"
				}}
				className="cls-1 estrella-1" d="M1148.51,555.32C994.7,568.42,871.37,684.66,853.93,844.68c-6.82-76.77-35.59-143.8-89.15-199.34s-119.4-86.57-198.58-95.77C737.67,522.34,834.74,424.77,861,260.88,868.23,398.8,978.69,536,1148.51,555.32" />
				<motion.path
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					duration: 2,
					delay: 0.6,
					yoyo: Infinity,
					ease: "easeInOut"
				}}
				className="cls-1 estrella-2" d="M1480.2,1036.66c-107.75,18.58-170.83,80.59-191.19,187.31-18-108-80.53-171.06-187.31-191.65,107.29-17.64,170.4-79.69,191.62-186.69,18.24,107.09,80,170,186.88,191" />
				<motion.path
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					duration: 2,
					delay: 0.2,
					yoyo: Infinity,
					ease: "easeInOut"
				}}
				className="cls-1 estrella-3" d="M420.39,845.83c21.22,107.24,84.87,168.29,191.7,186.41-107,21-168.32,84.77-186.68,191-7.64-48.62-27.72-91-63.14-125.37s-78.41-53.78-127.76-59.72c105.65-21.05,167.31-84.34,185.88-192.36" />
			</motion.svg>
			{/* <motion.div
				style={LoadingContainer}
				variants={ContainerVariants}
				initial="initial"
				animate="animate"
			>
				<motion.span
				style={LoadingDot}
				variants={DotVariants}
				transition={DotTransition}
				/>
				<motion.span
				style={LoadingDot}
				variants={DotVariants}
				transition={DotTransition}
				/>
				<motion.span
				style={LoadingDot}
				variants={DotVariants}
				transition={DotTransition}
				/>
			</motion.div> */}
		</motion.div>,
		document.getElementById("root-loading")
	);
}

export default Loading;