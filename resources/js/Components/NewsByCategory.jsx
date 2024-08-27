import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "@inertiajs/react";

const NewsByCategory = ({ news, title, auth }) => {
    console.log(auth)
    return (
        <>
            <Navbar user={auth}/>
            <div className="mx-24 py-14 mt-16 max-[720px]:mx-10 max-[345px]:mx-5">
                <h1 className="text-3xl font-bold mb-4 text-center">{title}</h1>
                <div className="flex gap-4 justify-center flex-wrap">
                    {news.data.length > 0 ? news.data.map((item) => (
                        <div key={item.id} className="w-64 rounded-lg shadow-md bg-[#f0f5fd] hover:scale-105 transition-all duration-300 max-[608px]:w-52 max-[512px]:w-72">
                            <Link href={`/news/${item.id}`} className="cursor-pointer "> 
                                <img src={`/storage/${item.image_path}`} className="rounded-t-lg" alt="" />
                                <div className="p-4">
                                    <h2 className="text-xl font-bold line-clamp-2">{item.title}</h2>
                                    <p className="mb-3 line-clamp-4">{item.description}</p>
                                    <p className="font-extralight">Category: {item.category}</p>
                                </div>
                            </Link>
                        </div>
                    )) : (
                        <p className="text-center ">No news available in this category.</p>
                    )}
                </div>
                <div className="flex justify-center mt-8">
                    {news.links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url}
                            className={`px-3 py-2 mx-1 hover:font-extrabold hover:text-blue-700 ${link.active ? 'font-bold text-white bg-[#1f2937] rounded-md' : ''}`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default NewsByCategory;


