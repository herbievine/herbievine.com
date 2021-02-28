import { fullpageApi } from '@fullpage/react-fullpage'

interface Biography {
    api: fullpageApi
}

function Biography(props: Biography) {
    return (
        <div className="section flex justify-start items-center h-screen ml-8 sm:ml-12 md:ml-32 text-sm sm:text-2xl md:text-3xl dark:text-gray-100">
            <h1 className="mb-6 max-w-1/2">
                I'm a student at Highlands College, Jersey, studying Information
                Technology.
            </h1>
            <h1 className="max-w-1/2">
                I love creating & developing web apps. I've always been captured
                by the endless possibilities of the web and what it has to
                offer.
            </h1>
        </div>
    )
}

export default Biography
