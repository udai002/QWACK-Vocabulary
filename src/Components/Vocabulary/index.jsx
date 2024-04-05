import Button from "../Button"
import Sun from "../Sun"
import Waves from "../Waves"

import './index.css'

const Vocabulary = ()=>{
    return <div className=" h-[86vh] w-full vocabulary">
       
        <div className="flex flex-col justify-center items-center pt-28">
            <div className="z-10">
            <Button text="Word of the day"  />
            <Button text="Play fun games" />

            </div>
        
        <div className=" md:w-[400px] w-[300px] absolute top-80 z-0 flex justify-center m-auto">
            <Sun />
        </div>

        <div className="z-10 md:mt-24 w-full ">
            <Waves />
        </div>
        
        </div>
    </div>
}

export default Vocabulary