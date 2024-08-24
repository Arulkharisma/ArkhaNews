import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const NewsDetail = ({ news }) => {
     // URL yang akan di-share
    const shareUrl = `${window.location.origin}/news/${news.id}`;
    const shareText = encodeURIComponent(news.title);

    return (
        <>
            <Navbar/>
            <div className="mx-96 my-[4.5rem] pt-8 max-sm:mx-12 max-md:mx-20 max-lg:mx-28 max-[463px]:mx-12 max-[640px]:mx-20">
                <h1 className="text-3xl font-bold mb-4 text-center">{news.title}</h1>
                <img src="/sample2.webp" alt="" className="m-auto rounded-xl mt-7 mb-3"/>
                <p className="text-gray-600 mb-4 text-center">Category: {news.category}</p>
                <p dangerouslySetInnerHTML={{ __html: news.description }} className="text-lg"></p>
                <p className="mt-10 font-extrabold">Penulis: {news.author}</p>
                <div className="fixed top-1/3 left-0" >
                    <div className="flex flex-col gap-2 absolute text-2xl bg-[#E4EFFF] p-4 rounded-r-2xl max-[463px]:p-2">
                        <CiShare2 className="text-1xl mb-1" />
                        <a
                            href={`https://wa.me/?text=${encodeURIComponent(shareText)}%20${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:scale-125 transition-all duration-200"
                        >
                            <FaWhatsapp />
                        </a>
                        <a
                            href={`https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-700 hover:scale-125 transition-all duration-200"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black-400 hover:scale-125 transition-all duration-200"
                        >
                            <FaXTwitter />
                        </a>
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:scale-125 transition-all duration-200"
                        >
                            <FaFacebookF />
                        </a>
                    </div>
                </div>
            </div>
           
            <Footer/>
        </>
    );
};

export default NewsDetail;
