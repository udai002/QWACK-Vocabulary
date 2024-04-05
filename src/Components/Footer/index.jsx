import { FaArrowRight } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
    return <div className="p-6 flex flex-row flex-wrap bg-[#EEF1F6] items-center w-full z-40 mt-12">
        <div className="md:m-12">
            <img src="logo.png" alt="qwack" className="mb-2" />
            <p className="text-gray-600 mb-2 ">Lets Practise Grammer</p>
            <p className="flex items-center mb-2"><span>Read More</span> <FaArrowRight className="m-1 mt-1" /></p>
            <div className="flex flex-row">
                <div className="p-4 bg-white mr-2 ">
                    <FaFacebookF />
                </div>
                <div className="p-4 bg-white mr-2 ">
                    <FaTwitter />
                </div>
                <div className="p-4 bg-white mr-2">
                    <FaInstagram />

                </div>
                <div className="p-4 bg-white mr-2">
                    <FaLinkedinIn />
                </div>

            </div>
        </div>
        <div className="md:m-12">
            <h1 className="font-bold mb-2 text-xl mt-4">Quick Links</h1>
            <u className="list-none no-underline">
                <li>About us</li>
                <li>Terms and Conditions</li>
                <li>Privary Policy</li>
            </u>
        </div>
        <div>
            <h1 className="font-bold mb-2 text-xl mt-4">Get into touch</h1>
            <ul>
                <li className="flex  items-center"><CiMail className="m-1 text-blue-600" /><span>contact@qwackedu.com</span></li>
                <li className="flex  items-center"><IoLocationOutline className="m-1 text-blue-600" /><span>SF - 204 Aayna Complex <br />
Nr. Zydus Hospital, Habatpur Road <br />
Thaltej - Ahmedabad Gujarat - 380054</span></li>
            </ul>
        </div>
    </div>
}

export default Footer 
