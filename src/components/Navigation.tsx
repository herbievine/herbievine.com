import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { fullpageApi, Origin, Destination, Direction } from '@fullpage/react-fullpage'
import { useTheme } from "react-hook-tailwind-darkmode"
import { FaRegMoon } from 'react-icons/fa'
import { HiOutlineSun } from 'react-icons/hi'

interface Navigation {
    api: fullpageApi | undefined
    onLeave: [Origin, Destination, Direction] | []
}

function Navigation(props: Navigation) {
    const { changeTheme, theme } = useTheme()
    const getCurrentIndex = (): number => props.api?.getActiveSection()?.index
    const [activeTab, setActiveTab] = useState<number | undefined>(getCurrentIndex())

    const springConfig = useSpring({
        from: { height: '0%' },
        to: { height: `${(activeTab ? activeTab + 1 : 1) * 25}%` }
    })

    useEffect(() => {
        if (props.onLeave[2]) setActiveTab(props.onLeave[2] === 'up'
            ? getCurrentIndex() - 1
            : getCurrentIndex() + 1)
    }, [props.onLeave])

    return (
        <>
            <div className="absolute h-screen z-50 left-0 top-1/2 transform -translate-y-2/4 flex flex-col justify-center items-center">
                <animated.div className="absolute top-0 w-4 md:w-6 lg:w-6 xl:w-6 bg-green-500" style={springConfig} />
            </div>
            <div className="absolute h-80 z-50 right-14 top-1/2 transform -translate-y-2/4 flex flex-col justify-center items-center">
                <animated.div className="absolute rounded-lg top-0 w-2 md:w-6 lg:w-6 xl:w-6 bg-black dark:bg-gray-100" style={springConfig} />
            </div>
            <div className="fixed z-50 right-12 bottom-10" onClick={() => changeTheme()}>
                {theme === 'dark' ? (
                    <HiOutlineSun fontSize={24} stroke={theme === 'dark' ? 'white' : 'black'} />
                ) : (
                    <FaRegMoon fontSize={20} stroke={theme === 'light' ? 'black' : 'white'} />
                )}
            </div>
        </>
    )
}

export default Navigation
