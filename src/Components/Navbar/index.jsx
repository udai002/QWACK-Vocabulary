import { FiLogIn } from "react-icons/fi";


const Navbar = ()=>{
    return <div className="flex flex-row justify-around p-4 items-center bg-white sticky">
        <img src="logo.png" alt="Qwack" className="w-40" />
        <div className="hidden md:block">
            <ul className="flex flex-row justify-center">
                <li className="font-semibold mr-4">Home</li>
                <li className="font-semibold mr-4">Worksheets</li>
                <li className="font-semibold mr-4">Vocabulary</li>
                <li className="font-semibold mr-4">Quiz</li>
                <li className="font-semibold mr-4">Competition</li>
                <li className="font-semibold mr-4">About us</li>
            </ul>
        </div>
        <div>
            <button className="px-3 py-3 bg-[#2B70FA] text-[white] flex items-center font-semibold rounded"><FiLogIn />Login</button>
        </div>
        <div className="p-2 md:hidden">
            <div className="border-b-2 border-black w-8 mb-2"></div>
            <div className="border-b-2 border-black w-8 mb-2"></div>
            <div className="border-b-2 border-black w-8 mb-2"></div>
        </div>
        <div className="md:hidden fixed left-0 top-0 h-[100vh] w-[400px] bg-white border-2 border-black z-50  ">
            <img src="logo.png" alt="logo" className="w-[200px] " />
            <ul className="flex flex-col justify-center text-xl">
                <li className="font-semibold mr-4">Home</li>
                <li className="font-semibold mr-4">Worksheets</li>
                <li className="font-semibold mr-4">Vocabulary</li>
                <li className="font-semibold mr-4">Quiz</li>
                <li className="font-semibold mr-4">Competition</li>
                <li className="font-semibold mr-4">About us</li>
            </ul>
        </div>
    </div>
}

export default Navbar 