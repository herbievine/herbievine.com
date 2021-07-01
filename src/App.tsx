import { useState } from 'react'
import {
  default as FullPageScrollingEffect,
  fullpageApi,
  Origin,
  Destination,
  Direction
} from '@fullpage/react-fullpage'
import Landing from './components/Landing'
import Biography from './components/Biography'
import Skills from './components/Skills'
import Socials from './components/Socials'
import Navigation from './components/Navigation'

function App() {
  const [scroll, setScroll] = useState<string>('')
  const [api, setApi] = useState<fullpageApi>()
  const [navigation, setNavigation] = useState<
    [Origin, Destination, Direction] | []
  >([])

  const handleOnLeave = (
    origin: Origin,
    destination: Destination,
    direction: Direction
  ) => {
    setNavigation([origin, destination, direction])
    scrollEffect(direction)
  }

  const scrollEffect = (direction: 'up' | 'down') => {
    setScroll(direction)

    setTimeout(() => {
      setScroll('')
    }, 800)
  }

  return (
    <div className="app bg-gray-100 dark:bg-gray-900">
      <Navigation api={api} onLeave={navigation} />
      <div className={scroll ? `scroll--${scroll}` : ''}>
        <FullPageScrollingEffect
          onLeave={(origin, destination, direction) =>
            handleOnLeave(origin, destination, direction)
          }
          scrollOverflow={true}
          scrollingSpeed={800}
          render={({ fullpageApi }) => {
            setApi(fullpageApi)
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
