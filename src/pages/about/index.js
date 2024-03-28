import ValueAbout from '@/components/elements/valueAbout';
import BreadCrumbs from '@/components/breadcrumbs';
import GradingAbout from '@/components/about/GradingAbout';
import Carousel from '@/components/carousel/Carousel';
import MainAbout from '@/components/about/MainAbout';
import Link from 'next/link';
import SectionAbout from '@/components/about/SectionAbout';

export default function AboutPage() {
    const images = [
        {
            src: '/images/about1.jpg',
            alt: 'about1',
        },
        {
            src: '/images/about2.jpg',
            alt: 'about2',
        },
        {
            src: '/images/about3.jpg',
            alt: 'about3',
        },
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
            <section className="flex p-2 mt-10 justify-around">
                <SectionAbout title={'Since 1996'}
                    image={"https://th.bing.com/th/id/OIG2.o3j.NwcVMka_QG9JbSug?w=1024&h=1024&rs=1&pid=ImgDetMain"}
                    button={'Read More →'}>
                    <p className="mt-5 text-xl leading-10 font-thin bg-[rgba(38,159,170,0.6)] p-4 rounded-bl-none text-white rounded-3xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea quam eveniet odit fugiat eum, reiciendis at
                        architecto voluptatum ipsum voluptate exercitationem
                        quisquam dolorum explicabo veniam? Doloribus placeat ex
                        provident perferendis!
                    </p>
                </SectionAbout>
            </section>
        </div>
    );
}
