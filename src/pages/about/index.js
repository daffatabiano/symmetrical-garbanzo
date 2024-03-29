import BreadCrumbs from '@/components/breadcrumbs';
import GradingAbout from '@/components/about/GradingAbout';
import Carousel from '@/components/carousel/Carousel';
import MainAbout from '@/components/about/MainAbout';
import IntroSecAbout from '@/components/fragments/about/IntroSectAbout';
import SocialMedia from '@/components/elements/SocialMedia';
import Button from '@/components/button';
import Link from 'next/link';

export default function AboutPage() {
    const images = [
        'https://th.bing.com/th/id/OIG3.ntNqNnFmRtN4T2WRW83b?pid=ImgGn',
        'https://th.bing.com/th/id/OIG3.ntNqNnFmRtN4T2WRW83b?pid=ImgGn',
        'https://th.bing.com/th/id/OIG3.ntNqNnFmRtN4T2WRW83b?pid=ImgGn',
        'https://th.bing.com/th/id/OIG3.ntNqNnFmRtN4T2WRW83b?pid=ImgGn',
    ];
    return (
        <div>
            <BreadCrumbs />
            <header className="text-center w-full my-10">
                {/* <video
                    className="w-full  "
                    src="/images/about.mp4"
                    autoPlay
                    loop
                    muted
                /> */}
                <h1 className="text-6xl font-bold inline">
                    <span className="text-[#269faa] font-['ZCOOL_KuaiLe']">
                        About
                    </span>{' '}
                    Us!
                </h1>
            </header>
            <MainAbout />
            <section className="mt-10">
                <GradingAbout />
            </section>
            <section className="mt-10">
                <Carousel images={images} />
            </section>

            <IntroSecAbout />
            <section>
                <div className="w-2/3 mx-auto rounded-full p-10 items-center justify-center text-center bg-[rgb(241,187,8,0.5)]">
                    <h1 className="text-3xl font-bold">
                        !Professional{' '}
                        <span className="text-[#269faa] font-['ZCOOL_KuaiLe']">
                            Kitchen
                        </span>
                    </h1>
                    <p className="my-5 w-1/2 mx-auto text-lg font-thin">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur-laborum maiores? Voluptates adipisci ad,
                        explicabo nesciunt quibusdam qui pariatur officiis
                        tempora dolorem dolor distinctio harum!
                    </p>
                    <div className="flex space-x-5 justify-center">
                        <Button>Join</Button>
                        <Button>Contact</Button>
                    </div>
                </div>
                <div className="w-full p-10 justify-around flex flex-row flex-wrap">
                    <div className="w-1/4 m-5 bg-[rgba(0,0,0,0.1)] justify-center items-center text-center p-8">
                        <div>
                            <img
                                className="w-full"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJF-rQg7Q_fq_T8tFh7hvJoc5IEzPp4l7fklX2KqCfQ&s"
                                alt=""
                            />
                        </div>
                        <div className="my-5 space-y-3">
                            <h1 className="font-bold text-2xl">
                                Jono Pamungkas
                            </h1>
                            <p className="text-xl font-semibold">
                                Professional Chef
                            </p>
                            <p className="text-xl font-thin ">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Corporis, officiis?
                            </p>
                        </div>
                        <div>
                            <ul className="flex justify-between items-center">
                                <li>
                                    <Link href={'/'}>
                                        <SocialMedia.Facebook width={'w-10'} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <SocialMedia.Instagram width={'w-10'} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <SocialMedia.LinkedIn width={'w-10'} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/4 m-5 bg-[rgba(0,0,0,0.1)] justify-center items-center text-center p-8">
                        <div>
                            <img
                                className="w-full"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJF-rQg7Q_fq_T8tFh7hvJoc5IEzPp4l7fklX2KqCfQ&s"
                                alt=""
                            />
                        </div>
                        <div className="my-5 space-y-3">
                            <h1 className="font-bold text-2xl">
                                Jono Pamungkas
                            </h1>
                            <p className="text-xl font-semibold">
                                Professional Chef
                            </p>
                            <p className="text-xl font-thin ">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Corporis, officiis?
                            </p>
                        </div>
                        <div>
                            <ul className="flex justify-between items-center">
                                <li>
                                    <Link href={'/'}>
                                        <SocialMedia.Facebook width={'w-10'} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <SocialMedia.Instagram width={'w-10'} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <SocialMedia.LinkedIn width={'w-10'} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/4 m-5 bg-[rgba(0,0,0,0.1)] justify-center items-center text-center p-8">
                        <div>
                            <img
                                className="w-full"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJF-rQg7Q_fq_T8tFh7hvJoc5IEzPp4l7fklX2KqCfQ&s"
                                alt=""
                            />
                        </div>
                        <div className="my-5 space-y-3">
                            <h1 className="font-bold text-2xl">
                                Jono Pamungkas
                            </h1>
                            <p className="text-xl font-semibold">
                                Professional Chef
                            </p>
                            <p className="text-xl font-thin ">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Corporis, officiis?
                            </p>
                        </div>
                        <div>
                            <ul className="flex justify-between items-center">
                                <li>
                                    <Link href={'/'}>
                                        <SocialMedia.Facebook width={'w-10'} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <SocialMedia.Instagram width={'w-10'} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <SocialMedia.LinkedIn width={'w-10'} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/4 m-5 bg-[rgba(0,0,0,0.1)] justify-center items-center text-center p-8">
                        <div>
                            <img
                                className="w-full"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJF-rQg7Q_fq_T8tFh7hvJoc5IEzPp4l7fklX2KqCfQ&s"
                                alt=""
                            />
                        </div>
                        <div className="my-5 space-y-3">
                            <h1 className="font-bold text-2xl">
                                Jono Pamungkas
                            </h1>
                            <p className="text-xl font-semibold">
                                Professional Chef
                            </p>
                            <p className="text-xl font-thin ">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Corporis, officiis?
                            </p>
                        </div>
                        <div>
                            <ul className="flex justify-between items-center">
                                <li>
                                    <Link href={'/'}>
                                        <SocialMedia.Facebook width={'w-10'} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <SocialMedia.Instagram width={'w-10'} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <SocialMedia.LinkedIn width={'w-10'} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/4 m-5 bg-[rgba(0,0,0,0.1)] justify-center items-center text-center p-8">
                        <div>
                            <img
                                className="w-full"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJF-rQg7Q_fq_T8tFh7hvJoc5IEzPp4l7fklX2KqCfQ&s"
                                alt=""
                            />
                        </div>
                        <div className="my-5 space-y-3">
                            <h1 className="font-bold text-2xl">
                                Jono Pamungkas
                            </h1>
                            <p className="text-xl font-semibold">
                                Professional Chef
                            </p>
                            <p className="text-xl font-thin ">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Corporis, officiis?
                            </p>
                        </div>
                        <div>
                            <ul className="flex justify-between items-center">
                                <li>
                                    <Link href={'/'}>
                                        <SocialMedia.Facebook width={'w-10'} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <SocialMedia.Instagram width={'w-10'} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/'}>
                                        <SocialMedia.LinkedIn width={'w-10'} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
