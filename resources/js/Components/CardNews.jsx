const CardNews = ({newslist, tag}) => {
    return(
    <div className="mx-24 gap-4 my-24">
        <h3 className="text-2xl font-extrabold my-3">{tag}</h3>
        <div className="scrool flex gap-4 pb-4 cursor-default overflow-x-scroll">
            {newslist ? newslist.map((data, i) => {
                return (
                    <div className="min-w-72 pt-2 px-3 rounded-lg shadow-md bg-[#f0f5fd] max-sm:min-w-56 cursor-pointer" key={i}>
                        <img src="/sample.jpg" alt="" srcset="" width='100' height='100' />
                        <p className="text-xl text font-bold text-center mb-6 line-clamp-2 hover:line-clamp-none">{data.title}</p>
                        {/* <p className="font-extralight mb-3">{data.author}</p> */}
                        <p className="mb-3 line-clamp-5">{data.description}</p>
                        <p className="font-extralight">Category: {data.category}</p>
                    </div>
                )
            }) : <p>Tidak ada Berita</p>}
        </div>
    </div>
    ); 
}

export default CardNews;