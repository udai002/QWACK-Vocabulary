import { motion } from "framer-motion"


const Waves = ()=>{
    return <motion.div className="h-[140px] overflow-hidden ">
        <motion.div initial={{x:-500}} animate={{x:100}} transition={{duration:15, ease:"linear" , repeat:Infinity }} className="flex flex-row justify-center w-full">
        <img src="waves.png" className="grow h-[140px] order-1" alt="waves" />
        <img src="waves.png" className="grow h-[140px] order-2" alt="waves" />
        <img src="waves.png" className="grow h-[140px] order-3" alt="waves" />
        </motion.div>


        <motion.div initial={{x:0}} animate={{x:1000}} transition={{duration:15, ease:"linear" , repeat:Infinity  }} className=" relative -top-36 flex flex-row justify-center w-full opacity-65 ">
        <img src="waves.png" className="grow h-[140px] order-1" alt="waves" />
        <img src="waves.png" className="grow h-[140px] order-2" alt="waves" />
        <img src="waves.png" className="grow h-[140px] order-3" alt="waves" />
        </motion.div>


        <motion.div initial={{x:-100}} animate={{x:1100}} transition={{duration:15, ease:"linear" , repeat:Infinity }} className=" relative -top-72 flex flex-row justify-center w-full opacity-35">
        <img src="waves.png" className="grow h-[140px] order-1" alt="waves" />
        <img src="waves.png" className="grow h-[140px] order-2" alt="waves" />
        <img src="waves.png" className="grow h-[140px] order-3" alt="waves" />
        </motion.div>
        
    </motion.div>
}

export default Waves