import React from 'react'
import { default as FullPageScrollingEffect } from '@fullpage/react-fullpage'
import Landing from './components/Landing'
import Biography from './components/Biography'
import Skills from './components/Skills'
import Socials from './components/Socials'
import Navigation from './components/Navigation'

function App() {
    return (
        <div className="">
            <Navigation />
            <FullPageScrollingEffect
                scrollOverflow={true}
                scrollingSpeed = {800}
                render={({ fullpageApi }) => {
                    return (
                        <div>
                            <Landing api={fullpageApi} />
                            <Biography api={fullpageApi} />
                            <Skills api={fullpageApi} />
                            <Socials api={fullpageApi} />
                        </div>
                    )
                }}
            />
        </div>
    )
}

export default App
