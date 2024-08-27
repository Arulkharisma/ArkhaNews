import { useState } from "react";

export default function EditNews({ news }) {
    console.log(news);

    // State untuk form input
    const [title, setTitle] = useState(news.title || '');
    const [author, setAuthor] = useState(news.author || '');
    const [category, setCategory] = useState(news.category || '');
    // const [image, setImage] = useState(null);
    const [description, setDescription] = useState(news.description || '');

    // Fungsi untuk menangani perubahan input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'title') setTitle(value);
        if (name === 'author') setAuthor(value);
        if (name === 'category') setCategory(value);
        if (name === 'description') setDescription(value);
    };

    // Fungsi untuk menangani perubahan file
    // const handleFileChange = (e) => {
    //     setImage(e.target.files[0]);
    // };

    // Fungsi untuk menangani pengiriman form
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('category', category);
        formData.append('description', description);
        // if (image) {
        //     formData.append('image_path', image); // Ganti 'image' dengan 'image_path'
        // }

        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        try {
            const response = await fetch(`/news/update/${news.id}`, {
                method: 'POST', // Gunakan method PUT untuk update
                body: formData,
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                    'Accept': 'application/json',
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Network response was not ok');
            }

            // Handle success response
            window.location.href = '/dashboard';
            // Optionally, you might want to redirect or update the UI

        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div className="bg-[#e5e7eb] h-svh px-10 max-[700px]:h-max">
            <h2 className="py-6 text-lg font-bold text-center ">Edit News</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center gap-4 mx-auto h max-[700px]:flex-col ">
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
                                    defaultValue={news.title}
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
                                    defaultValue={news.author}
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
                                    defaultValue={news.category}
                                    onChange={handleInputChange}
                                >
                                    <option value="" disabled>Pick one</option>
                                    <option value="Teknologi">Teknologi</option>
                                    <option value="Ekonomi">Ekonomi</option>
                                    <option value="Politik">Politik</option>
                                    <option value="Kesehatan">Kesehatan</option>
                                </select>
                            </label>
                            {/* <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Pick an image</span>
                                </div>
                                <input
                                    type="file"
                                    name="image"
                                    className="file-input file-input-bordered w-full"
                                    onChange={handleFileChange}
                                />
                            </label> */}
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
                                    defaultValue={news.description}
                                    onChange={handleInputChange}
                                ></textarea>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4 pb-8">
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>

    )
}
