import { Link } from "@inertiajs/react";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import ResponsiveNavLink from "./ResponsiveNavLink";

const Navbar = ({ user }) => {
    // console.log(user)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <div className="navbar bg-[#E4EFFF] fixed top-0 px-24 py-3 flex justify-between z-40 max-[970px]:px-5">
                <div className="">
                    <Link href="/" className="btn btn-ghost text-xl"><img width='35px' src="/logo.png" className="" alt="" /> ArkhaNews</Link>
                </div>
                <div className="max-[813px]:hidden">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/">Home</Link></li>
                        <li>
                            <details>
                                <summary>Category</summary>
                                <ul className="bg-[#E4EFFF] rounded-t-none p-2 z-50">
                                    <li><Link href="/category/teknologi">Teknologi</Link></li>
                                    <li><Link href="/category/politik">Politik</Link></li>
                                    <li><Link href="/category/ekonomi">Ekonomi</Link></li>
                                    <li><Link href="/category/kesehatan">Kesehatan</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><a href="https://www.linkedin.com/in/arulkharisma/" target="_blank" rel="noopener noreferrer">Contact</a></li>
                    </ul>
                </div>
                <div className="flex-none gap-3 max-[813px]:hidden">
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
                            <div className="ring-primary ring-offset-base-100 w-9 rounded-full ring ring-offset-1">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {!user ?
                                <>
                                    <li><Link href={route('login')} as="button">Login</Link></li>
                                    <li><Link href={route('register')} as="button">Register</Link></li>
                                </>
                                :
                                <>
                                    {/* Tampilkan link Dashboard hanya jika user adalah admin */}
                                    {user.name === 'admin' && (
                                        <li>
                                            <Link href={route('dashboard')} as="button" className="justify-between">
                                                Dashboard
                                                <span className="badge">New</span>
                                            </Link>
                                        </li>
                                    )}
                                    <li><Link as="button">Profile</Link></li>
                                    <li><Link method="post" href={route('logout')} as="button">Logout</Link></li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
                <div className="min-[813px]:hidden flex items-center">
                    <button onClick={toggleMenu} className="btn btn-ghost text-xl font-bold"> <RiMenu3Fill />
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="bg-[#cfdef5] p-4 fixed w-full z-50">
                    <ul className="menu menu-vertical p-2">
                        <li><Link href="/">Home</Link></li>
                        <li>
                            <details>
                                <summary>Category</summary>
                                <ul className="bg-[#E4EFFF] p-2 rounded-box z-50">
                                    <li><Link href="/category/teknologi">Teknologi</Link></li>
                                    <li><Link href="/category/politik">Politik</Link></li>
                                    <li><Link href="/category/ekonomi">Ekonomi</Link></li>
                                    <li><Link href="/category/kesehatan">Kesehatan</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">Contact</a></li>
                    </ul>
                    <div className="flex-none justify-between gap-3 px-5">
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
                        <div className="dropdown dropdown-bottom m-auto flex justify-center mt-3">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="ring-primary ring-offset-base-100 w-9 rounded-full ring ring-offset-1">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {!user ?
                                    <>
                                        <li><Link href={route('login')} as="button">Login</Link></li>
                                        <li><Link href={route('register')} as="button">Register</Link></li>
                                    </>
                                    :
                                    <>
                                        {/* Tampilkan link Dashboard hanya jika user adalah admin */}
                                        {user.name === 'admin' && (
                                            <li>
                                                <Link href={route('dashboard')} as="button" className="justify-between">
                                                    Dashboard
                                                    <span className="badge">New</span>
                                                </Link>
                                            </li>
                                        )}
                                        <li><Link as="button">Profile</Link></li>
                                        <li><Link method="post" href={route('logout')} as="button">Logout</Link></li>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar;