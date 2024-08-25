const Footer = () =>{
    return(
        <footer className="bg-[#1f2937] w-full max-[833px]:">
            <div className="text-white flex mx-24 gap-24 py-12 max-[816px]:gap-10 max-[650px]:mx-16 max-[650px]:gap-8 max-[650px]:flex-row max-[800px]:flex-wrap max-[400px]:mx-15">
                <div className="flex flex-col gap-4 max-w-xl">
                    <img src="/logo-white.png" width="50px" alt="logo arkhanews" />
                    <h1 className="font-bold">Arkha News</h1>
                    <p className="text-sm font-thin">ArkaNews adalah platform berita yang menyajikan informasi terbaru dari berbagai kategori seperti teknologi, ekonomi, kesehatan, dan politik, dengan tampilan yang user-friendly dan kemudahan navigasi untuk mengakses konten berkualitas.</p>
                </div>
                <div>
                    <p className="font-bold mb-3 border-b-2 w-max">Product</p>
                    <div className="text-sm font-thin">
                        <ul>
                            <li className="hover:scale-105 transition-all duration-200"><a href="#">News</a></li>
                            <li className="hover:scale-105 transition-all duration-200"><a href="#">Premium News</a></li>
                            <li className="hover:scale-105 transition-all duration-200"><a href="#">Training</a></li>
                            <li className="hover:scale-105 transition-all duration-200"><a href="#">More Products</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className="font-bold mb-3 border-b-2 w-max">Company</p>
                    <div className="text-sm font-thin">
                        <ul>
                            <li className="hover:scale-105 transition-all duration-200"><a href="#">About Us</a></li>
                            <li className="hover:scale-105 transition-all duration-200"><a href="#">Contact</a></li>
                            <li className="hover:scale-105 transition-all duration-200"><a href="#">Privacy Policy</a></li>
                            <li className="hover:scale-105 transition-all duration-200"><a href="#">Terms of Service</a></li>
                            <li className="hover:scale-105 transition-all duration-200"><a href="#">Help</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                <p className="font-bold mb-3 border-b-2 w-max">Get In Touch</p>
                <div className="text-sm font-thin">
                    <ul>
                        <li className="hover:scale-105 transition-all duration-200"><a href="#">Twitter</a></li>
                        <li className="hover:scale-105 transition-all duration-200"><a href="#">Facebook</a></li>
                        <li className="hover:scale-105 transition-all duration-200"><a href="#">WhatsApp</a></li>
                        <li className="hover:scale-105 transition-all duration-200"><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="mx-24 text-white max-[650px]:mx-16">
                <hr className="border"/>
                <p className="text-center pb-12 mt-3">copyright &copy; 2024 - Arul Kharisma</p>
            </div>
        </footer>
    )
}

export default Footer;