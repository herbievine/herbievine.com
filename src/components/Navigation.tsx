import React from 'react'
import { fullpageApi } from '@fullpage/react-fullpage'

interface Navigation {
    api: fullpageApi
}

function Navigation(props: Navigation) {
    return (
        <div>
            <h3>Navigation</h3>
        </div>
    )
}

export default Navigation
