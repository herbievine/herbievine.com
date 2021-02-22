import React from 'react'
import { fullpageApi } from '@fullpage/react-fullpage'

interface Landing {
    api: fullpageApi
}

function Landing(props: Landing) {
    return (
        <div className="section flex justify-start items-center ml-8 sm:ml-16 md:ml-48 text-4xl sm:text-6xl md:text-8xl dark:text-gray-100">
            <h1>
                Hi,
                <br />
                I'm <span className="animated-underline">Herbie</span>
            </h1>
        </div>
    )
}

export default Landing
