import React from 'react'
import { fullpageApi } from '@fullpage/react-fullpage'

interface Socials {
    api: fullpageApi
}

function Socials(props: Socials) {
    return (
        <div className="section flex justify-start items-center md:ml-48 md:text-3xl">
            <h3>
                Please get in touch!<br/>
                <br/>
                twitter      github      linkedin
            </h3>
        </div>
    )
}

export default Socials
