import React from 'react'
import { fullpageApi } from '@fullpage/react-fullpage'

interface Landing {
    api: fullpageApi
}

function Landing(props: Landing) {
    return (
        <div className="section flex justify-start items-center md:ml-48 md:text-8xl">
            <h3>
                Hi,
                <br />
                I'm Herbie
            </h3>
        </div>
    )
}

export default Landing
