import Link from 'next/link';
import LogoNavbar from '../logo';
import Button from '@/components/button';
export default function Navbar(props) {
    const { classname } = props;
    return (
        <div className="flex justify-between py-3 px-8 bg-transparent backdrop-blur fixed w-full z-10 items-center box-border shadow-lg">
            <LogoNavbar />
            <div className="flex space-x-7">
                <ul className="flex space-x-4 text-xl font-[700] text-yellow-600">
                    <li>
                        <Link
                            href={'/'}
                            className="hover:underline underline-offset-8"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/about'}
                            className="hover:underline underline-offset-8"
                        >
                            About
                        </Link>
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
                <Button>Get Started</Button>
            </div>
        </div>
    );
}
