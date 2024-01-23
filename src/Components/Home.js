import React from "react";


const Home = () => {

    const gradientStyle = {

        background: 'linear-gradient(80deg, #45c4f9 14.49%, rgba(137,32,254,.81) 48.2%, #ff0be5 94.81%)',
        color: 'trasparent',
        WebkitBackgroundClip: 'text',
    }


    return (<>
        <div className="flex justify-center">
            <div className="text-center mt-40">
                <h1 className="text-6xl font-bold mb-4  bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 ">One Platform To All</h1>
                <h1 className="text-6xl font-bold mb-4  bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-purple-700 to-pink-700 " >Business Solutions</h1>

                <h2 className="text-3xl font-bold">Transforming Your Business at Highest Potential</h2>
                <h2 className="text-3xl mt-2">with Our Business Consulting Solutions.</h2>
                <button className=" relative md:pt-3 md:pb-2 md:pr-4 md:pl-4 mt-10 pt-5 pr-7 pb-5 pl-5 text-2xl w-90 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white py-2 px-4 rounded-full hover:opacity-90 focus:outline-none focus:ring focus:border-blue-300 transition duration-300">
                    Get Your Free Business Consultation
                    <span className="absolute right-0 top-1/2 transform -translate-y-1/2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </span>
                </button>

            </div>
            <div>

            </div>
        </div>
        <div className="bg-gradient-to-r mt-20 from-blue-400 via-purple-500 to-pink-500 min-h-screen w-800 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg  max-w-4xl text-center w-full ">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                    Welcome to Business Gurukull - Your Gateway to Growth!
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                    At Business Gurukull, we believe in the power of transformation.
                </p>
                <div className="border-t border-b border-gray-300 py-4 my-4">
                    <div className="text-left">
                        <p class="text-gray-700 leading-relaxed">
                            Welcome to a space where innovation meets insight, and business solutions are tailored to meet
                            the unique needs of your journey. Whether you're a thriving small business or
                            an enterprise poised for expansion, our mission is clear: to guide you towards your highest business potential.
                        </p>
                        <p class="text-gray-700 leading-relaxed mt-4">
                            Our comprehensive suite of services, dynamic training programs, business consulting services
                            and cutting-edge digital products are all crafted with one goal in mind - your success. As your dedicated partner, we are committed to understanding your challenges, uncovering opportunities, and charting a course for your business to thrive.
                            </p>
                       
                        <p class="text-gray-700 leading-relaxed mt-4">
                            Explore the wealth of knowledge in our articles, discover the impact of our training programs,
                            and unlock the possibilities within our consulting services. Business Gurukull is more than a consultancy; it's a community of growth-minded individuals striving for excellence.
                            </p>
                       
                        <p class="text-gray-700 leading-relaxed mt-4">
                            Ready to embark on a transformative journey? Dive in, explore, and envision the possibilities. Your success story begins here.
                        </p>
                        </div>
                        </div>
                        <button className="mt-6 bg-gradient-to-r max-w-lg from-blue-400 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300 transition duration-300">
                         Thank You
                         </button>
                         </div>
                       </div>

        {/* <div class="bg-gray-10 flex justify-center items-center h-screen">
            <div class="bg-white p-8 rounded-md shadow-md max-w-md w-full">
                <h1 class="text-3xl font-bold mb-4">Welcome!</h1>
                <p class="text-gray-700 leading-relaxed">
                    Welcome to a space where innovation meets insight, and business solutions are tailored to meet the unique needs of your journey.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p class="text-gray-700 leading-relaxed mt-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>


        </div> */}

    </>)
}

export default Home