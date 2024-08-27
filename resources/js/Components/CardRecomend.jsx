import { Link } from "@inertiajs/react";
import moment from "moment";

const CardRecomend = (props) => {
    console.log(props)
    return (
        <div>
            {props.news.newsnew.slice(0, 6).map((item) =>(
                <Link href={`/news/${item.id}`}>
                    <div key={item.id} className="h-36 flex gap-3 mt-4 shadow-md p-5 rounded-2xl bg-[#f7f9fb]">    
                        <div className="w-3/4">
                            <p className="font-thin text-slate-500 text-sm">{item.category} | {moment(item.created_at).fromNow()}</p>
                            <p className="line-clamp-3 text-lg">{item.title}</p>
                        </div>
                        <div className="w-1/4">
                            {/* <img className="rounded-xl" src={item.imgSrc} width="80px" height='80px' alt="" /> */}
                            <img src={`/storage/${item.image_path}`} className="w-full rounded-lg h-full object-cover" alt="News Image"/>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
export default CardRecomend;