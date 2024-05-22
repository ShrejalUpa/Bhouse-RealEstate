import contactus from "../src/images/contactus.jpg";
import side from "../src/images/side.jpg";
import { FaUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import { HiPencil } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";

export default function App() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex left-2 md:py-20 pt-1">
          <div className="bg-white bg-opacity-80 text-blue-950 p-4 md:p-8 mx-6 md:mx-3 ">
            <p className="text-3xl font-bold md:mb-6">Contact Us</p>
            <div className="flex gap-2">
              <a href="/Home" className="text-lg ">
                Home
              </a>
              <h1 className="text-bold text-2xl">&#xBB; </h1>
              <a href="/About Us" className="text-lg ">
                About Us
              </a>
            </div>
          </div>
        </div>
        <div className="w-full object-cover">
          <img src={contactus} alt="contactus" className="w-full md:h-auto" />
        </div>
      </div>
      <h1 className="text-blue-950 text-2xl mt-20 px-2 py-4">
        <b>Get In Touch</b>
      </h1>
      <div className="px-2 py-4 md:flex md:justify-between md:w-full mx-4">
        <div className="md:flex-1">
          <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4">
            <div className="flex flex-col md:w-1/2 mb-4 md:mb-0">
              <div className="relative">
                <div className="absolute inset-y-0 right-2 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-violet-800" />
                </div>
                <input
                  type="text"
                  id="name"
                  className="border-2 border-gray-200 focus:shadow-violet-900 pl-4 p-4 block w-full text-black text-sm"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div className="flex flex-col md:w-1/2">
              <div className="relative">
                <div className="absolute inset-y-0 right-2 pl-3 flex items-center pointer-events-none">
                  <MdOutlineEmail className="text-violet-800" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="border-2 border-gray-200 focus:shadow-violet-900 pl-4 p-4 block w-full text-black text-sm"
                  placeholder="Your Email"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4">
            <div className="flex flex-col md:w-1/2 mb-4 md:mb-0">
              <div className="relative">
                <div className="absolute inset-y-0 right-2 pl-3 flex items-center pointer-events-none">
                  <IoIosPhonePortrait className="text-violet-800" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  className="border-2 border-gray-200 focus:shadow-violet-900 pl-4 p-4 block w-full text-black text-sm"
                  placeholder="Your Phone"
                />
              </div>
            </div>
            <div className="flex flex-col md:w-1/2">
              <div className="relative">
                <div className="absolute inset-y-0 right-2 pl-4 flex items-center pointer-events-none">
                  <GrNotes className="text-violet-800" />
                </div>
                <input
                  type="text"
                  id="subject"
                  className="border-2 border-gray-200 focus:shadow-violet-900 pl-4 p-4 block w-full text-black text-sm"
                  placeholder="Your Subject"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="relative">
              <div className="absolute inset-y-0 right-2 pl-4 flex pointer-events-none">
                <HiPencil className="text-violet-800 mt-1" />
              </div>
              <textarea
                id="message"
                className="border-2 border-gray-200 focus:shadow-violet-900 pl-4 p-3 block w-full h-32 text-black text-sm"
                placeholder="Write Message"
              ></textarea>
            </div>
          </div>
          <div className="flex">
            <button className="bg-indigo-700 text-white font-bold py-2 px-4">
              Send Message
            </button>
          </div>
        </div>
        <div className="relative mt-4 md:mt-0 md:ml-4 md:w-1/3">
          <img src={side} alt="side" className="w-full h-auto" />
          <div className="absolute inset-0 bg-indigo-900 bg-opacity-80 flex flex-col text-white px-4 py-6 overflow-auto">
            <p className="text-2xl font-bold mb-6">
              Don't Hesitate To Contact Us
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaHome className="text-indigo-900 bg-white rounded-full w-10 h-10 p-2" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-sm">
                    2512, New Market, Eliza Road, Sincher 80 CA, Canada, USA
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MdOutlineEmail className="text-indigo-900 bg-white rounded-full w-10 h-10 p-2" />
                <div>
                  <h3 className="font-semibold">Drop A Mail</h3>
                  <p className="text-sm">support@example.com</p>
                  <p className="text-sm">example@example.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <IoIosPhonePortrait className="text-indigo-900 bg-white rounded-full w-10 h-10 p-2" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-sm">(41) 123 521 458</p>
                  <p className="text-sm">+91 235 548 7548</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
