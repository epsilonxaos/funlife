import logo from '../assets/img/logo-header-new.svg';

import { motion } from "framer-motion";
import React from "react";

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

const LoadingDot = {
	display: "block",
	width: "1.5rem",
	height: "1.5rem",
	backgroundColor: "white",
	borderRadius: "50%"
};

const LoadingContainer = {
	width: "8rem",
	height: "5rem",
	display: "flex",
	justifyContent: "space-around"
};

const ContainerVariants = {
	initial: {
		transition: {
		staggerChildren: 0.2
		}
	},
	animate: {
		transition: {
		staggerChildren: 0.2
		}
	}
};

const DotVariants = {
	initial: {
		y: "0%"
	},
	animate: {
		y: "100%"
	}
};

const DotTransition = {
	duration: 0.5,
	yoyo: Infinity,
	ease: "easeInOut"
};

const Loading = () => {
  return (
    <motion.div
		initial="initial"
		animate="in"
		exit="out"
		variants={pageVariants}
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
	<img src={logo} alt="Funlife International" className="mb-4" style={{filter: "none", maxWidth: "200px", width: "100%"}} />
      <motion.div
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
      </motion.div>
    </motion.div>
  );
}

export default Loading;