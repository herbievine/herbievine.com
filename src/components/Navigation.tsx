import React, { useEffect, useState } from 'react'
import { fullpageApi } from '@fullpage/react-fullpage'
import { useTheme } from "react-hook-tailwind-darkmode"
import { FaRegMoon } from 'react-icons/fa'
import { HiOutlineSun } from 'react-icons/hi'

interface Navigation {
    api: fullpageApi | undefined
}

function Navigation(props: Navigation) {
    const numberOfTabs = 4
    const { changeTheme, theme } = useTheme()

    const getCurrentIndex = () => props.api?.getActiveSection()?.index

    const [activeTab, setActiveTab] = useState<number | undefined>(getCurrentIndex())

    useEffect(() => setActiveTab(getCurrentIndex()), [getCurrentIndex()])

    return (
        <div className="fixed z-50 right-10 top-1/2 transform -translate-y-2/4 flex flex-col justify-center items-center">
            <div>
                {[...Array(numberOfTabs)].map((value, index) => {
                    let isLast = index === numberOfTabs - 1

                    return (
                        <div
                            onClick={() => props.api?.moveTo(index + 1, 0)}
                            key={index}
                        >
                            <svg
                                className="w-6 h-6"
                                fill={activeTab === index ? theme === 'light' ? 'black' : 'white' : 'none'}
                                stroke={theme === 'light' ? 'black' : 'white'}
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="4"
                                    d="M13 01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            {!isLast &&
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke={theme === 'light' ? 'black' : 'white'}
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="4"
                                        d="M 12,3 V 20"
                                    />
                                </svg>
                            }
                        </div>
                    )
                })}
            </div>
            <div className="mt-12" onClick={() => changeTheme()}>
                {theme === 'dark' ? (
                    <HiOutlineSun fontSize={24} stroke={theme === 'dark' ? 'white' : 'black'} />
                ) : (
                    <FaRegMoon fontSize={20} stroke={theme === 'light' ? 'black' : 'white'} />
                )}
            </div>
        </div>
    )
}

export default Navigation
