import React from 'react'
import { fullpageApi } from '@fullpage/react-fullpage'

interface Biography {
    api: fullpageApi
}

function Biography(props: Biography) {
    return (
        <div className="section flex justify-start items-center ml-8 sm:ml-16 md:ml-48 text-sm sm:text-2xl md:text-3xl dark:text-gray-100">
            <h1>
                Skills<br/>
                <br/>
                😍 TypeScript, Vue, Node.<br/>
                🙄 React, Nuxt.<br/>
                😬 Flutter, Dart
            </h1>
        </div>
    )
}

export default Biography
