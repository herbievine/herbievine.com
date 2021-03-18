import { fullpageApi } from '@fullpage/react-fullpage'

interface Biography {
    api: fullpageApi
}

function Biography(props: Biography) {
    return (
        <div className="section flex justify-start items-center h-screen ml-8 sm:ml-12 md:ml-32 text-sm sm:text-2xl md:text-3xl dark:text-gray-100">
            <h1 className="mb-6 max-w-1/2">
                I like to use Vue and React for my front-end apps. I often use
                Express & Node for any back-end related work.
            </h1>
            <h1 className="max-w-1/2">
                I'm currently focusing on extending my knowledge of React by
                using Next with GraphQL, Apollo and PostgreSQL
            </h1>
        </div>
    )
}

export default Biography
