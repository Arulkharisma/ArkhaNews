import { Link } from "@inertiajs/react";

const CardNews = ({newslist, tag}) => {
    return(
    <div className="mx-24 gap-4 my-24 max-[650px]:mx-10">
        <h3 className="text-2xl font-extrabold my-3">{tag}</h3>
        <div className="scrool flex gap-4 pb-4 cursor-default overflow-x-scroll">
            {newslist ? newslist.map((data, i) => {
                return (
                    <Link href={`/news/${data.id}`} key={i}>
                        <div className="max-w-80 rounded-xl shadow-md bg-[#f0f5fd] cursor-pointer" key={i}>
                            <img src={`/storage/${data.image_path}`} alt="News Image" className="rounded-t-xl w-full object-cover h-60"/>
                            <div className="py-4 px-5">
                            <p className="text-xl text font-bold text-center mb-6 line-clamp-2 hover:line-clamp-none">{data.title}</p>
                            {/* <p className="font-extralight mb-3">{data.author}</p> */}
                            <p className="mb-3 line-clamp-5">{data.description}</p>
                            <p className="font-extralight">Category: {data.category}</p>
                            </div>
                        </div>
                    </Link>
                )
            }) : <p>Tidak ada Berita</p>}
        </div>
    </div>
    ); 
}

export default CardNews;