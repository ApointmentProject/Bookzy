import { Link } from 'react-router-dom'
import Navigation from '../navbar/Navigation';
import { IoIosCalendar } from "react-icons/io";

export default function Header() {
    return (
        <header
            className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[95%] bg-white bg-opacity-20 backdrop-blur-lg rounded-b-full px-6 py-3 shadow-lg z-50 transition-colors duration-500 ease-in-out">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-sm font-semibold hover:underline md:text-lg text-black"
                    >
                        <IoIosCalendar className="text-2xl text-black" />
                        <span>ScheduleSync</span>
                    </Link>
                </div>
                <Navigation />
            </div>
        </header>
    );
}
