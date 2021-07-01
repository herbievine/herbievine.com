import { StrictMode } from 'react'
import { render } from 'react-dom'
import './css/index.css'
import App from './App'
import * as serviceWorkerRegistration from './plugins/serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

function noConsole() {}

if (process.env.NODE_ENV === 'production') {
  console.log(
    '%cWell hello there :)',
    'background: black; color: white; padding: 10px;'
  )

  console.log = noConsole
  console.warn = noConsole
  console.error = noConsole
}

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)

serviceWorkerRegistration.register()
reportWebVitals()
