import LogoNavbar from '../logo';
export default function Navbar(props) {
    const { classname } = props;
    return (
        <div className="flex justify-between py-3 px-8 bg-transparent backdrop-blur fixed w-full z-10 items-center box-border shadow-lg">
            <LogoNavbar />
            <div className="flex space-x-7">
                <ul className="flex space-x-4 text-xl font-[700] text-yellow-600">
                    <li>
                        <a
                            href=""
                            className="hover:underline underline-offset-8"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href=""
                            className="hover:underline underline-offset-8"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href=""
                            className="hover:underline underline-offset-8"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                <button className="bg-yellow-600 text-white px-3 py-1 rounded font-bold text-white">
                    Get Started !
                </button>
            </div>
        </div>
    );
}
