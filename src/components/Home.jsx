



import React from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const RelatedDealItem = ({ imgSrc, title, discount, price }) => (
  <div className="bg-slate-100 px-2 mb-4">
    <div className="max-w-md mx-auto px-2 flex flex-col items-center">
      <img src={imgSrc} alt="/" className="w-2/5 max-w-full h-auto sm:max-w-xs sm:h-auto" />
      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-500 font-bold mt-2">{title}</p>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400 mt-2">
        <span className="text-xs sm:text-sm md:text-base lg:text-base xl:text-base mr-2 text-cyan-500 bg-slate-300 rounded-sm px-1">{discount}</span>
        <span className="text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-cyan-500 bg-slate-300 rounded-sm px-1">Limited time</span>
      </p>
      <p className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg text-gray-400 font-bold mt-2">{price}</p>
      <button className="bg-sky-500 text-white py-1 px-12 sm:px-16 md:px-20 rounded text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-4">View</button>
    </div>
  </div>
);

export default function Home() {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const monthName = new Date().getMonth();
  
  return (
    <div className="container mx-auto text-center">
      <div className="text-3xl mt-4 mb-4">
        <h1 className="text-gray-740 h-full text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl">Best Website builders in the US</h1>
      </div>
      <hr className="my-2" />
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <p className="text-gray-600 text-sm sm:text-base md:text-sm lg:text-base flex items-center">
      <span className="inline-block h-4 w-4 sm:h-5 sm:w-5 mr-1">
        <img src='./image/img4.jpeg' alt='/' className="h-full w-full object-cover" />
      </span>
      Last Updated - {months[monthName]} {new Date().getDate()}, {new Date().getFullYear()} <span className="inline-block h-4 w-4 sm:h-5 sm:w-5 ml-4 mr-1">
        <img src='./image/img5.jpeg' alt='/' className="h-full w-full object-cover" /></span> Advertising Disclosure</p>
        <button className="flex items-center text-gray-600  text-sm sm:text-base md:text-sm lg:text-base mt-3 sm:mt-0">
          Dropdown
          <HiOutlineChevronDown className="ml-1" />
        </button>
      </div>
      <hr className="my-4" />
      <div className="flex sm:flex-row justify-between w-full md:w-3/5">
        <Link to="#" className="text-gray-600  text-sm sm:text-base md:text-sm lg:text-base ">Tools</Link>
        <Link to="#" className="text-gray-600  text-sm sm:text-base md:text-sm lg:text-base ">AWS Builder</Link>
        <Link to="#" className="text-gray-600  text-sm sm:text-base md:text-sm lg:text-base ">Star Build</Link>
        <Link to="#" className="text-gray-600  text-sm sm:text-base md:text-sm lg:text-base ">Build Supplies</Link>
        <Link to="#" className="text-gray-600  text-sm sm:text-base md:text-sm lg:text-base ">Tooling</Link>
        <Link to="#" className="text-gray-600  text-sm sm:text-base md:text-sm lg:text-base ">BlueHosting</Link>
      </div>
      <div className="flex sm:flex-row space-x-5 w-full md:w-3/5 mt-4 mb-5">
        <Link to="#" className="text-gray-600  text-sm sm:text-base md:text-sm lg:text-base ">Home &gt;</Link>
        <Link to="#" className="text-gray-600  text-sm sm:text-base md:text-sm lg:text-base ">Hosting for All &gt;</Link>
        <Link to="#" className="text-gray-600  text-sm sm:text-base md:text-sm lg:text-base ">Hosting &gt;</Link>
        <Link to="#" className="text-gray-600  text-sm sm:text-base md:text-sm lg:text-base ">Hosting6 &gt;</Link>
        <Link to="#" className="text-gray-600  text-sm sm:text-base md:text-sm lg:text-base ">Hosting5 &gt;</Link>
      </div>
      <div className="mt-4 sm:mt-8 lg:mt-15">
        <ul className="space-y-5">
          {[...Array(4)].map((_, index) => (
            <li key={index}>
              <div className="flex justify-between w-full ">
                <div className="flex flex-col justify-center items-center w-3/3 mr-4">
                  <div className="w-full max-w-md sm:w-full px-3">
                    <img src="./image/img1.jpeg" alt="/" className="sm:w-full max-w-full h-auto" />
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400">Builder {index + 1}</p>
                  </div>
                  {index !== 2 && index !== 3 &&
                  <div className="bg-orange-500 text-white py-1 px-2 rounded text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl flex items-center mt-2">
                    <img src="./image/img3.jpeg" alt="/" className="w-6 h-6 sm:w-6 sm:h-6 mr-2 sm:inline hidden sm:mr-1" />
                    <p className="whitespace-no-wrap">Best Value</p>
                  </div>}
                </div>
                <div className="flex flex-col justify-center items-center w-2.5/3 mx-4">
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                    <span className="font-bold">WixPro 72-Inch Responsive Website Builder</span>
                    - Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores
                  </p>
                  
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg pl-2 sm:pl-4 md:pl-6 lg:pl-8">
                    <span className="font-bold flex items-start">Main Highlights</span>
                   {index!=3 && <p>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>}
                   {index==3 && <div className="bg-red-100 rounded-lg p-4 sm:w-64 md:w-72 lg:w-80">
                     <ul className="text-sm sm:text-lg">
                         <li className="text-brown-900 mb-2 flex items-center"><span className="bg-white mr-2 px-2 py-1 rounded-lg text-xs sm:text-sm md:text-base lg:text-lg">9.9</span>Option 1</li>
                         <li className="text-brown-900 mb-2 flex items-center"><span className="bg-white mr-2 px-2 py-1 rounded-lg text-xs sm:text-sm md:text-base lg:text-lg">8.9</span>Option 1</li>
                         <li className="text-brown-900 mb-2 flex items-center"><span className="bg-white mr-2 px-2 py-1 rounded-lg text-xs sm:text-sm md:text-base lg:text-lg">8.9</span>Option 1</li>
                       </ul>
                     </div>}
                  </div>
                  <button className="flex items-center text-cyan-600 text-xs sm:text-sm md:text-base lg:text-lg mt-2 sm:mt-0">
                    Show more
                    <HiOutlineChevronDown className="ml-1" />
                  </button>
                </div>
                <div className="flex flex-col justify-center items-center w-1/3 ml-4">
                  <div className="flex flex-col items-center">
                    <div className="w-full max-w-md bg-cyan-100 text-white p-4 rounded-lg text-center">
                      <p className="text-xl md:text-xl lg:text-2xl xl:text-2xl mb-1 text-cyan-700">9.8</p>
                      <p className="text-xs text-cyan-700">Exceptional</p>
                      <div className="flex items-center mt-2">
                        {[...Array(5)].map((_, index) => (
                          <span key={index} className="text-yellow-300">&#9733;</span>
                        ))}
                      </div>
                    </div>
                    <button className="bg-sky-500 text-white py-1 px-6 rounded text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-4">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 sm:mt-10 md:mt-20 lg:mt-25 xl:mt-30">
        <h1 className="text-1xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 text-left text-gray-600">
          Related deals you might like for
        </h1>
        <div className="flex justify-center flex-wrap w-full sm:justify-between sm:flex-row">
          {[...Array(3)].map((_, index) => (
            <RelatedDealItem
              key={index}
              imgSrc="./image/img1.jpeg"
              title="Webbuilder 1"
              discount="20% off"
              price="$39.96"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
