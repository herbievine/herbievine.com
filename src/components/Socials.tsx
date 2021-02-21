import React from 'react'
import { fullpageApi } from '@fullpage/react-fullpage'

interface Socials {
    api: fullpageApi
}

function Socials(props: Socials) {
    return (
        <div className="section flex justify-start items-center ml-8 sm:ml-16 md:ml-48 text-sm sm:text-2xl md:text-3xl dark:text-gray-100">
            <h1>
                Please get in touch!<br/>
                <br/>
                twitter      github      linkedin
            </h1>
        </div>
    )
}

export default Socials
