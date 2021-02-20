import React from 'react'
import { fullpageApi } from '@fullpage/react-fullpage'

interface Biography {
    api: fullpageApi
}

function Biography(props: Biography) {
    return (
        <div className="section flex justify-start items-center md:ml-48 md:text-3xl">
            <h3>
                Skills<br/>
                <br/>
                😍 TypeScript, Vue, Node.<br/>
                🙄 React, Nuxt.<br/>
                😬 Flutter, Dart
            </h3>
        </div>
    )
}

export default Biography
