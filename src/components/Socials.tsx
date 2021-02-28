import { fullpageApi } from '@fullpage/react-fullpage'

interface Socials {
    api: fullpageApi
}

function Socials(props: Socials) {
    const socials = [
        {
            name: 'twitter',
            path: 'https://twitter.com/herbievine'
        },
        {
            name: 'linkedin',
            path: 'https://linkedin.com/in/herbievine'
        },
        {
            name: 'github',
            path: 'https://github.com/herbievine'
        },
        {
            name: 'fiverr',
            path: 'https://fiverr.com/herbievine'
        }
    ]

    return (
        <div className="section flex justify-start items-center h-screen ml-8 sm:ml-12 md:ml-32 text-sm sm:text-2xl md:text-3xl dark:text-gray-100">
            <h1 className="max-w-1/2">
                I've started to work on some freelancing on Fiverr. Please get
                in touch!
                <div className="grid grid-cols-2 grid-rows-2 grid-flow-row gap-y-6 mt-6">
                    {socials.map((value, index) => (
                        <a
                            key={index}
                            href={value.path}
                            target="_BLANK"
                            rel="noreferrer"
                            className="dark:text-gray-100"
                        >
                            <span className="animated-underline">
                                {value.name}
                            </span>
                        </a>
                    ))}
                </div>
            </h1>
        </div>
    )
}

export default Socials
