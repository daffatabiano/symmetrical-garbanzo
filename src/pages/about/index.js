import BreadCrumbs from '@/components/breadcrumbs';
import GradingAbout from '@/components/about/GradingAbout';
import Carousel from '@/components/carousel/Carousel';
import MainAbout from '@/components/about/MainAbout';
import IntroSecAbout from '@/components/fragments/about/IntroSectAbout';
import SocialMedia from '@/components/elements/SocialMedia';
import Button from '@/components/button';
import Link from 'next/link';
import CardStaff from '@/components/cards/CardsStuff';
import useGetUsers from '@/hooks/useGetUsers';
import Footer from '@/components/fragments/footer/Footer';
import Loading from '../loading';
import { useState } from 'react';

export default function AboutPage() {
    const { staffs, images } = useGetUsers();
    const [loading, setLoading] = useState(false);
    if (loading) return <Loading />;
    return (
        <div>
            <BreadCrumbs path={'/about'} direction={'About'} />
            <header className="text-center w-full my-10">
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
                <div className=" mx-auto p-10 items-center justify-center text-center bg-[rgb(241,187,8,0.5)]">
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
                    {staffs.map((staff) => (
                        <CardStaff
                            key={staff.id}
                            image={staff.image}
                            name={staff.name}
                            profession={staff.profession}
                            description={staff.description}
                        >
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
                        </CardStaff>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}
