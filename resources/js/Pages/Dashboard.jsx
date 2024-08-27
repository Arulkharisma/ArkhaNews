import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { data } from 'autoprefixer';

export default function Dashboard({ auth, news }) {
    console.log(news)

    // State untuk mengelola apakah halaman Add News sedang aktif
    const [showAddNews, setShowAddNews] = useState(false);

    // State untuk form input
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const [description, setdescription] = useState('');
    const [isNotif, setIsNotif] = useState(false);

    // Fungsi untuk menangani tombol klik Add News dan toggle antara dua halaman
    const handleAddNewsClick = () => {
        setShowAddNews(!showAddNews); // Toggle state
    };

    // Fungsi untuk menangani perubahan input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'title') setTitle(value);
        if (name === 'author') setAuthor(value);
        if (name === 'category') setCategory(value);
        if (name === 'description') setdescription(value);
    };

    // Fungsi untuk menangani perubahan file
    const handleFileChange = (e) => {
        setImage(e.target.files[0]); // Mengambil file dari input
    };

    // Fungsi untuk menangani pengiriman form
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        try {
            const response = await fetch('/news', {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                    'Accept': 'application/json', // Minta respons dalam format JSON
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Coba membaca respons sebagai teks untuk debugging
            const responseText = await response.text();
            console.log('Response Text:', responseText);

            // Jika respons adalah JSON, parsing respons
            const data = JSON.parse(responseText);
            console.log('Success:', data);
            console.log(data.message)


            setIsNotif(true)
            setTimeout(() => {
                setIsNotif(false);
            }, 1000);
             setTimeout(() =>{
                window.location.href = '/dashboard';
            }, 1000)
            // setAuthor('')
            // setTitle('')
            // setdescription('')
            // setCategory('')

        } catch (error) {
            console.error('Error:', error);
        }

    };

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this news?')) {
            const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

            try {
                const response = await fetch(`/news/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'X-CSRF-TOKEN': csrfToken,
                        'Accept': 'application/json', // Minta respons dalam format JSON
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                // Coba membaca respons sebagai teks untuk debugging
                const responseText = await response.text();
                console.log('Response Text:', responseText);

                // Jika respons adalah JSON, parsing respons
                const data = JSON.parse(responseText);
                console.log('Success:', data);

                // Segarkan halaman setelah berhasil dihapus
                window.location.reload();

            } catch (error) {
                console.error('Error:', error);
            }
        }
    };


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={!showAddNews ? (
                <button
                    className="btn btn-active btn-neutral flex"
                    onClick={handleAddNewsClick}
                >
                    Add News
                </button>
            ) : (
                <button
                    className="btn btn-active btn-neutral flex"
                    onClick={handleAddNewsClick}
                >
                    Dashboard
                </button>
            )}
        >
            <Head title="Dashboard" />

            <div className="py-5 mx-12 max-[700px]:mx-8">
                {isNotif && <div role="alert" className="alert alert-success w-max mb-3 mx-auto ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 shrink-0 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Berita Berhasil Dibuat</span>
                </div>
                }
                {/* Render halaman Add News jika tombol diklik */}
                {showAddNews ? (
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-center gap-4 mx-auto max-[700px]:flex-col">
                            <div className="bg-white w-[35rem] shadow-sm rounded-lg max-[700px]:w-full">
                                <div className="p-6 text-gray-900">
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">News Title</span>
                                        </div>
                                        <input
                                            type="text"
                                            name="title"
                                            placeholder="Enter title"
                                            className="input input-bordered w-full"
                                            value={title}
                                            onChange={handleInputChange}
                                        />
                                    </label>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Author</span>
                                        </div>
                                        <input
                                            type="text"
                                            name="author"
                                            placeholder="Enter your name"
                                            className="input input-bordered w-full"
                                            value={author}
                                            onChange={handleInputChange}
                                        />
                                    </label>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Category</span>
                                        </div>
                                        <select
                                            name="category"
                                            className="select select-bordered"
                                            value={category}
                                            onChange={handleInputChange}
                                        >
                                            <option value="" disabled>Pick one</option>
                                            <option value="Teknologi">Teknologi</option>
                                            <option value="Ekonomi">Ekonomi</option>
                                            <option value="Politik">Politik</option>
                                            <option value="Kesehatan">Kesehatan</option>
                                        </select>
                                    </label>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Pick an image</span>
                                        </div>
                                        <input
                                            type="file"
                                            name="image"
                                            className="file-input file-input-bordered w-full"
                                            onChange={handleFileChange}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="bg-white w-full min-w-11 shadow-sm rounded-lg">
                                <div className="p-6 text-gray-900">
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">News description</span>
                                        </div>
                                        <textarea
                                            name="description"
                                            className="textarea textarea-bordered w-full h-96"
                                            placeholder="Enter description"
                                            value={description}
                                            onChange={handleInputChange}
                                        ></textarea>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                ) : (
                    // Render konten utama Dashboard jika Add News tidak ditampilkan
                    <>
                        <div className="text-center mb-4 font-bold">
                            <h3>Welcome to your Dashboard!</h3>
                        </div>
                        <div className="flex gap-4 justify-center flex-wrap">
                            {news.map((item) => (
                                <div key={item.id} className="w-64 rounded-lg shadow-md bg-[#f0f5fd] hover:scale-105 transition-all duration-300 max-[608px]:w-52 max-[512px]:w-72">
                                    <img src={`/storage/${item.image_path}`} className="rounded-t-lg w-full object-cover h-52" alt="" />
                                    <div className="p-4">
                                        <h2 className="text-lg font-bold line-clamp-2 mb-5">{item.title}</h2>
                                        <div className='flex gap-4 text-white'>
                                            <Link href={route('edit.news', { id: item.id })} method='get' as='button'><button className='btn btn-success text-white'>Edit <FaRegEdit /></button></Link>
                                            <button onClick={() => handleDelete(item.id)} className='btn btn-error text-white'>Delete<RiDeleteBin6Line /></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>

                )}
            </div>
        </AuthenticatedLayout>
    );
}
