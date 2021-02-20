import React from 'react'
import { fullpageApi } from '@fullpage/react-fullpage'

function Navigation() {
    const api: fullpageApi = window.fullpage_api

    return (
        <div className="fixed z-50 right-10 top-1/2 flex flex-col justify-start items-center">
            <p onClick={() => api.getActiveSection()}>Active</p>
            <p onClick={() => api.moveTo(1, 0)}>one</p>
            <p onClick={() => api.moveTo(2, 0)}>two</p>
            <p onClick={() => api.moveTo(3, 0)}>three</p>
            <p onClick={() => api.moveTo(4, 0)}>four</p>
        </div>
    )
}

export default Navigation
