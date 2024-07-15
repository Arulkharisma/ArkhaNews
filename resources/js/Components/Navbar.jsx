
const Navbar = () => {

    return (
        <>
            <div className="navbar bg-[#E4EFFF] fixed top-0 px-24 py-3 flex justify-between z-40">
                <div className="">
                    <a className="btn btn-ghost text-xl"><img width='35px' src="/logo.png" className="" alt="" /> ArkhaNews</a>
                </div>
                <div className="">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li>
                            <details>
                                <summary>Category</summary>
                                <ul className="bg-[#E4EFFF] rounded-t-none p-2 z-50">
                                    <li><a>Teknologi</a></li>
                                    <li><a>Politik</a></li>
                                    <li><a>Ekonomi</a></li>
                                    <li><a>Kesehatan</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Contant</a></li>
                    </ul>
                </div>
                <div className="flex-none gap-3">
                    <div className="form-control">
                        <label className="input input-bordered flex items-center gap-2 h-10">
                            <input type="text" className="grow input bordered focus:border-none" placeholder="Search" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;