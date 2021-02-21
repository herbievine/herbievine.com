import React, {useEffect, useState} from 'react'
import { fullpageApi } from '@fullpage/react-fullpage'

interface Navigation {
    api: fullpageApi | undefined
}

function Navigation(props: Navigation) {
    const [activeTab, setActiveTab] = useState<number | undefined>(props.api?.getActiveSection()?.index)
    const numberOfTabs = 4

    // {activeTab === 0 ? 'green' : 'none'}

    useEffect(() => console.log(activeTab), [activeTab])
    useEffect(() => setActiveTab(props.api?.getActiveSection()?.index), [props.api?.getActiveSection()?.index])

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
                                fill={activeTab === index ? 'green' : 'none'}
                                stroke="currentColor"
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
                                    stroke="currentColor"
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
        </div>
    )
}

export default Navigation
