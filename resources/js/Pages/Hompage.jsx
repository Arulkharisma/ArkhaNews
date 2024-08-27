import React from "react"
import Navbar from "@/Components/Navbar"
import CardRecomend from "@/Components/CardRecomend";
import CardNews from "@/Components/CardNews";
import { GoArrowRight } from "react-icons/go";
import Footer from "@/Components/Footer";
import moment from "moment";
import { Link } from "@inertiajs/react";

export default function Hompage(props) {
    console.log(props)
    return (
        <div className="scroll-smooth ">
            <Navbar user={props.auth.user} />
            {props.newshero.map((item) => (
                <div key={item.id} className="flex gap-2 bg-[#E4EFFF] h-screen px-24 bg bg-[url('/hero-icon.png')] bg-[length:800px_800px] bg-no-repeat bg-left mt-16 max-[850px]:px-10">
                    <div className="w-8/12 flex flex-col justify-center max-[620px]:w-full max-[1000px]:w-1/2">
                        <h3 className="font-thin border-l-2 border-[#1f2937] px-2 bg-gradient-to-r from-slate-100 to-slate-500 w-fit">Best Of Week</h3>
                        <p className="text-slate-500 font-thin mt-5">{item.category} | {moment(item.created_at).fromNow()}</p>
                        <h1 className="text-3xl font-extrabold w-2/4 my-4 max-[850px]:w-4/5 max-[1000px]:w-4/5">{item.title}</h1>
                        <p className="text-slate-500 font-thin">#Kesehatan #Hidup Sehat</p>
                        <Link href={`/news/${item.id}`}>
                            <button className="bg-[#1f2937] text-white px-5 py-3 rounded-3xl w-fit flex items-center mt-8 gap-2 hover:scale-110 hover:transition-all duration-200 ">Read News<GoArrowRight className="text-xl" /></button>
                        </Link>
                    </div>
                    <div className="skroll w-4/12 mt-24 mb-5 overflow-y-scroll pe-2 rounded-xl max-[620px]:hidden max-[1000px]:w-2/4">
                        <h3 className="font-bold text-xl mb-3">Recomended</h3>
                        <Link href={`/news/${item.id}`}>
                            <div className="card bg-base-100 image-full w-full shadow-sm">
                                <figure>
                                    <img
                                        src={`/storage/${item.image_path}`}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title mt-24">{item.title}</h2>
                                    <p className="line-clamp-3">{item.description}</p>
                                </div>
                            </div>
                        </Link>

                        <CardRecomend news={props} />
                    </div>
                </div>
            ))}


            <CardNews newslist={props.newsnew} tag="Berita Terbaru" />
            <CardNews newslist={props.news} tag="Semua Berita" />
            <Footer />
        </div>
    )
}