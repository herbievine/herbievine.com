import { fullpageApi } from '@fullpage/react-fullpage'

interface Landing {
    api: fullpageApi
}

function Landing(props: Landing) {
    return (
        <div className="section w-screen flex justify-start items-center ml-8 sm:ml-12 md:ml-32 text-4xl sm:text-6xl md:text-8xl dark:text-gray-100">
            <h1 className="max-w-3/4">
                Hi,
                <br />
                I'm <span className="animated-underline">Herbie</span>
            </h1>
        </div>
    )
}

export default Landing
