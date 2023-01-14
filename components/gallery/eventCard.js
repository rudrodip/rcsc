export default function EventCard({ photos, title, desc, router, url }) {
    return (
        <div>
            <section className="overflow-hidden">
                <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                    <div className="flex w-full mb-20 flex-wrap">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">{title}</h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">{desc}</p>
                    </div>
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={photos[0]} />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={photos[1]} />
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={photos[2]} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={photos[3]} />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={photos[4]} />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={photos[5]} />
                            </div>
                        </div>
                    </div>
                    <button
                        className="px-6 py-2 my-3 leading-5 text-white transition-all duration-200 transform bg-gradient-to-r from-blue-400 to-cyan-400 rounded-md hover:scale-110 focus:outline-none focus:bg-gray-600"
                        onClick={() => router.push(url)}
                    >See more!
                    </button>
                </div>
            </section>
        </div>
    )
}