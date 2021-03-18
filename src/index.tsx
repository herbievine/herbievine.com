import { StrictMode } from 'react'
import { render } from 'react-dom'
import './css/index.css'
import App from './App'
import * as serviceWorkerRegistration from './plugins/serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root')
)

serviceWorkerRegistration.register()
reportWebVitals()

// test
console.log(process.env.NODE_ENV)
