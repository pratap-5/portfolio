import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" bg-gray-400 bg-clip-padding backdrop-filter  backdrop-blur-lg bg-opacity-0 text-white py-8 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-bold mb-4">Company</h2>
            <ul>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About Me
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mt-6 md:mt-0">
            <h2 className="text-lg font-bold mb-4">Follow me</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitterSquare />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white"
              >
                <BsInstagram />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 mt-6 md:mt-0">
            <h2 className="text-lg font-bold mb-4">Contact</h2>
            <p className="text-gray-400">
              Bhubaneswar
              <br />
              kendrapda, odisha, 754213
              <br />
              Email: pintupratap8@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
