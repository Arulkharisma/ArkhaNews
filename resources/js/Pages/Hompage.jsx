import React from "react"
import Navbar from "@/Components/Navbar"
import CardRecomend from "@/Components/CardRecomend";
import CardNews from "@/Components/CardNews";
import { GoArrowRight } from "react-icons/go";
import Footer from "@/Components/Footer";

export default function Hompage(props) {
    console.log(props)
    return (
        <div className="scroll-smooth ">
            <Navbar />
            <div className="flex gap-2 bg-[#E4EFFF] h-screen px-24 bg bg-[url('/hero-icon.png')] bg-[length:800px_800px] bg-no-repeat bg-left mt-16 max-[850px]:px-10">
                <div className="w-8/12 flex flex-col justify-center max-[620px]:w-full">
                    <h3 className="font-thin border-l-2 border-[#1f2937] px-2 bg-gradient-to-r from-slate-100 to-slate-500 w-fit">Best Of Week</h3>
                    <p className="text-slate-500 font-thin mt-5">Tech | 2 Hours ago</p>
                    <h1 className="text-3xl font-extrabold w-2/4 my-4 max-[850px]:w-4/5">Top Analyst Placeat blanditiis veniam similique ut voluptatum corrupti.</h1>
                    <p className="text-slate-500 font-thin">#Web Developer #React Js</p>
                    <button className="bg-[#1f2937] text-white px-5 py-3 rounded-3xl w-fit flex items-center mt-8 gap-2 hover:scale-110 hover:transition-all duration-200 ">Read News<GoArrowRight className="text-xl" /></button>
                </div>
                <div className="skroll w-4/12 mt-24 mb-5 overflow-y-scroll pe-2 rounded-xl max-[620px]:hidden">
                    <h3 className="font-bold text-xl mb-3">Recomended</h3>
                    <div className="card bg-base-100 image-full w-full shadow-sm">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
            <CardNews newslist={props.newsnew} tag="Berita Terbaru"/>
            <CardNews newslist={props.news} tag="Semua Berita" />
            <Footer />
        </div>
    )
}