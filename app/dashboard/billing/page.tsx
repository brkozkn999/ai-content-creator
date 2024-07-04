import React from 'react'

function billing() {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="flex justify-center items-center gap-4 sm:gap-8">
                <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm bg-white max-w-md">
                    <div className="p-6 sm:px-8">
                        <h2 className="text-lg font-medium text-gray-900 text-center">
                            Free
                            <span className="sr-only ">Plan</span>
                        </h2>

                        <p className="mt-2 sm:mt-4 text-center">
                            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 0$ </strong>
                            <span className="text-sm font-medium text-gray-600">/month</span>
                        </p>
                    </div>

                    <div className="p-6 sm:px-8">
                        <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>
                        <ul className="mt-2 space-y-2 sm:mt-4">
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-primary"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> <strong>10,000</strong> Words/Month </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-primary"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> <strong>+10</strong> Content Templates </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-primary"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> <strong>Unlimited</strong> Download & Copy </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-primary"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> <strong>1 Month</strong> of History </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm bg-white max-w-md">
                    <div className="p-6 sm:px-8">
                        <h2 className="text-lg font-medium text-gray-900 text-center">
                            Pro
                            <span className="sr-only">Plan</span>
                        </h2>

                        <p className="mt-2 text-gray-700 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <p className="mt-2 sm:mt-4 text-center">
                            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 30$ </strong>
                            <span className="text-sm font-medium text-gray-600">/month</span>
                        </p>

                        <a className="mt-4 block rounded border-2 border-primary bg-primary px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary sm:mt-6 ease-in-out duration-200"
                            href="#">
                            Get Started
                        </a>
                    </div>

                    <div className="p-6 sm:px-8">
                        <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>

                        <ul className="mt-2 space-y-2 sm:mt-4">
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-primary">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> <strong>1,000,000</strong> Words/Month </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-primary">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> <strong>+10</strong> Content Templates </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-primary"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> <strong>Unlimited</strong> Download & Copy </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-primary">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <span className="text-gray-700"> <strong>1 Year</strong> of History </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default billing