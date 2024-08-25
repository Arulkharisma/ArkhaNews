import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link href="/" className='btn btn-ghost text-xl'>
                    <ApplicationLogo className="w-10 h-10 fill-current text-gray-500" /> Arkha News
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-14 py-28 bg-white shadow-md overflow-hidden sm:rounded-lg sm:mx-10">
                {children}
            </div>
        </div>
    );
}
