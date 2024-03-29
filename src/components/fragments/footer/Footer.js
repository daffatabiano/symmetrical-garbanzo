import Link from 'next/link';
import { LogoPicture } from '../../elements/logo';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <div>
            <div className="flex justify-between px-16 py-10 text-white bg-[#269faa]">
                <div>
                    <LogoPicture width={'w-28'} />
                    <ul className="space-y-3">
                        <h1 className="font-bold text-2xl">Useful Links</h1>
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/'}>About</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col space-x-2 text-left p-2">
                    <ul className="space-y-3">
                        <h1 className="font-bold text-2xl">Get Started</h1>
                        <li>
                            <Link href={'/'}>Start</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Documentation</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Tutorial</Link>
                        </li>
                    </ul>
                    <ul className="space-y-3">
                        <h1 className="font-bold text-2xl">Legal</h1>
                        <li>
                            <Link href={'/'}>Privacy</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Terms</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Policy</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col space-x-2 text-left p-2">
                    <ul className="space-y-3">
                        <h1 className="font-bold text-2xl">Support</h1>
                        <li>
                            <Link href={'/'}>Help Center</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Contact Us</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Status</Link>
                        </li>
                        <li>
                            <Link href={'/'}>API</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Training</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Forums</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Security</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-4 my-10 items-start justify-center">
                    <h1 className="text-2xl font-bold">Give us a shout!</h1>
                    <p>have a question?</p>
                    <form action="">
                        <input
                            className="p-2 rounded-xl w-72"
                            type="text"
                            placeholder="type here . . ."
                        />
                        <button className="bg-[#269f] text-white p-2 rounded-xl">
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <div className="bg-[#269f] text-white justify-around p-3 flex items-center space-x-7">
                <p className="font-semibold">
                    &copy; {year}|{' '}
                    <span>
                        {' '}
                        Designed by
                        <Link
                            href={'https://github.com/DaffaTabiano'}
                            className="text-[#269faa] font-bold text-l"
                        >
                            {' '}
                            Daffa Tabiano
                        </Link>
                    </span>{' '}
                    | All Rights Reserved
                </p>
                <p className="text-sm font-thin">
                    This site is protected by reCAPTCHA and the Google Privacy
                    Policy and Terms of Service apply
                </p>
            </div>
        </div>
    );
}
