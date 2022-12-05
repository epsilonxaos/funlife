import { motion } from "framer-motion"
import logo from '../assets/img/logo-header.svg';

const Loading = () => {
    const blackBox = {
        initial: {
            height: "100vh",
            bottom: 0,
        },
        animate: {
            height: 0,    
        },
        transition: {
            duration: 10
        }
    };


    return(
        <div className="loading">
            <motion.div
                className="bg-black"
                initial="initial"
                animate="animate"
                variants={blackBox}
            />      
        </div>
        // <motion.div
        //     initial={{ opacity: 0 }}
        //     animate={{ opacity: 1 }}
        //     exit={{ opacity: 0 }}
        //     className="loading vh-100 w-100 d-flex justify-content-center align-items-center">
        //     <h4>Loading</h4>
        //     <img src={logo} alt="FunLife"/>
        // </motion.div>
    )
}

export default Loading;