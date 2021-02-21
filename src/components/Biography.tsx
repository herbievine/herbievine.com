import React from 'react'
import { fullpageApi } from '@fullpage/react-fullpage'

interface Biography {
    api: fullpageApi
}

function Biography(props: Biography) {
    return (
        <div className="section flex justify-start items-center ml-8 sm:ml-16 md:ml-48 text-sm sm:text-2xl md:text-3xl dark:text-gray-100">
            <h1>
                I'm a student at Highlands<br/>
                College, Jersey, studying<br/>
                Information Technology.<br/>
                <br/>
                I love creating & developing<br/>
                web apps. I've always been<br/>
                captured by the endless<br/>
                possibilities of the web<br/>
                and what it has to offer.
            </h1>
        </div>
    )
}

export default Biography
