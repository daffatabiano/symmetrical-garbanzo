import Link from 'next/link';
import LogoNavbar from '../../elements/logo';
import Button from '@/components/button';
import { useEffect, useState } from 'react';
export default function Navbar(props) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const { classname } = props;
    return (
        <div
            className={
                scrollPosition > 0
                    ? `flex justify-between py-3 px-8 bg-[rgba(255,255,255,0.2)] backdrop-blur fixed w-full z-10 items-center box-border shadow-xl`
                    : `flex justify-between py-3 px-8 bg-transparent fixed w-full z-10 items-center`
            }
        >
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
                            Menu
                        </a>
                    </li>
                </ul>
                <Button>Get Started</Button>
            </div>
        </div>
    );
}
