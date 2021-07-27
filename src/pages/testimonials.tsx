import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
function Testimonials() {
    return (
        <div>
            <div className="container mx-auto pt-16">
                {/* PLease install Pure React Carousel using "npm i pure-react-carousel" in order to use this component */}
                <div className="pb-12">
                    <h1 className="text-3xl xl:text-5xl font-extrabold text-gray-800 mx-auto text-center xl:text-left pb-4">Hear From Our Customers</h1>
                    <p className="text-xl text-gray-600 xl:w-3/4 w-11/12 mx-auto xl:mx-0 text-center sm:text-left">I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage.</p>
                </div>
                <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={3} isIntrinsicHeight={true} infinite={true}>
                    <Slider>
                        <Slide index={1}>
                            {" "}
                            <figure className="py-4">
                                <div className="flex flex-wrap justify-around">
                                    <div className="xl:w-1/3 lg:w-5/12 w-11/12 sm:w-3/5 md:w-5/12 xl:pb-0 pb-12">
                                        <div className="shadow-lg mx-3 xl:mx-3 sm:mx-0 lg:mx-0 rounded">
                                            <div className="bg-pink-700 pt-6 pb-6 pl-6 rounded-tl rounded-tr">
                                                <p className="text-xl text-white pb-1">Alex Parkinson</p>
                                                <p className="text-base text-pink-200">AlphaSquad LLC</p>
                                            </div>
                                            <div className="pl-6 pr-6 pt-10 relative h-64">
                                                <div className="h-16 w-16 rounded-full bg-cover border-4 border-white absolute top-0 right-0 -mt-8 mr-6">
                                                    <img src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif" alt="" className="h-full w-full object-cover rounded-full overflow-hidden" />
                                                </div>
                                                <p className="text-base text-gray-600 leading-8">It really saves me time and effort. Chamer is exactly what our business has been lacking. Chamer was worth a fortune to my company.</p>
                                                <div className="flex justify-end mt-2">
                                                    <svg width={44} height={37} xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8.432 0c-2.339 0-4.329.821-5.97 2.463C.82 4.105 0 6.093 0 8.429c0 2.335.82 4.324 2.462 5.966 1.641 1.642 3.631 2.463 5.97 2.463 2.113 0 3.386.84 3.82 2.518.434 1.678.217 3.54-.65 5.583-.868 2.043-2.32 3.904-4.358 5.582C5.206 32.22 2.792 33.06 0 33.06V37c5.018 0 9.196-1.925 12.535-5.774 3.34-3.85 5.518-8.083 6.537-12.699 1.018-4.616.726-8.857-.878-12.725C16.591 1.934 13.337 0 8.432 0zm24.335 0c-2.34 0-4.33.821-5.97 2.463-1.642 1.642-2.462 3.63-2.462 5.966 0 2.335.82 4.324 2.462 5.966 1.64 1.642 3.63 2.463 5.97 2.463 2.113 0 3.396.84 3.848 2.518.453 1.678.236 3.54-.65 5.583-.887 2.043-2.34 3.904-4.358 5.582-2.019 1.679-4.443 2.518-7.272 2.518V37c5.018 0 9.196-1.925 12.535-5.774 3.339-3.85 5.518-8.083 6.536-12.699 1.02-4.616.727-8.857-.877-12.725C40.926 1.934 37.672 0 32.767 0z"
                                                            fill="#667EEA"
                                                            fillRule="evenodd"
                                                            fillOpacity=".15"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:w-1/3 lg:w-5/12 w-11/12 sm:w-3/5 md:w-5/12 xl:mb-0 mb-12">
                                        <div className="shadow-lg mx-3 xl:mx-3 sm:mx-0 lg:mx-0 rounded">
                                            <div className="bg-pink-700 pt-6 pb-6 pl-6 rounded-tl rounded-tr">
                                                <p className="text-xl text-white pb-1">Ashley Wilson</p>
                                                <p className="text-base text-pink-200">i-Intellect Inc</p>
                                            </div>
                                            <div className="pl-6 pr-6 pt-10 relative h-64">
                                                <div className="h-16 w-16 rounded-full bg-cover border-4 border-white absolute top-0 right-0 -mt-8 mr-6">
                                                    <img src="https://cdn.tuk.dev/assets/photo-1548958921-c5c0fe1b307d.jfif" alt="" className="h-full w-full object-cover rounded-full overflow-hidden" />
                                                </div>
                                                <p className="text-base text-gray-600 leading-8">It really saves me time and effort. Chamer is exactly what our business has been lacking. Chamer was worth a fortune to my company.</p>
                                                <div className="flex justify-end mt-2">
                                                    <svg width={44} height={37} xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8.432 0c-2.339 0-4.329.821-5.97 2.463C.82 4.105 0 6.093 0 8.429c0 2.335.82 4.324 2.462 5.966 1.641 1.642 3.631 2.463 5.97 2.463 2.113 0 3.386.84 3.82 2.518.434 1.678.217 3.54-.65 5.583-.868 2.043-2.32 3.904-4.358 5.582C5.206 32.22 2.792 33.06 0 33.06V37c5.018 0 9.196-1.925 12.535-5.774 3.34-3.85 5.518-8.083 6.537-12.699 1.018-4.616.726-8.857-.878-12.725C16.591 1.934 13.337 0 8.432 0zm24.335 0c-2.34 0-4.33.821-5.97 2.463-1.642 1.642-2.462 3.63-2.462 5.966 0 2.335.82 4.324 2.462 5.966 1.64 1.642 3.63 2.463 5.97 2.463 2.113 0 3.396.84 3.848 2.518.453 1.678.236 3.54-.65 5.583-.887 2.043-2.34 3.904-4.358 5.582-2.019 1.679-4.443 2.518-7.272 2.518V37c5.018 0 9.196-1.925 12.535-5.774 3.339-3.85 5.518-8.083 6.536-12.699 1.02-4.616.727-8.857-.877-12.725C40.926 1.934 37.672 0 32.767 0z"
                                                            fill="#667EEA"
                                                            fillRule="evenodd"
                                                            fillOpacity=".15"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:w-1/3 lg:w-5/12 w-11/12 sm:w-3/5 md:w-5/12 xl:mb-0 mb-12">
                                        <div className="shadow-lg mx-3 xl:mx-3 sm:mx-0 lg:mx-0 rounded">
                                            <div className="bg-pink-700 pt-6 pb-6 pl-6 rounded-tl rounded-tr">
                                                <p className="text-xl text-white pb-1">Richard Clark</p>
                                                <p className="text-base text-pink-200">Apple Inc</p>
                                            </div>
                                            <div className="pl-6 pr-6 pt-10 relative h-64">
                                                <div className="h-16 w-16 rounded-full bg-cover border-4 border-white absolute top-0 right-0 -mt-8 mr-6">
                                                    <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" alt="" className="h-full w-full object-cover rounded-full overflow-hidden" />
                                                </div>
                                                <p className="text-base text-gray-600 leading-8">It really saves me time and effort. Chamer is exactly what our business has been lacking. Chamer was worth a fortune to my company.</p>
                                                <div className="flex justify-end mt-2">
                                                    <svg width={44} height={37} xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8.432 0c-2.339 0-4.329.821-5.97 2.463C.82 4.105 0 6.093 0 8.429c0 2.335.82 4.324 2.462 5.966 1.641 1.642 3.631 2.463 5.97 2.463 2.113 0 3.386.84 3.82 2.518.434 1.678.217 3.54-.65 5.583-.868 2.043-2.32 3.904-4.358 5.582C5.206 32.22 2.792 33.06 0 33.06V37c5.018 0 9.196-1.925 12.535-5.774 3.34-3.85 5.518-8.083 6.537-12.699 1.018-4.616.726-8.857-.878-12.725C16.591 1.934 13.337 0 8.432 0zm24.335 0c-2.34 0-4.33.821-5.97 2.463-1.642 1.642-2.462 3.63-2.462 5.966 0 2.335.82 4.324 2.462 5.966 1.64 1.642 3.63 2.463 5.97 2.463 2.113 0 3.396.84 3.848 2.518.453 1.678.236 3.54-.65 5.583-.887 2.043-2.34 3.904-4.358 5.582-2.019 1.679-4.443 2.518-7.272 2.518V37c5.018 0 9.196-1.925 12.535-5.774 3.339-3.85 5.518-8.083 6.536-12.699 1.02-4.616.727-8.857-.877-12.725C40.926 1.934 37.672 0 32.767 0z"
                                                            fill="#667EEA"
                                                            fillRule="evenodd"
                                                            fillOpacity=".15"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </Slide>
                        <Slide index={2}>
                            {" "}
                            <figure className="py-4">
                                <div className="flex flex-wrap justify-around">
                                    <div className="xl:w-1/3 lg:w-5/12 w-11/12 sm:w-3/5 md:w-5/12 xl:mb-0 mb-12">
                                        <div className="shadow-lg mx-3 xl:mx-3 sm:mx-0 lg:mx-0 rounded">
                                            <div className="bg-pink-700 pt-6 pb-6 pl-6 rounded-tl rounded-tr">
                                                <p className="text-xl text-white pb-1">Ashley Wilson</p>
                                                <p className="text-base text-pink-200">i-Intellect Inc</p>
                                            </div>
                                            <div className="pl-6 pr-6 pt-10 relative h-64">
                                                <div className="h-16 w-16 rounded-full bg-cover border-4 border-white absolute top-0 right-0 -mt-8 mr-6">
                                                    <img src="https://cdn.tuk.dev/assets/photo-1548958921-c5c0fe1b307d.jfif" alt="" className="h-full w-full object-cover rounded-full overflow-hidden" />
                                                </div>
                                                <p className="text-base text-gray-600 leading-8">It really saves me time and effort. Chamer is exactly what our business has been lacking. Chamer was worth a fortune to my company.</p>
                                                <div className="flex justify-end mt-2">
                                                    <svg width={44} height={37} xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8.432 0c-2.339 0-4.329.821-5.97 2.463C.82 4.105 0 6.093 0 8.429c0 2.335.82 4.324 2.462 5.966 1.641 1.642 3.631 2.463 5.97 2.463 2.113 0 3.386.84 3.82 2.518.434 1.678.217 3.54-.65 5.583-.868 2.043-2.32 3.904-4.358 5.582C5.206 32.22 2.792 33.06 0 33.06V37c5.018 0 9.196-1.925 12.535-5.774 3.34-3.85 5.518-8.083 6.537-12.699 1.018-4.616.726-8.857-.878-12.725C16.591 1.934 13.337 0 8.432 0zm24.335 0c-2.34 0-4.33.821-5.97 2.463-1.642 1.642-2.462 3.63-2.462 5.966 0 2.335.82 4.324 2.462 5.966 1.64 1.642 3.63 2.463 5.97 2.463 2.113 0 3.396.84 3.848 2.518.453 1.678.236 3.54-.65 5.583-.887 2.043-2.34 3.904-4.358 5.582-2.019 1.679-4.443 2.518-7.272 2.518V37c5.018 0 9.196-1.925 12.535-5.774 3.339-3.85 5.518-8.083 6.536-12.699 1.02-4.616.727-8.857-.877-12.725C40.926 1.934 37.672 0 32.767 0z"
                                                            fill="#667EEA"
                                                            fillRule="evenodd"
                                                            fillOpacity=".15"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:w-1/3 lg:w-5/12 w-11/12 sm:w-3/5 md:w-5/12 xl:pb-0 pb-12">
                                        <div className="shadow-lg mx-3 xl:mx-3 sm:mx-0 lg:mx-0 rounded">
                                            <div className="bg-pink-700 pt-6 pb-6 pl-6 rounded-tl rounded-tr">
                                                <p className="text-xl text-white pb-1">Alex Parkinson</p>
                                                <p className="text-base text-pink-200">AlphaSquad LLC</p>
                                            </div>
                                            <div className="pl-6 pr-6 pt-10 relative h-64">
                                                <div className="h-16 w-16 rounded-full bg-cover border-4 border-white absolute top-0 right-0 -mt-8 mr-6">
                                                    <img src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif" alt="" className="h-full w-full object-cover rounded-full overflow-hidden" />
                                                </div>
                                                <p className="text-base text-gray-600 leading-8">It really saves me time and effort. Chamer is exactly what our business has been lacking. Chamer was worth a fortune to my company.</p>
                                                <div className="flex justify-end mt-2">
                                                    <svg width={44} height={37} xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8.432 0c-2.339 0-4.329.821-5.97 2.463C.82 4.105 0 6.093 0 8.429c0 2.335.82 4.324 2.462 5.966 1.641 1.642 3.631 2.463 5.97 2.463 2.113 0 3.386.84 3.82 2.518.434 1.678.217 3.54-.65 5.583-.868 2.043-2.32 3.904-4.358 5.582C5.206 32.22 2.792 33.06 0 33.06V37c5.018 0 9.196-1.925 12.535-5.774 3.34-3.85 5.518-8.083 6.537-12.699 1.018-4.616.726-8.857-.878-12.725C16.591 1.934 13.337 0 8.432 0zm24.335 0c-2.34 0-4.33.821-5.97 2.463-1.642 1.642-2.462 3.63-2.462 5.966 0 2.335.82 4.324 2.462 5.966 1.64 1.642 3.63 2.463 5.97 2.463 2.113 0 3.396.84 3.848 2.518.453 1.678.236 3.54-.65 5.583-.887 2.043-2.34 3.904-4.358 5.582-2.019 1.679-4.443 2.518-7.272 2.518V37c5.018 0 9.196-1.925 12.535-5.774 3.339-3.85 5.518-8.083 6.536-12.699 1.02-4.616.727-8.857-.877-12.725C40.926 1.934 37.672 0 32.767 0z"
                                                            fill="#667EEA"
                                                            fillRule="evenodd"
                                                            fillOpacity=".15"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:w-1/3 lg:w-5/12 w-11/12 sm:w-3/5 md:w-5/12 xl:mb-0 mb-12">
                                        <div className="shadow-lg mx-3 xl:mx-3 sm:mx-0 lg:mx-0 rounded">
                                            <div className="bg-pink-700 pt-6 pb-6 pl-6 rounded-tl rounded-tr">
                                                <p className="text-xl text-white pb-1">Richard Clark</p>
                                                <p className="text-base text-pink-200">Apple Inc</p>
                                            </div>
                                            <div className="pl-6 pr-6 pt-10 relative h-64">
                                                <div className="h-16 w-16 rounded-full bg-cover border-4 border-white absolute top-0 right-0 -mt-8 mr-6">
                                                    <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" alt="" className="h-full w-full object-cover rounded-full overflow-hidden" />
                                                </div>
                                                <p className="text-base text-gray-600 leading-8">It really saves me time and effort. Chamer is exactly what our business has been lacking. Chamer was worth a fortune to my company.</p>
                                                <div className="flex justify-end mt-2">
                                                    <svg width={44} height={37} xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8.432 0c-2.339 0-4.329.821-5.97 2.463C.82 4.105 0 6.093 0 8.429c0 2.335.82 4.324 2.462 5.966 1.641 1.642 3.631 2.463 5.97 2.463 2.113 0 3.386.84 3.82 2.518.434 1.678.217 3.54-.65 5.583-.868 2.043-2.32 3.904-4.358 5.582C5.206 32.22 2.792 33.06 0 33.06V37c5.018 0 9.196-1.925 12.535-5.774 3.34-3.85 5.518-8.083 6.537-12.699 1.018-4.616.726-8.857-.878-12.725C16.591 1.934 13.337 0 8.432 0zm24.335 0c-2.34 0-4.33.821-5.97 2.463-1.642 1.642-2.462 3.63-2.462 5.966 0 2.335.82 4.324 2.462 5.966 1.64 1.642 3.63 2.463 5.97 2.463 2.113 0 3.396.84 3.848 2.518.453 1.678.236 3.54-.65 5.583-.887 2.043-2.34 3.904-4.358 5.582-2.019 1.679-4.443 2.518-7.272 2.518V37c5.018 0 9.196-1.925 12.535-5.774 3.339-3.85 5.518-8.083 6.536-12.699 1.02-4.616.727-8.857-.877-12.725C40.926 1.934 37.672 0 32.767 0z"
                                                            fill="#667EEA"
                                                            fillRule="evenodd"
                                                            fillOpacity=".15"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </Slide>
                        <Slide index={3}>
                            {" "}
                            <figure className="py-4">
                                <div className="flex flex-wrap justify-around">
                                    <div className="xl:w-1/3 lg:w-5/12 w-11/12 sm:w-3/5 md:w-5/12 xl:mb-0 mb-12">
                                        <div className="shadow-lg mx-3 xl:mx-3 sm:mx-0 lg:mx-0 rounded">
                                            <div className="bg-pink-700 pt-6 pb-6 pl-6 rounded-tl rounded-tr">
                                                <p className="text-xl text-white pb-1">Richard Clark</p>
                                                <p className="text-base text-pink-200">Apple Inc</p>
                                            </div>
                                            <div className="pl-6 pr-6 pt-10 relative h-64">
                                                <div className="h-16 w-16 rounded-full bg-cover border-4 border-white absolute top-0 right-0 -mt-8 mr-6">
                                                    <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" alt="" className="h-full w-full object-cover rounded-full overflow-hidden" />
                                                </div>
                                                <p className="text-base text-gray-600 leading-8">It really saves me time and effort. Chamer is exactly what our business has been lacking. Chamer was worth a fortune to my company.</p>
                                                <div className="flex justify-end mt-2">
                                                    <svg width={44} height={37} xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8.432 0c-2.339 0-4.329.821-5.97 2.463C.82 4.105 0 6.093 0 8.429c0 2.335.82 4.324 2.462 5.966 1.641 1.642 3.631 2.463 5.97 2.463 2.113 0 3.386.84 3.82 2.518.434 1.678.217 3.54-.65 5.583-.868 2.043-2.32 3.904-4.358 5.582C5.206 32.22 2.792 33.06 0 33.06V37c5.018 0 9.196-1.925 12.535-5.774 3.34-3.85 5.518-8.083 6.537-12.699 1.018-4.616.726-8.857-.878-12.725C16.591 1.934 13.337 0 8.432 0zm24.335 0c-2.34 0-4.33.821-5.97 2.463-1.642 1.642-2.462 3.63-2.462 5.966 0 2.335.82 4.324 2.462 5.966 1.64 1.642 3.63 2.463 5.97 2.463 2.113 0 3.396.84 3.848 2.518.453 1.678.236 3.54-.65 5.583-.887 2.043-2.34 3.904-4.358 5.582-2.019 1.679-4.443 2.518-7.272 2.518V37c5.018 0 9.196-1.925 12.535-5.774 3.339-3.85 5.518-8.083 6.536-12.699 1.02-4.616.727-8.857-.877-12.725C40.926 1.934 37.672 0 32.767 0z"
                                                            fill="#667EEA"
                                                            fillRule="evenodd"
                                                            fillOpacity=".15"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:w-1/3 lg:w-5/12 w-11/12 sm:w-3/5 md:w-5/12 xl:pb-0 pb-12">
                                        <div className="shadow-lg mx-3 xl:mx-3 sm:mx-0 lg:mx-0 rounded">
                                            <div className="bg-pink-700 pt-6 pb-6 pl-6 rounded-tl rounded-tr">
                                                <p className="text-xl text-white pb-1">Alex Parkinson</p>
                                                <p className="text-base text-pink-200">AlphaSquad LLC</p>
                                            </div>
                                            <div className="pl-6 pr-6 pt-10 relative h-64">
                                                <div className="h-16 w-16 rounded-full bg-cover border-4 border-white absolute top-0 right-0 -mt-8 mr-6">
                                                    <img src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif" alt="" className="h-full w-full object-cover rounded-full overflow-hidden" />
                                                </div>
                                                <p className="text-base text-gray-600 leading-8">It really saves me time and effort. Chamer is exactly what our business has been lacking. Chamer was worth a fortune to my company.</p>
                                                <div className="flex justify-end mt-2">
                                                    <svg width={44} height={37} xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8.432 0c-2.339 0-4.329.821-5.97 2.463C.82 4.105 0 6.093 0 8.429c0 2.335.82 4.324 2.462 5.966 1.641 1.642 3.631 2.463 5.97 2.463 2.113 0 3.386.84 3.82 2.518.434 1.678.217 3.54-.65 5.583-.868 2.043-2.32 3.904-4.358 5.582C5.206 32.22 2.792 33.06 0 33.06V37c5.018 0 9.196-1.925 12.535-5.774 3.34-3.85 5.518-8.083 6.537-12.699 1.018-4.616.726-8.857-.878-12.725C16.591 1.934 13.337 0 8.432 0zm24.335 0c-2.34 0-4.33.821-5.97 2.463-1.642 1.642-2.462 3.63-2.462 5.966 0 2.335.82 4.324 2.462 5.966 1.64 1.642 3.63 2.463 5.97 2.463 2.113 0 3.396.84 3.848 2.518.453 1.678.236 3.54-.65 5.583-.887 2.043-2.34 3.904-4.358 5.582-2.019 1.679-4.443 2.518-7.272 2.518V37c5.018 0 9.196-1.925 12.535-5.774 3.339-3.85 5.518-8.083 6.536-12.699 1.02-4.616.727-8.857-.877-12.725C40.926 1.934 37.672 0 32.767 0z"
                                                            fill="#667EEA"
                                                            fillRule="evenodd"
                                                            fillOpacity=".15"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:w-1/3 lg:w-5/12 w-11/12 sm:w-3/5 md:w-5/12 xl:mb-0 mb-12">
                                        <div className="shadow-lg mx-3 xl:mx-3 sm:mx-0 lg:mx-0 rounded">
                                            <div className="bg-pink-700 pt-6 pb-6 pl-6 rounded-tl rounded-tr">
                                                <p className="text-xl text-white pb-1">Ashley Wilson</p>
                                                <p className="text-base text-pink-200">i-Intellect Inc</p>
                                            </div>
                                            <div className="pl-6 pr-6 pt-10 relative h-64">
                                                <div className="h-16 w-16 rounded-full bg-cover border-4 border-white absolute top-0 right-0 -mt-8 mr-6">
                                                    <img src="https://cdn.tuk.dev/assets/photo-1548958921-c5c0fe1b307d.jfif" alt="" className="h-full w-full object-cover rounded-full overflow-hidden" />
                                                </div>
                                                <p className="text-base text-gray-600 leading-8">It really saves me time and effort. Chamer is exactly what our business has been lacking. Chamer was worth a fortune to my company.</p>
                                                <div className="flex justify-end mt-2">
                                                    <svg width={44} height={37} xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8.432 0c-2.339 0-4.329.821-5.97 2.463C.82 4.105 0 6.093 0 8.429c0 2.335.82 4.324 2.462 5.966 1.641 1.642 3.631 2.463 5.97 2.463 2.113 0 3.386.84 3.82 2.518.434 1.678.217 3.54-.65 5.583-.868 2.043-2.32 3.904-4.358 5.582C5.206 32.22 2.792 33.06 0 33.06V37c5.018 0 9.196-1.925 12.535-5.774 3.34-3.85 5.518-8.083 6.537-12.699 1.018-4.616.726-8.857-.878-12.725C16.591 1.934 13.337 0 8.432 0zm24.335 0c-2.34 0-4.33.821-5.97 2.463-1.642 1.642-2.462 3.63-2.462 5.966 0 2.335.82 4.324 2.462 5.966 1.64 1.642 3.63 2.463 5.97 2.463 2.113 0 3.396.84 3.848 2.518.453 1.678.236 3.54-.65 5.583-.887 2.043-2.34 3.904-4.358 5.582-2.019 1.679-4.443 2.518-7.272 2.518V37c5.018 0 9.196-1.925 12.535-5.774 3.339-3.85 5.518-8.083 6.536-12.699 1.02-4.616.727-8.857-.877-12.725C40.926 1.934 37.672 0 32.767 0z"
                                                            fill="#667EEA"
                                                            fillRule="evenodd"
                                                            fillOpacity=".15"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </Slide>
                    </Slider>
                <div className="cursor-pointer flex justify-center pt-4 pb-8 sm:pt-8 md:pt-8 lg:pt-8 xl:pt-12">
                    <ButtonBack className="cursor-pointer focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={44} height={44} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#CBD5E0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="15 6 9 12 15 18" />
                        </svg>
                    </ButtonBack>
                    <ButtonNext className="cursor-pointer focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={44} height={44} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#CBD5E0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="9 6 15 12 9 18" />
                        </svg>
                    </ButtonNext>
                </div>
                </CarouselProvider>
            </div>
        </div>
    );
}

export default Testimonials;
