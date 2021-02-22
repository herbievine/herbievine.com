import React from 'react'
import { useTheme } from 'react-hook-tailwind-darkmode'
import { FaRegMoon } from 'react-icons/fa'
import { HiOutlineSun } from 'react-icons/hi'

function Socials() {
    const { changeTheme, theme } = useTheme()

    return (
        <div
            className="fixed z-50 right-10 bottom-10"
            onClick={() => changeTheme()}
        >
            {theme === 'dark' ? (
                <HiOutlineSun fontSize={24} stroke={theme === 'dark' ? 'white' : 'black'} />
            ) : (
                <FaRegMoon fontSize={20} stroke={theme === 'light' ? 'black' : 'white'} />
            )}
        </div>
    )
}

export default Socials
