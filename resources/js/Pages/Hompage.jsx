import React from "react"
import { Link, Head } from "@inertiajs/react"
import Navbar from "@/Components/Navbar"
import CardRecomend from "@/Components/CardRecomend";
import CardNews from "@/Components/CardNews";
import { GoArrowRight } from "react-icons/go";

export default function Hompage(props) {
    console.log(props)
    return (
        <div className="scroll-smooth">
            <Head title={props.title} />
            <Navbar />
            <div className="flex gap-2 h-screen px-24 bg-[#E4EFFF]">
                <div className="w-8/12 flex flex-col justify-center bg-[url('/hero-icon.png')] bg-[length:700px_700px] bg-no-repeat bg-right">
                    <h3 className="font-thin border-l-2 border-[#1f2937] px-2 bg-gradient-to-r from-slate-100 to-slate-500 w-fit">Best Of Week</h3>
                    <p className="text-slate-500 font-thin mt-5">Tech | 2 Hours ago</p>
                    <h1 className="text-3xl font-extrabold w-2/4 my-4">Top Analyst Placeat blanditiis veniam similique ut voluptatum corrupti.</h1>
                    <p className="text-slate-500 font-thin">#Web Developer #React Js</p>
                    <button className="bg-[#1f2937] text-white px-5 py-3 rounded-3xl w-fit flex items-center mt-8 gap-2 hover:scale-110 hover:transition-all duration-200 ">Read News<GoArrowRight className="text-xl" /></button>
                </div>
                <div className="skroll w-4/12 mt-24 mb-5 overflow-y-scroll pe-2 rounded-xl">
                    <h3 className="font-bold text-xl mb-3">Recomended</h3>
                    <div className="card bg-base-100 image-full w-full shadow-sm">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title mt-24">Shoes!</h2>
                            <p className="line-clamp-3">If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis porro ut ab dolorem explicabo neque corporis fugiat expedita libero, ad minima, aspernatur totam? Beatae provident quis veritatis pariatur repellendus quas!</p>
                        </div>
                    </div>
                    <CardRecomend />
                </div>
            </div>
            <CardNews newslist={props.newsnew} tag="Berita Terbaru" />
            <CardNews newslist={props.news} tag="Semua Berita" />
        </div>
    )
}