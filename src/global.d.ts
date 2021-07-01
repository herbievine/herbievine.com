import { fullpageApi } from '@fullpage/react-fullpage'

declare global {
  interface Window {
    fullpage_api: fullpageApi
  }
}
