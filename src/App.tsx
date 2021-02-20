import React, {useEffect, useState} from 'react'
import { default as FullPageScrollingEffect } from '@fullpage/react-fullpage'
import Landing from './components/Landing'
import Biography from './components/Biography'
import Skills from './components/Skills'
import Socials from './components/Socials'
import Navigation from './components/Navigation'

function App() {
    const [scroll, setScroll] = useState('')

    const scrollEffect = (direction: 'up' | 'down') => {
        setScroll(direction)

        setTimeout(() => {
            setScroll('')
        }, 800)
    }

    return (
        <div className="app">
            <div className={scroll ? `scroll--${scroll}` : ''}>
                <Navigation />
                <FullPageScrollingEffect
                    onLeave={(o, d, direction) => scrollEffect(direction)}
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
        </div>
    )
}

export default App
