import React from 'react'
import { fullpageApi } from '@fullpage/react-fullpage'

interface Biography {
    api: fullpageApi
}

function Biography(props: Biography) {
    return (
        <div className="section flex justify-start items-center md:ml-48 md:text-3xl">
            <h3>
                I'm a student at Highlands College,<br/>
                Jersey, studying Information Technology.<br/>
                <br/>
                I love creating & developing web apps.<br/>
                I've always been captured by the endless<br/>
                possibilities of the web and what it has to offer.
            </h3>
        </div>
    )
}

export default Biography
